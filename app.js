const state = {
  all: QUESTIONS,
  filtered: [...QUESTIONS],
  index: 0,
  selected: {},
  score: 0,
  shuffleOptions: true,
};

const els = {
  categoryFilter: document.getElementById('categoryFilter'),
  searchInput: document.getElementById('searchInput'),
  shuffleBtn: document.getElementById('shuffleBtn'),
  resetBtn: document.getElementById('resetBtn'),
  scoreText: document.getElementById('scoreText'),
  progressText: document.getElementById('progressText'),
  answeredText: document.getElementById('answeredText'),
  progressBar: document.getElementById('progressBar'),
  categoryBadge: document.getElementById('categoryBadge'),
  questionNo: document.getElementById('questionNo'),
  questionText: document.getElementById('questionText'),
  options: document.getElementById('options'),
  feedback: document.getElementById('feedback'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  showAnswerBtn: document.getElementById('showAnswerBtn'),
  questionList: document.getElementById('questionList'),
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function initCategories() {
  const categories = [...new Set(state.all.map(q => q.category).filter(Boolean))];
  for (const cat of categories) {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    els.categoryFilter.appendChild(option);
  }
}

function getFiltered() {
  const cat = els.categoryFilter.value;
  const term = els.searchInput.value.trim().toLocaleLowerCase('tr-TR');
  return state.all.filter(q => {
    const matchCat = cat === 'all' || q.category === cat;
    const text = `${q.question} ${q.answer} ${q.category}`.toLocaleLowerCase('tr-TR');
    const matchTerm = !term || text.includes(term);
    return matchCat && matchTerm;
  });
}

function applyFilters() {
  state.filtered = getFiltered();
  state.index = 0;
  render();
}

function render() {
  if (!state.filtered.length) {
    els.questionText.textContent = 'Sonuç bulunamadı.';
    els.categoryBadge.textContent = '-';
    els.questionNo.textContent = '';
    els.options.innerHTML = '';
    els.feedback.classList.add('hidden');
    updateStats();
    return;
  }

  const q = state.filtered[state.index];
  const selected = state.selected[q.id];
  const options = q._renderOptions || (q._renderOptions = state.shuffleOptions ? shuffle(q.options) : [...q.options]);

  els.categoryBadge.textContent = q.category || 'Kategori yok';
  els.questionNo.textContent = `#${q.id}`;
  els.questionText.textContent = q.question;
  els.options.innerHTML = '';

  options.forEach((option, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option';
    btn.innerHTML = `<span class="letter">${String.fromCharCode(65 + idx)}</span><span>${escapeHtml(option.text)}</span>`;

    if (selected) {
      btn.disabled = true;
      if (option.correct) btn.classList.add('correct');
      if (selected.text === option.text && !option.correct) btn.classList.add('wrong');
    }

    btn.addEventListener('click', () => selectAnswer(q, option));
    els.options.appendChild(btn);
  });

  if (selected) showFeedback(q, selected);
  else els.feedback.classList.add('hidden');

  els.prevBtn.disabled = state.index === 0;
  els.nextBtn.disabled = state.index >= state.filtered.length - 1;
  updateStats();
  renderQuestionList();
}

function selectAnswer(q, option) {
  if (state.selected[q.id]) return;
  state.selected[q.id] = { text: option.text, correct: option.correct };
  if (option.correct) state.score += 1;
  render();
}

function showFeedback(q, selected) {
  const correct = q.options.find(o => o.correct);
  const result = selected.correct ? 'Doğru' : 'Yanlış';
  const note = q.note ? `<span class="note">Not: ${escapeHtml(q.note)}</span>` : '';
  els.feedback.innerHTML = `<strong>${result}.</strong> Doğru cevap: ${escapeHtml(correct.text)}${note}`;
  els.feedback.classList.remove('hidden');
}

function showAnswer() {
  const q = state.filtered[state.index];
  if (!q || state.selected[q.id]) return;
  const correct = q.options.find(o => o.correct);
  state.selected[q.id] = { text: correct.text, correct: false, revealed: true };
  render();
}

function updateStats() {
  const answeredCount = Object.keys(state.selected).length;
  els.scoreText.textContent = `${state.score} / ${answeredCount}`;
  els.answeredText.textContent = `Cevaplanan: ${answeredCount}`;
  const total = state.filtered.length || 0;
  const current = total ? state.index + 1 : 0;
  els.progressText.textContent = `Soru ${current} / ${total}`;
  const percent = total ? (current / total) * 100 : 0;
  els.progressBar.style.width = `${percent}%`;
}

function renderQuestionList() {
  els.questionList.innerHTML = '';
  state.filtered.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'jump';
    if (idx === state.index) btn.classList.add('active');
    if (state.selected[q.id]) btn.classList.add('done');
    btn.textContent = q.id;
    btn.title = q.question;
    btn.addEventListener('click', () => {
      state.index = idx;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    els.questionList.appendChild(btn);
  });
}

function resetAll() {
  state.selected = {};
  state.score = 0;
  state.index = 0;
  state.all.forEach(q => delete q._renderOptions);
  render();
}

els.prevBtn.addEventListener('click', () => { state.index = Math.max(0, state.index - 1); render(); });
els.nextBtn.addEventListener('click', () => { state.index = Math.min(state.filtered.length - 1, state.index + 1); render(); });
els.showAnswerBtn.addEventListener('click', showAnswer);
els.resetBtn.addEventListener('click', resetAll);
els.shuffleBtn.addEventListener('click', () => {
  state.filtered = shuffle(state.filtered);
  state.index = 0;
  state.filtered.forEach(q => delete q._renderOptions);
  render();
});
els.categoryFilter.addEventListener('change', applyFilters);
els.searchInput.addEventListener('input', applyFilters);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') els.nextBtn.click();
  if (event.key === 'ArrowLeft') els.prevBtn.click();
  if (['1','2','3'].includes(event.key)) {
    const btn = els.options.querySelectorAll('.option')[Number(event.key) - 1];
    if (btn) btn.click();
  }
});

initCategories();
render();
