const QUESTIONS = [
  {
    "id": 1,
    "category": "A - GENEL SİSTEM VE BAĞLANTILAR",
    "question": "EEC'nin ADIRU ile bağlantısı nasıldır?",
    "answer": "EIU vasıtasıyla / Directly",
    "note": "",
    "options": [
      {
        "text": "EIU vasıtasıyla / Directly",
        "correct": true
      },
      {
        "text": "HPT Stage 2 Blade'ini soğutur / HPT 1 Turbine Disc",
        "correct": false
      },
      {
        "text": "BMC 1",
        "correct": false
      }
    ]
  },
  {
    "id": 2,
    "category": "A - GENEL SİSTEM VE BAĞLANTILAR",
    "question": "Data enter plug hangisiyle bağlantılıdır?",
    "answer": "EEC",
    "note": "",
    "options": [
      {
        "text": "EEC",
        "correct": true
      },
      {
        "text": "Sadece BMC1 / BMC #1",
        "correct": false
      },
      {
        "text": "Fuel, Hydraulic, Water, Oil",
        "correct": false
      }
    ]
  },
  {
    "id": 3,
    "category": "A - GENEL SİSTEM VE BAĞLANTILAR",
    "question": "EVMU hangileri ile iletişimdedir?",
    "answer": "CFDS, AIDS, ECAM",
    "note": "",
    "options": [
      {
        "text": "CFDS, AIDS, ECAM",
        "correct": true
      },
      {
        "text": "4 Thermocouple",
        "correct": false
      },
      {
        "text": "EPR Target hesaplar",
        "correct": false
      }
    ]
  },
  {
    "id": 4,
    "category": "A - GENEL SİSTEM VE BAĞLANTILAR",
    "question": "EIU ile autothrust'ın direct interface'i?",
    "answer": "FCU (Flight Control Unit)",
    "note": "",
    "options": [
      {
        "text": "FCU (Flight Control Unit)",
        "correct": true
      },
      {
        "text": "HPT Stage 2 Blade'ini soğutur / HPT 1 Turbine Disc",
        "correct": false
      },
      {
        "text": "60 PSI",
        "correct": false
      }
    ]
  },
  {
    "id": 5,
    "category": "A - GENEL SİSTEM VE BAĞLANTILAR",
    "question": "LGCIU bağlantısı?",
    "answer": "EIU",
    "note": "",
    "options": [
      {
        "text": "EIU",
        "correct": true
      },
      {
        "text": "SEC",
        "correct": false
      },
      {
        "text": "Engine Pressure Ratio",
        "correct": false
      }
    ]
  },
  {
    "id": 6,
    "category": "A - GENEL SİSTEM VE BAĞLANTILAR",
    "question": "FMGC'nin görevi nedir (EPR ile ilgili)?",
    "answer": "EPR Target hesaplar",
    "note": "",
    "options": [
      {
        "text": "EPR Target hesaplar",
        "correct": true
      },
      {
        "text": "LVDT (upper) / IVDT (upper)",
        "correct": false
      },
      {
        "text": "MAN SW P/B press in / MAN P/B switch",
        "correct": false
      }
    ]
  },
  {
    "id": 7,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "N1 üzerindeki kademeler?",
    "answer": "1 Fan, 4 Booster, 5 LPT",
    "note": "",
    "options": [
      {
        "text": "1 Fan, 4 Booster, 5 LPT",
        "correct": true
      },
      {
        "text": "Fuel, Water, Hydraulic",
        "correct": false
      },
      {
        "text": "1 Master actuator, 1 Slave actuator",
        "correct": false
      }
    ]
  },
  {
    "id": 8,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "N1 yatakları hangileridir?",
    "answer": "1B (1 Ball), 2R (2 Roll), 5R (5 Roll)",
    "note": "",
    "options": [
      {
        "text": "1B (1 Ball), 2R (2 Roll), 5R (5 Roll)",
        "correct": true
      },
      {
        "text": "Intermediate Case",
        "correct": false
      },
      {
        "text": "Manual ve Auto / Dual motor",
        "correct": false
      }
    ]
  },
  {
    "id": 9,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Thrust bearing'ler hangileridir?",
    "answer": "1B ve 3B",
    "note": "",
    "options": [
      {
        "text": "1B ve 3B",
        "correct": true
      },
      {
        "text": "Automatic changeover to standby active channel",
        "correct": false
      },
      {
        "text": "Close to minimum flow",
        "correct": false
      }
    ]
  },
  {
    "id": 10,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Torsion bearing'ler hangileridir?",
    "answer": "2R, 4R, 5R",
    "note": "",
    "options": [
      {
        "text": "2R, 4R, 5R",
        "correct": true
      },
      {
        "text": "Indicates filter clogged",
        "correct": false
      },
      {
        "text": "2 İgniter",
        "correct": false
      }
    ]
  },
  {
    "id": 11,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "N2 üzerinde kaç stage var?",
    "answer": "10 HPC (High Pressure Compressor), 2 HPT (High Pressure Turbine)",
    "note": "",
    "options": [
      {
        "text": "10 HPC (High Pressure Compressor), 2 HPT (High Pressure Turbine)",
        "correct": true
      },
      {
        "text": "HPSOV kapanmaz / Açık kalır",
        "correct": false
      },
      {
        "text": "20 Nozzle",
        "correct": false
      }
    ]
  },
  {
    "id": 12,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "LPT kaç stage'den oluşur?",
    "answer": "5 Stage",
    "note": "",
    "options": [
      {
        "text": "5 Stage",
        "correct": true
      },
      {
        "text": "28 V DC",
        "correct": false
      },
      {
        "text": "FMU",
        "correct": false
      }
    ]
  },
  {
    "id": 13,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "V2500 booster sayısı?",
    "answer": "4 Booster (Stage 1.5 - 2 - 2.3 - 2.5)",
    "note": "",
    "options": [
      {
        "text": "4 Booster (Stage 1.5 - 2 - 2.3 - 2.5)",
        "correct": true
      },
      {
        "text": "Aerodynamic smoothness, protect engine",
        "correct": false
      },
      {
        "text": "3 LP, 2 HP",
        "correct": false
      }
    ]
  },
  {
    "id": 14,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "HPC 10 stage havası neyi soğutur?",
    "answer": "HPT Stage 2 Blade'ini soğutur / HPT 1 Turbine Disc",
    "note": "",
    "options": [
      {
        "text": "HPT Stage 2 Blade'ini soğutur / HPT 1 Turbine Disc",
        "correct": true
      },
      {
        "text": "20 Nozzle",
        "correct": false
      },
      {
        "text": "Dedicated Alternator",
        "correct": false
      }
    ]
  },
  {
    "id": 15,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "ACOC havası nereden gelir?",
    "answer": "Stage 12 havası + Fan Bypass havası (12.5)",
    "note": "",
    "options": [
      {
        "text": "Stage 12 havası + Fan Bypass havası (12.5)",
        "correct": true
      },
      {
        "text": "Below 5 Quarts",
        "correct": false
      },
      {
        "text": "N2",
        "correct": false
      }
    ]
  },
  {
    "id": 16,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Combustion chamber'da kaç igniter var?",
    "answer": "2 İgniter",
    "note": "",
    "options": [
      {
        "text": "2 İgniter",
        "correct": true
      },
      {
        "text": "BSBV + VSV + Handling Bleed",
        "correct": false
      },
      {
        "text": "2R, 4R, 5R",
        "correct": false
      }
    ]
  },
  {
    "id": 17,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Kaç tane nozzle vardır?",
    "answer": "20 Nozzle",
    "note": "",
    "options": [
      {
        "text": "20 Nozzle",
        "correct": true
      },
      {
        "text": "Related PRV closed",
        "correct": false
      },
      {
        "text": "15 saniye / 15 sn",
        "correct": false
      }
    ]
  },
  {
    "id": 18,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Kaç line vardır?",
    "answer": "10 Lines",
    "note": "",
    "options": [
      {
        "text": "10 Lines",
        "correct": true
      },
      {
        "text": "N2 overspeed",
        "correct": false
      },
      {
        "text": "Engine Pressure Ratio",
        "correct": false
      }
    ]
  },
  {
    "id": 19,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Fan case zone 1 soğutması nerden yapılır?",
    "answer": "RAM AIR",
    "note": "",
    "options": [
      {
        "text": "RAM AIR",
        "correct": true
      },
      {
        "text": "N1 + EPR",
        "correct": false
      },
      {
        "text": "EVMU by IPS (Inch Per Second)",
        "correct": false
      }
    ]
  },
  {
    "id": 20,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Engine cowl'un (Fan cowl) görevi nedir?",
    "answer": "Aerodynamic smoothness, protect engine",
    "note": "",
    "options": [
      {
        "text": "Aerodynamic smoothness, protect engine",
        "correct": true
      },
      {
        "text": "Forward thrust area detent point",
        "correct": false
      },
      {
        "text": "1 Master actuator, 1 Slave actuator",
        "correct": false
      }
    ]
  },
  {
    "id": 21,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Engine nose (intake) cowl'un görevi nedir?",
    "answer": "Intake air smoothness",
    "note": "",
    "options": [
      {
        "text": "Intake air smoothness",
        "correct": true
      },
      {
        "text": "1B (1 Ball), 2R (2 Roll), 5R (5 Roll)",
        "correct": false
      },
      {
        "text": "RH fan cowl",
        "correct": false
      }
    ]
  },
  {
    "id": 22,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Strake nerededir?",
    "answer": "Inner Nacelle",
    "note": "",
    "options": [
      {
        "text": "Inner Nacelle",
        "correct": true
      },
      {
        "text": "Dedicated Alternator",
        "correct": false
      },
      {
        "text": "BMC 1",
        "correct": false
      }
    ]
  },
  {
    "id": 23,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Bearing location (sayı)?",
    "answer": "3 LP, 2 HP",
    "note": "",
    "options": [
      {
        "text": "3 LP, 2 HP",
        "correct": true
      },
      {
        "text": "P2/T2 heating ve ignition",
        "correct": false
      },
      {
        "text": "30 saniye sonra",
        "correct": false
      }
    ]
  },
  {
    "id": 24,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Forward mount nerededir?",
    "answer": "Intermediate Case",
    "note": "",
    "options": [
      {
        "text": "Intermediate Case",
        "correct": true
      },
      {
        "text": "FCU (Flight Control Unit)",
        "correct": false
      },
      {
        "text": "Fail durumunda",
        "correct": false
      }
    ]
  },
  {
    "id": 25,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Accessory gearbox nerededir?",
    "answer": "Fan Case altında / Under fan case",
    "note": "",
    "options": [
      {
        "text": "Fan Case altında / Under fan case",
        "correct": true
      },
      {
        "text": "Max open / Fully open",
        "correct": false
      },
      {
        "text": "Normal operasyonda",
        "correct": false
      }
    ]
  },
  {
    "id": 26,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Air starter nerededir?",
    "answer": "ENG RH side accessory gearbox üzerinde",
    "note": "",
    "options": [
      {
        "text": "ENG RH side accessory gearbox üzerinde",
        "correct": true
      },
      {
        "text": "T4.95 / Station 4,95 (LPT exhaust case)",
        "correct": false
      },
      {
        "text": "Direct EEC / Directly EEC",
        "correct": false
      }
    ]
  },
  {
    "id": 27,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Pylon drain hattından hangileri atılır?",
    "answer": "Fuel, Water, Hydraulic",
    "note": "",
    "options": [
      {
        "text": "Fuel, Water, Hydraulic",
        "correct": true
      },
      {
        "text": "Open / Max open",
        "correct": false
      },
      {
        "text": "EIU vasıtasıyla / Directly",
        "correct": false
      }
    ]
  },
  {
    "id": 28,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Motor drain'den neler atılır?",
    "answer": "Fuel, Hydraulic, Water, Oil",
    "note": "",
    "options": [
      {
        "text": "Fuel, Hydraulic, Water, Oil",
        "correct": true
      },
      {
        "text": "4 Booster (Stage 1.5 - 2 - 2.3 - 2.5)",
        "correct": false
      },
      {
        "text": "Titreşim; EVMU tarafından N1, N2 ve dual accelerometer kullanılarak izlenen parametredir.",
        "correct": false
      }
    ]
  },
  {
    "id": 29,
    "category": "B - MOTOR KOMPONENTLERİ VE YAPISAL",
    "question": "Drain location (genel)?",
    "answer": "Bottom, Pylon / Rear pylon bottom engine",
    "note": "",
    "options": [
      {
        "text": "Bottom, Pylon / Rear pylon bottom engine",
        "correct": true
      },
      {
        "text": "Through EEC",
        "correct": false
      },
      {
        "text": "Open / Fail safe - both open",
        "correct": false
      }
    ]
  },
  {
    "id": 30,
    "category": "C - YAKIT SİSTEMİ",
    "question": "FCOC'un görevi nedir?",
    "answer": "Engine oil'i soğutur / Cools engine oil",
    "note": "",
    "options": [
      {
        "text": "Engine oil'i soğutur / Cools engine oil",
        "correct": true
      },
      {
        "text": "Forward thrust area detent point",
        "correct": false
      },
      {
        "text": "NO 2 bearing comp / N2 bearing compartment",
        "correct": false
      }
    ]
  },
  {
    "id": 31,
    "category": "C - YAKIT SİSTEMİ",
    "question": "FDRV nerededir?",
    "answer": "FCOC'un arkasında / FCOC ilerisinde fuel filter üzerinde",
    "note": "",
    "options": [
      {
        "text": "FCOC'un arkasında / FCOC ilerisinde fuel filter üzerinde",
        "correct": true
      },
      {
        "text": "Uzun süre kullanılmayacaksa / During period of inactivity / Storage",
        "correct": false
      },
      {
        "text": "BMC1",
        "correct": false
      }
    ]
  },
  {
    "id": 32,
    "category": "C - YAKIT SİSTEMİ",
    "question": "Fuel metering unit'te kaç tane torque motor var?",
    "answer": "3 Torque motor",
    "note": "",
    "options": [
      {
        "text": "3 Torque motor",
        "correct": true
      },
      {
        "text": "Dedicated alternator",
        "correct": false
      },
      {
        "text": "28V DC / 28 VDC",
        "correct": false
      }
    ]
  },
  {
    "id": 33,
    "category": "C - YAKIT SİSTEMİ",
    "question": "Fuel used'ı kim hesaplar?",
    "answer": "EEC",
    "note": "",
    "options": [
      {
        "text": "EEC",
        "correct": true
      },
      {
        "text": "P2/T2 heating ve ignition",
        "correct": false
      },
      {
        "text": "Fuel, Water, Hydraulic",
        "correct": false
      }
    ]
  },
  {
    "id": 34,
    "category": "C - YAKIT SİSTEMİ",
    "question": "Fuel temperature sensor'ün görevi?",
    "answer": "FDRV operation için",
    "note": "",
    "options": [
      {
        "text": "FDRV operation için",
        "correct": true
      },
      {
        "text": "5 Quarts altında / Below 5 Quarts",
        "correct": false
      },
      {
        "text": "SEC / HCU",
        "correct": false
      }
    ]
  },
  {
    "id": 35,
    "category": "C - YAKIT SİSTEMİ",
    "question": "Fuel adjuster'ın görevi?",
    "answer": "Normal ve High flow adjustment",
    "note": "",
    "options": [
      {
        "text": "Normal ve High flow adjustment",
        "correct": true
      },
      {
        "text": "Manual ve Auto / Dual motor",
        "correct": false
      },
      {
        "text": "Stage 12 havası + Fan Bypass havası (12.5)",
        "correct": false
      }
    ]
  },
  {
    "id": 36,
    "category": "C - YAKIT SİSTEMİ",
    "question": "LP valve'i kim kontrol eder?",
    "answer": "Fire P/B ve Master Lever / Master Switch",
    "note": "",
    "options": [
      {
        "text": "Fire P/B ve Master Lever / Master Switch",
        "correct": true
      },
      {
        "text": "3 ea Stage 7, 1 ea Stage 10 / 3 tane 7th stage, 1 tane 10th stage",
        "correct": false
      },
      {
        "text": "1 Master actuator, 1 Slave actuator",
        "correct": false
      }
    ]
  },
  {
    "id": 37,
    "category": "C - YAKIT SİSTEMİ",
    "question": "LP valve kaç elektrik motor var?",
    "answer": "2 Elektrik motor",
    "note": "",
    "options": [
      {
        "text": "2 Elektrik motor",
        "correct": true
      },
      {
        "text": "HCU'da reverse deactivate / Deactive HCU / 7C13",
        "correct": false
      },
      {
        "text": "200°C",
        "correct": false
      }
    ]
  },
  {
    "id": 38,
    "category": "C - YAKIT SİSTEMİ",
    "question": "LP shut off valve nasıl çalışır?",
    "answer": "2 Elektrik motor ile",
    "note": "",
    "options": [
      {
        "text": "2 Elektrik motor ile",
        "correct": true
      },
      {
        "text": "APU BLEED ON iken motor PRV’leri elektriksel olarak kapalı tutulur; her iki PRV de kapalı olmalıdır.",
        "correct": false
      },
      {
        "text": "2 İgniter",
        "correct": false
      }
    ]
  },
  {
    "id": 39,
    "category": "C - YAKIT SİSTEMİ",
    "question": "Common nozzle'ın faydası nedir?",
    "answer": "Decrease noise",
    "note": "",
    "options": [
      {
        "text": "Decrease noise",
        "correct": true
      },
      {
        "text": "HPT + LPT Case / HPT/LPT case",
        "correct": false
      },
      {
        "text": "MCDU",
        "correct": false
      }
    ]
  },
  {
    "id": 40,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Low oil pressure uyarısı kaç PSI'de gelir?",
    "answer": "60 PSI",
    "note": "",
    "options": [
      {
        "text": "60 PSI",
        "correct": true
      },
      {
        "text": "Fan case altında",
        "correct": false
      },
      {
        "text": "5 Stage",
        "correct": false
      }
    ]
  },
  {
    "id": 41,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Low oil level uyarısı ne zaman gelir?",
    "answer": "5 Quarts altında / Below 5 Quarts",
    "note": "",
    "options": [
      {
        "text": "5 Quarts altında / Below 5 Quarts",
        "correct": true
      },
      {
        "text": "Inner Nacelle",
        "correct": false
      },
      {
        "text": "Intermediate Case",
        "correct": false
      }
    ]
  },
  {
    "id": 42,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Green flash ne zaman yanıp söner?",
    "answer": "Below 5 Quarts",
    "note": "",
    "options": [
      {
        "text": "Below 5 Quarts",
        "correct": true
      },
      {
        "text": "3, 4, 5 + IGV",
        "correct": false
      },
      {
        "text": "EEC",
        "correct": false
      }
    ]
  },
  {
    "id": 43,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Oil chip detector sayısı?",
    "answer": "7 Chip detector",
    "note": "",
    "options": [
      {
        "text": "7 Chip detector",
        "correct": true
      },
      {
        "text": "Auto close",
        "correct": false
      },
      {
        "text": "Accessory gearbox",
        "correct": false
      }
    ]
  },
  {
    "id": 44,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Total chip detector sayısı?",
    "answer": "7",
    "note": "",
    "options": [
      {
        "text": "7",
        "correct": true
      },
      {
        "text": "Aerodynamic smoothness, protect engine",
        "correct": false
      },
      {
        "text": "TOGA modu",
        "correct": false
      }
    ]
  },
  {
    "id": 45,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Master chip detector location?",
    "answer": "Scavenge filter downstream / Scavenge pump downstream / Main scavenge line",
    "note": "",
    "options": [
      {
        "text": "Scavenge filter downstream / Scavenge pump downstream / Main scavenge line",
        "correct": true
      },
      {
        "text": "115V AC devamlı / 115V AC Relay box",
        "correct": false
      },
      {
        "text": "De-energize open / De-energized open",
        "correct": false
      }
    ]
  },
  {
    "id": 46,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Metal debris'ten nasıl korunur?",
    "answer": "6 Chip detector, 6 Strainer",
    "note": "",
    "options": [
      {
        "text": "6 Chip detector, 6 Strainer",
        "correct": true
      },
      {
        "text": "Close to minimum flow",
        "correct": false
      },
      {
        "text": "N1, N2, Dual accelerometer",
        "correct": false
      }
    ]
  },
  {
    "id": 47,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Scavenge pump kaç tane?",
    "answer": "6 Scavenge pump",
    "note": "",
    "options": [
      {
        "text": "6 Scavenge pump",
        "correct": true
      },
      {
        "text": "6 Chip detector, 6 Strainer",
        "correct": false
      },
      {
        "text": "Temporary",
        "correct": false
      }
    ]
  },
  {
    "id": 48,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Scavenge valve idle position?",
    "answer": "Max open / Fully open",
    "note": "",
    "options": [
      {
        "text": "Max open / Fully open",
        "correct": true
      },
      {
        "text": "Through EEC / EEC",
        "correct": false
      },
      {
        "text": "T3",
        "correct": false
      }
    ]
  },
  {
    "id": 49,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Scavenge valve engine high speed'de?",
    "answer": "Close to minimum flow",
    "note": "",
    "options": [
      {
        "text": "Close to minimum flow",
        "correct": true
      },
      {
        "text": "200°C",
        "correct": false
      },
      {
        "text": "RH fan cowl",
        "correct": false
      }
    ]
  },
  {
    "id": 50,
    "category": "D - YAĞ SİSTEMİ",
    "question": "No. 4 bearing scavenge valve?",
    "answer": "No. 4 scavenge valve / 10th stage",
    "note": "",
    "options": [
      {
        "text": "No. 4 scavenge valve / 10th stage",
        "correct": true
      },
      {
        "text": "Channel change / Switchover olur",
        "correct": false
      },
      {
        "text": "De-energized OPEN",
        "correct": false
      }
    ]
  },
  {
    "id": 51,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Oil servicing nereden yapılır?",
    "answer": "LH (Left Hand) side",
    "note": "",
    "options": [
      {
        "text": "LH (Left Hand) side",
        "correct": true
      },
      {
        "text": "Indicates filter clogged",
        "correct": false
      },
      {
        "text": "P2/T2 heating ve ignition",
        "correct": false
      }
    ]
  },
  {
    "id": 52,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Oil system metal particle koruması?",
    "answer": "6 Strainer ve 6 Chip detector",
    "note": "",
    "options": [
      {
        "text": "6 Strainer ve 6 Chip detector",
        "correct": true
      },
      {
        "text": "HPT Stage 2 Blade'ini soğutur / HPT 1 Turbine Disc",
        "correct": false
      },
      {
        "text": "FMU",
        "correct": false
      }
    ]
  },
  {
    "id": 53,
    "category": "D - YAĞ SİSTEMİ",
    "question": "IDG yağı nasıl soğutulur?",
    "answer": "Fuel ile",
    "note": "",
    "options": [
      {
        "text": "Fuel ile",
        "correct": true
      },
      {
        "text": "3 Torque motor",
        "correct": false
      },
      {
        "text": "60 PSI",
        "correct": false
      }
    ]
  },
  {
    "id": 54,
    "category": "D - YAĞ SİSTEMİ",
    "question": "ECAM'a oil pressure bilgisi nereden gelir?",
    "answer": "No. 4 bearing transducer / No. 4 bearing scavenge valve arası",
    "note": "",
    "options": [
      {
        "text": "No. 4 bearing transducer / No. 4 bearing scavenge valve arası",
        "correct": true
      },
      {
        "text": "28V DC / 28 VDC",
        "correct": false
      },
      {
        "text": "6 Chip detector, 6 Strainer",
        "correct": false
      }
    ]
  },
  {
    "id": 55,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Oil tank nerededir?",
    "answer": "Rear oil tank",
    "note": "",
    "options": [
      {
        "text": "Rear oil tank",
        "correct": true
      },
      {
        "text": "EIU verir",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      }
    ]
  },
  {
    "id": 56,
    "category": "D - YAĞ SİSTEMİ",
    "question": "Filter clogged ΔP ne zaman oluşur?",
    "answer": "Scavenge filter clogged olunca",
    "note": "",
    "options": [
      {
        "text": "Scavenge filter clogged olunca",
        "correct": true
      },
      {
        "text": "Digital and Discrete",
        "correct": false
      },
      {
        "text": "Regulates pressure / PRV regulates",
        "correct": false
      }
    ]
  },
  {
    "id": 57,
    "category": "D - YAĞ SİSTEMİ",
    "question": "ΔP switch nedir?",
    "answer": "Indicates filter clogged",
    "note": "",
    "options": [
      {
        "text": "Indicates filter clogged",
        "correct": true
      },
      {
        "text": "EEC abort eder",
        "correct": false
      },
      {
        "text": "Abort, both continuous ignition / single continuous ignition",
        "correct": false
      }
    ]
  },
  {
    "id": 58,
    "category": "D - YAĞ SİSTEMİ",
    "question": "No oil sorusu?",
    "answer": "FCOC",
    "note": "",
    "options": [
      {
        "text": "FCOC",
        "correct": true
      },
      {
        "text": "Fuel ile",
        "correct": false
      },
      {
        "text": "5 Quarts altında / Below 5 Quarts",
        "correct": false
      }
    ]
  },
  {
    "id": 59,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "A321 uçaklarında thrust değerleri (range)?",
    "answer": "30000-33000 lbs / 31400-33000 lbs",
    "note": "",
    "options": [
      {
        "text": "30000-33000 lbs / 31400-33000 lbs",
        "correct": true
      },
      {
        "text": "Regulates pressure / PRV regulates",
        "correct": false
      },
      {
        "text": "Inlet cowl",
        "correct": false
      }
    ]
  },
  {
    "id": 60,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "V2500-AS thrust range?",
    "answer": "22000-33000 lbs",
    "note": "",
    "options": [
      {
        "text": "22000-33000 lbs",
        "correct": true
      },
      {
        "text": "Deactive",
        "correct": false
      },
      {
        "text": "ID Plug",
        "correct": false
      }
    ]
  },
  {
    "id": 61,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "TLA'da maximum thrust değeri nasıl ifade edilir?",
    "answer": "Forward thrust area detent point",
    "note": "",
    "options": [
      {
        "text": "Forward thrust area detent point",
        "correct": true
      },
      {
        "text": "ENG RH side accessory gearbox üzerinde",
        "correct": false
      },
      {
        "text": "Scavenge filter clogged olunca",
        "correct": false
      }
    ]
  },
  {
    "id": 62,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "Auto thrust IDLE ne zaman?",
    "answer": "Climb",
    "note": "",
    "options": [
      {
        "text": "Climb",
        "correct": true
      },
      {
        "text": "5 Stage",
        "correct": false
      },
      {
        "text": "LP filter çıkışında",
        "correct": false
      }
    ]
  },
  {
    "id": 63,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "Auto thrust interface?",
    "answer": "FCU",
    "note": "",
    "options": [
      {
        "text": "FCU",
        "correct": true
      },
      {
        "text": "Deactive",
        "correct": false
      },
      {
        "text": "Stage 12 havası + Fan Bypass havası (12.5)",
        "correct": false
      }
    ]
  },
  {
    "id": 64,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "Autothrust ve manual'de thrust'ı kim kontrol eder?",
    "answer": "EEC",
    "note": "",
    "options": [
      {
        "text": "EEC",
        "correct": true
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "Normal operasyonda",
        "correct": false
      }
    ]
  },
  {
    "id": 65,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "Thrust rating nedir?",
    "answer": "ID Plug",
    "note": "",
    "options": [
      {
        "text": "ID Plug",
        "correct": true
      },
      {
        "text": "EIU",
        "correct": false
      },
      {
        "text": "FIRE P/B and Master Lever",
        "correct": false
      }
    ]
  },
  {
    "id": 66,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "Engine thrust rating parametreleri?",
    "answer": "N1 + EPR",
    "note": "",
    "options": [
      {
        "text": "N1 + EPR",
        "correct": true
      },
      {
        "text": "Fuel servo",
        "correct": false
      },
      {
        "text": "Fan case altında",
        "correct": false
      }
    ]
  },
  {
    "id": 67,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "EPR nedir?",
    "answer": "Engine Pressure Ratio",
    "note": "",
    "options": [
      {
        "text": "Engine Pressure Ratio",
        "correct": true
      },
      {
        "text": "3 LP, 2 HP",
        "correct": false
      },
      {
        "text": "115V AC devamlı / 115V AC Relay box",
        "correct": false
      }
    ]
  },
  {
    "id": 68,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "Actual EPR formülü?",
    "answer": "P4.9 / P2",
    "note": "",
    "options": [
      {
        "text": "P4.9 / P2",
        "correct": true
      },
      {
        "text": "EIU",
        "correct": false
      },
      {
        "text": "HPT - LPT",
        "correct": false
      }
    ]
  },
  {
    "id": 69,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "EPR target hesaplamasını kim yapar?",
    "answer": "FMGC",
    "note": "",
    "options": [
      {
        "text": "FMGC",
        "correct": true
      },
      {
        "text": "LH side",
        "correct": false
      },
      {
        "text": "EEC",
        "correct": false
      }
    ]
  },
  {
    "id": 70,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "Thrust en fazla ne üzerinde görünür?",
    "answer": "Fan",
    "note": "",
    "options": [
      {
        "text": "Fan",
        "correct": true
      },
      {
        "text": "Scavenge filter clogged olunca",
        "correct": false
      },
      {
        "text": "Sadece BMC1 / BMC #1",
        "correct": false
      }
    ]
  },
  {
    "id": 71,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "Alpha Floor'da EEC motoru ne yapar?",
    "answer": "TOGA modu",
    "note": "",
    "options": [
      {
        "text": "TOGA modu",
        "correct": true
      },
      {
        "text": "P4.9 / P2",
        "correct": false
      },
      {
        "text": "Deploy olduğunda",
        "correct": false
      }
    ]
  },
  {
    "id": 72,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "BUMP function'ın görevi nedir?",
    "answer": "Additional thrust capability during take-off / Extra thrust",
    "note": "",
    "options": [
      {
        "text": "Additional thrust capability during take-off / Extra thrust",
        "correct": true
      },
      {
        "text": "85 PSI",
        "correct": false
      },
      {
        "text": "Inlet cowl üzerinde / Inlet cowl access door",
        "correct": false
      }
    ]
  },
  {
    "id": 73,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "Vibration nedir?",
    "answer": "Titreşim; EVMU tarafından N1, N2 ve dual accelerometer kullanılarak izlenen parametredir.",
    "note": "Kaynakta bu soru için düzeltme/belirsizlik notu bulundu; testte teknik açıklama esas alındı.",
    "options": [
      {
        "text": "Titreşim; EVMU tarafından N1, N2 ve dual accelerometer kullanılarak izlenen parametredir.",
        "correct": true
      },
      {
        "text": "3 ea Stage 7, 1 ea Stage 10 / 3 tane 7th stage, 1 tane 10th stage",
        "correct": false
      },
      {
        "text": "APU BLEED ON iken motor PRV’leri elektriksel olarak kapalı tutulur; her iki PRV de kapalı olmalıdır.",
        "correct": false
      }
    ]
  },
  {
    "id": 74,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "Her şey normal T/R hangi modu kullanır?",
    "answer": "Rated mode",
    "note": "",
    "options": [
      {
        "text": "Rated mode",
        "correct": true
      },
      {
        "text": "3, 4, 5 + IGV",
        "correct": false
      },
      {
        "text": "Fuel, Hydraulic, Water, Oil",
        "correct": false
      }
    ]
  },
  {
    "id": 75,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "N1 rated mode ne zaman?",
    "answer": "Normal operasyonda",
    "note": "",
    "options": [
      {
        "text": "Normal operasyonda",
        "correct": true
      },
      {
        "text": "APU BLEED ON iken motor PRV’leri elektriksel olarak kapalı tutulur; her iki PRV de kapalı olmalıdır.",
        "correct": false
      },
      {
        "text": "Inlet cowl üzerinde / Inlet cowl access door",
        "correct": false
      }
    ]
  },
  {
    "id": 76,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "N1 unrated mode ne zaman olur?",
    "answer": "T2 sensörü yoksa / T2 loss / T2 giderse",
    "note": "",
    "options": [
      {
        "text": "T2 sensörü yoksa / T2 loss / T2 giderse",
        "correct": true
      },
      {
        "text": "Overhead panel",
        "correct": false
      },
      {
        "text": "Inlet cowl access door",
        "correct": false
      }
    ]
  },
  {
    "id": 77,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "P4.9 sensor lost durumunda?",
    "answer": "T2 available, N1 rated mode",
    "note": "",
    "options": [
      {
        "text": "T2 available, N1 rated mode",
        "correct": true
      },
      {
        "text": "4 dakika / 4 minutes",
        "correct": false
      },
      {
        "text": "Uzun süre kullanılmayacaksa / During period of inactivity / Storage",
        "correct": false
      }
    ]
  },
  {
    "id": 78,
    "category": "E - İTKİ VE PERFORMANS",
    "question": "EPR thrust mode?",
    "answer": "Upper detent",
    "note": "",
    "options": [
      {
        "text": "Upper detent",
        "correct": true
      },
      {
        "text": "Sadece BMC1 / BMC #1",
        "correct": false
      },
      {
        "text": "APU bleed sol manifold/crossbleed hattına bağlıdır; sol wing/APU hattı leak durumunda BMC 1 APU bleed valve’i kapatır.",
        "correct": false
      }
    ]
  },
  {
    "id": 79,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Ignition cakması nasıl gerçekleşir?",
    "answer": "115 V AC",
    "note": "",
    "options": [
      {
        "text": "115 V AC",
        "correct": true
      },
      {
        "text": "FCU",
        "correct": false
      },
      {
        "text": "FCOC'un arkasında / FCOC ilerisinde fuel filter üzerinde",
        "correct": false
      }
    ]
  },
  {
    "id": 80,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Ignition plug pozisyonu?",
    "answer": "4-5 o'clock / Clock 4,5",
    "note": "",
    "options": [
      {
        "text": "4-5 o'clock / Clock 4,5",
        "correct": true
      },
      {
        "text": "MCDU",
        "correct": false
      },
      {
        "text": "1 Fan, 4 Booster, 5 LPT",
        "correct": false
      }
    ]
  },
  {
    "id": 81,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Kaç tane igniter plug vardır?",
    "answer": "2",
    "note": "",
    "options": [
      {
        "text": "2",
        "correct": true
      },
      {
        "text": "FIRE P/B and Master Lever",
        "correct": false
      },
      {
        "text": "4 dakika / 4 minutes",
        "correct": false
      }
    ]
  },
  {
    "id": 82,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Igniter nasıl enerjilenir?",
    "answer": "115 V AC - EEC ve Relay Box vasıtasıyla / EEC 115V",
    "note": "",
    "options": [
      {
        "text": "115 V AC - EEC ve Relay Box vasıtasıyla / EEC 115V",
        "correct": true
      },
      {
        "text": "A veya B ignition yapar",
        "correct": false
      },
      {
        "text": "Not in command position",
        "correct": false
      }
    ]
  },
  {
    "id": 83,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Ignition ne zaman energized olur?",
    "answer": "EIU fault durumunda",
    "note": "",
    "options": [
      {
        "text": "EIU fault durumunda",
        "correct": true
      },
      {
        "text": "HCU üzerinden",
        "correct": false
      },
      {
        "text": "Deactive",
        "correct": false
      }
    ]
  },
  {
    "id": 84,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Relay box görevi nedir?",
    "answer": "P2/T2 heating ve ignition",
    "note": "",
    "options": [
      {
        "text": "P2/T2 heating ve ignition",
        "correct": true
      },
      {
        "text": "EIU",
        "correct": false
      },
      {
        "text": "Deactive",
        "correct": false
      }
    ]
  },
  {
    "id": 85,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Relay box 115V nereden alır?",
    "answer": "EIU üzerinden",
    "note": "",
    "options": [
      {
        "text": "EIU üzerinden",
        "correct": true
      },
      {
        "text": "Precooler downstream / PRV upstream / Precooler çıkış, PRV giriş",
        "correct": false
      },
      {
        "text": "TLA, on ground, N2, SEC, LGCIU",
        "correct": false
      }
    ]
  },
  {
    "id": 86,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Relay box ignition command'ı nereden alır?",
    "answer": "EEC'den",
    "note": "",
    "options": [
      {
        "text": "EEC'den",
        "correct": true
      },
      {
        "text": "Tork motor / Torque motor",
        "correct": false
      },
      {
        "text": "Sadece BMC1 / BMC #1",
        "correct": false
      }
    ]
  },
  {
    "id": 87,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Auto start'ta ignition?",
    "answer": "A veya B ignition yapar",
    "note": "",
    "options": [
      {
        "text": "A veya B ignition yapar",
        "correct": true
      },
      {
        "text": "44 PSI",
        "correct": false
      },
      {
        "text": "EPR green",
        "correct": false
      }
    ]
  },
  {
    "id": 88,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Start selector knob NORM'de flame out/stall olursa?",
    "answer": "Her iki buji de çakmaya başlar / 2 buji çakar",
    "note": "",
    "options": [
      {
        "text": "Her iki buji de çakmaya başlar / 2 buji çakar",
        "correct": true
      },
      {
        "text": "EVMU by IPS (Inch Per Second)",
        "correct": false
      },
      {
        "text": "Fan Case altında / Under fan case",
        "correct": false
      }
    ]
  },
  {
    "id": 89,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Manuel start'ta ignition?",
    "answer": "Çift buji çakar / Both igniter continuous",
    "note": "",
    "options": [
      {
        "text": "Çift buji çakar / Both igniter continuous",
        "correct": true
      },
      {
        "text": "Only automatic mode",
        "correct": false
      },
      {
        "text": "Fuel servo control / Tek actuator (Same actuator)",
        "correct": false
      }
    ]
  },
  {
    "id": 90,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "EIU failure durumunda ignition?",
    "answer": "Continuous ignition (2 buji)",
    "note": "",
    "options": [
      {
        "text": "Continuous ignition (2 buji)",
        "correct": true
      },
      {
        "text": "Engine not start",
        "correct": false
      },
      {
        "text": "N1 + EPR",
        "correct": false
      }
    ]
  },
  {
    "id": 91,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Continuous ignition ne zaman olur?",
    "answer": "EIU fail durumunda",
    "note": "",
    "options": [
      {
        "text": "EIU fail durumunda",
        "correct": true
      },
      {
        "text": "Non return bypass / Return to bypass / Bypass",
        "correct": false
      },
      {
        "text": "10 HPC (High Pressure Compressor), 2 HPT (High Pressure Turbine)",
        "correct": false
      }
    ]
  },
  {
    "id": 92,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Auto start N2 < %43 olursa?",
    "answer": "EEC closes starter valve and cuts off ignition / EEC shutdown",
    "note": "",
    "options": [
      {
        "text": "EEC closes starter valve and cuts off ignition / EEC shutdown",
        "correct": true
      },
      {
        "text": "EPR Target hesaplar",
        "correct": false
      },
      {
        "text": "Inlet cowl üzerinde / Inlet cowl access door",
        "correct": false
      }
    ]
  },
  {
    "id": 93,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Auto start N2 > %50 fail durumunda?",
    "answer": "EEC abort eder",
    "note": "",
    "options": [
      {
        "text": "EEC abort eder",
        "correct": true
      },
      {
        "text": "T2 sensörü yoksa",
        "correct": false
      },
      {
        "text": "10 Lines",
        "correct": false
      }
    ]
  },
  {
    "id": 94,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Manual start N2 > %43?",
    "answer": "Start valve auto close",
    "note": "",
    "options": [
      {
        "text": "Start valve auto close",
        "correct": true
      },
      {
        "text": "EIU vasıtasıyla / Directly",
        "correct": false
      },
      {
        "text": "28V DC / 28 VDC",
        "correct": false
      }
    ]
  },
  {
    "id": 95,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Start valve ne zaman açılır (Manuel)?",
    "answer": "MAN SW P/B press in / MAN P/B switch",
    "note": "",
    "options": [
      {
        "text": "MAN SW P/B press in / MAN P/B switch",
        "correct": true
      },
      {
        "text": "Normal ve High flow adjustment",
        "correct": false
      },
      {
        "text": "CFDS, AIDS, ECAM",
        "correct": false
      }
    ]
  },
  {
    "id": 96,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Start valve nerededir?",
    "answer": "Sağ tarafta fan case üstünde / RH under fan cowl / RH fan cowl",
    "note": "",
    "options": [
      {
        "text": "Sağ tarafta fan case üstünde / RH under fan cowl / RH fan cowl",
        "correct": true
      },
      {
        "text": "28 V DC",
        "correct": false
      },
      {
        "text": "T4.95 / Station 4,95 (LPT exhaust case)",
        "correct": false
      }
    ]
  },
  {
    "id": 97,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Start panel nerededir?",
    "answer": "Sağ fan cowl",
    "note": "",
    "options": [
      {
        "text": "Sağ fan cowl",
        "correct": true
      },
      {
        "text": "60 PSI",
        "correct": false
      },
      {
        "text": "Open / Max open",
        "correct": false
      }
    ]
  },
  {
    "id": 98,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Starter nerededir?",
    "answer": "Acc. Gear Box / Accessory gearbox",
    "note": "",
    "options": [
      {
        "text": "Acc. Gear Box / Accessory gearbox",
        "correct": true
      },
      {
        "text": "115 V AC - EEC ve Relay Box vasıtasıyla / EEC 115V",
        "correct": false
      },
      {
        "text": "De-energized OPEN",
        "correct": false
      }
    ]
  },
  {
    "id": 99,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Engine panel P/B fault'u kim verir?",
    "answer": "EIU verir",
    "note": "",
    "options": [
      {
        "text": "EIU verir",
        "correct": true
      },
      {
        "text": "85 PSI",
        "correct": false
      },
      {
        "text": "Rated mode",
        "correct": false
      }
    ]
  },
  {
    "id": 100,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Start'ta fault lambası ne zaman yanar?",
    "answer": "Not in command position",
    "note": "",
    "options": [
      {
        "text": "Not in command position",
        "correct": true
      },
      {
        "text": "Bottom, Pylon / Rear pylon bottom engine",
        "correct": false
      },
      {
        "text": "1B (1 Ball), 2R (2 Roll), 5R (5 Roll)",
        "correct": false
      }
    ]
  },
  {
    "id": 101,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "N2 %10 üzerinde iken EEC nereden beslenir?",
    "answer": "Dedicated Alternator",
    "note": "",
    "options": [
      {
        "text": "Dedicated Alternator",
        "correct": true
      },
      {
        "text": "Slat extend (yerde)",
        "correct": false
      },
      {
        "text": "Forward thrust area detent point",
        "correct": false
      }
    ]
  },
  {
    "id": 102,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Engine running'de EEC nereden beslenir?",
    "answer": "EEC alternator / Dedicated alternator",
    "note": "",
    "options": [
      {
        "text": "EEC alternator / Dedicated alternator",
        "correct": true
      },
      {
        "text": "115 V AC - EEC ve Relay Box vasıtasıyla / EEC 115V",
        "correct": false
      },
      {
        "text": "Scavenge filter downstream / Scavenge pump downstream / Main scavenge line",
        "correct": false
      }
    ]
  },
  {
    "id": 103,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Auto start stall durumunda?",
    "answer": "Abort, both continuous ignition / single continuous ignition",
    "note": "",
    "options": [
      {
        "text": "Abort, both continuous ignition / single continuous ignition",
        "correct": true
      },
      {
        "text": "EIU",
        "correct": false
      },
      {
        "text": "T3",
        "correct": false
      }
    ]
  },
  {
    "id": 104,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Start ne zaman abort olur?",
    "answer": "Only automatic mode",
    "note": "",
    "options": [
      {
        "text": "Only automatic mode",
        "correct": true
      },
      {
        "text": "Acc. Gear Box / Accessory gearbox",
        "correct": false
      },
      {
        "text": "P2/T2 heating ve ignition",
        "correct": false
      }
    ]
  },
  {
    "id": 105,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Automatic start'ta igniter?",
    "answer": "After 30 second master lever",
    "note": "",
    "options": [
      {
        "text": "After 30 second master lever",
        "correct": true
      },
      {
        "text": "T2 sensörü yoksa / T2 loss / T2 giderse",
        "correct": false
      },
      {
        "text": "Upper detent",
        "correct": false
      }
    ]
  },
  {
    "id": 106,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Manual start'ta master lever ne zaman ON yapılır?",
    "answer": "30 saniye sonra",
    "note": "",
    "options": [
      {
        "text": "30 saniye sonra",
        "correct": true
      },
      {
        "text": "EIU",
        "correct": false
      },
      {
        "text": "Manual ve Auto / Dual motor",
        "correct": false
      }
    ]
  },
  {
    "id": 107,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Wet crank master lever pozisyonu?",
    "answer": "Master lever %20",
    "note": "",
    "options": [
      {
        "text": "Master lever %20",
        "correct": true
      },
      {
        "text": "MAN SW P/B press in / MAN P/B switch",
        "correct": false
      },
      {
        "text": "1B (1 Ball), 2R (2 Roll), 5R (5 Roll)",
        "correct": false
      }
    ]
  },
  {
    "id": 108,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Kaç dakika dry crank yapılır?",
    "answer": "4 dakika / 4 minutes",
    "note": "",
    "options": [
      {
        "text": "4 dakika / 4 minutes",
        "correct": true
      },
      {
        "text": "EEC",
        "correct": false
      },
      {
        "text": "Not in command position",
        "correct": false
      }
    ]
  },
  {
    "id": 109,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Dry crank 2 dakika sonra bekleme?",
    "answer": "15 saniye / 15 sn",
    "note": "",
    "options": [
      {
        "text": "15 saniye / 15 sn",
        "correct": true
      },
      {
        "text": "44 PSI",
        "correct": false
      },
      {
        "text": "After 30 second master lever",
        "correct": false
      }
    ]
  },
  {
    "id": 110,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Hot start'ta EEC ne yapar?",
    "answer": "EEC yakıtı ve ignition'ı otomatik kapatır",
    "note": "",
    "options": [
      {
        "text": "EEC yakıtı ve ignition'ı otomatik kapatır",
        "correct": true
      },
      {
        "text": "EEC torque motors in FMU",
        "correct": false
      },
      {
        "text": "Fan Case altında / Under fan case",
        "correct": false
      }
    ]
  },
  {
    "id": 111,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "Start knob NORM pozisyonu?",
    "answer": "Only automatic mode",
    "note": "",
    "options": [
      {
        "text": "Only automatic mode",
        "correct": true
      },
      {
        "text": "Max open / Fully open",
        "correct": false
      },
      {
        "text": "Abort, both continuous ignition / single continuous ignition",
        "correct": false
      }
    ]
  },
  {
    "id": 112,
    "category": "F - BAŞLATMA VE ATEŞLEME",
    "question": "EIU failure ne zaman olur?",
    "answer": "Engine not start",
    "note": "",
    "options": [
      {
        "text": "Engine not start",
        "correct": true
      },
      {
        "text": "30°C",
        "correct": false
      },
      {
        "text": "60 PSI",
        "correct": false
      }
    ]
  },
  {
    "id": 113,
    "category": "G - THRUST REVERSER",
    "question": "Thrust reverse manual deploy nasıl olur?",
    "answer": "Non return bypass / Return to bypass / Bypass",
    "note": "",
    "options": [
      {
        "text": "Non return bypass / Return to bypass / Bypass",
        "correct": true
      },
      {
        "text": "Hydraulic kendi stow eder",
        "correct": false
      },
      {
        "text": "Rear oil tank",
        "correct": false
      }
    ]
  },
  {
    "id": 114,
    "category": "G - THRUST REVERSER",
    "question": "Reverser operation logic?",
    "answer": "TLA, on ground, N2, SEC, LGCIU",
    "note": "",
    "options": [
      {
        "text": "TLA, on ground, N2, SEC, LGCIU",
        "correct": true
      },
      {
        "text": "HCU'da reverse deactivate / Deactive HCU / 7C13",
        "correct": false
      },
      {
        "text": "Only left side / PRV1 closed, PRV2 may regulated",
        "correct": false
      }
    ]
  },
  {
    "id": 115,
    "category": "G - THRUST REVERSER",
    "question": "T/R logic'te hangi bilgiler gerekli?",
    "answer": "LGCIU - A/C on ground, N2 sensor, ELAC ve SEC energized, Radio altimeter 10 feet below, TLA bilgisi",
    "note": "",
    "options": [
      {
        "text": "LGCIU - A/C on ground, N2 sensor, ELAC ve SEC energized, Radio altimeter 10 feet below, TLA bilgisi",
        "correct": true
      },
      {
        "text": "Normal operasyonda",
        "correct": false
      },
      {
        "text": "PRSOV ve Overspeed valve control eder (Torque Motor ile)",
        "correct": false
      }
    ]
  },
  {
    "id": 116,
    "category": "G - THRUST REVERSER",
    "question": "Thrust reverser'da shut off valve'i kontrol eden?",
    "answer": "SEC / HCU",
    "note": "",
    "options": [
      {
        "text": "SEC / HCU",
        "correct": true
      },
      {
        "text": "10 Lines",
        "correct": false
      },
      {
        "text": "6 Scavenge pump",
        "correct": false
      }
    ]
  },
  {
    "id": 117,
    "category": "G - THRUST REVERSER",
    "question": "On ground T/R deactivate nereden yapılır?",
    "answer": "HCU üzerinden",
    "note": "",
    "options": [
      {
        "text": "HCU üzerinden",
        "correct": true
      },
      {
        "text": "Engine Pressure Ratio",
        "correct": false
      },
      {
        "text": "Deactive",
        "correct": false
      }
    ]
  },
  {
    "id": 118,
    "category": "G - THRUST REVERSER",
    "question": "T/R uçuşta stow nasıl olur?",
    "answer": "Hydraulic kendi stow eder",
    "note": "",
    "options": [
      {
        "text": "Hydraulic kendi stow eder",
        "correct": true
      },
      {
        "text": "EEC abort eder",
        "correct": false
      },
      {
        "text": "85 PSI",
        "correct": false
      }
    ]
  },
  {
    "id": 119,
    "category": "G - THRUST REVERSER",
    "question": "T/R mechanical inhibition ne zaman?",
    "answer": "ENG x REV inhibited / X ENGINE, REV INHIBITED",
    "note": "",
    "options": [
      {
        "text": "ENG x REV inhibited / X ENGINE, REV INHIBITED",
        "correct": true
      },
      {
        "text": "60 PSI",
        "correct": false
      },
      {
        "text": "Fuel servo",
        "correct": false
      }
    ]
  },
  {
    "id": 120,
    "category": "G - THRUST REVERSER",
    "question": "T/R mechanical lock'ta ECAM'da ne yazar?",
    "answer": "ENG REV INHIBIT",
    "note": "",
    "options": [
      {
        "text": "ENG REV INHIBIT",
        "correct": true
      },
      {
        "text": "Start valve auto close",
        "correct": false
      },
      {
        "text": "EIU üzerinden",
        "correct": false
      }
    ]
  },
  {
    "id": 121,
    "category": "G - THRUST REVERSER",
    "question": "ECAM'da T/R indikasyonu ne zaman amber'den yeşile döner?",
    "answer": "Deploy olduğunda",
    "note": "",
    "options": [
      {
        "text": "Deploy olduğunda",
        "correct": true
      },
      {
        "text": "Indicates filter clogged",
        "correct": false
      },
      {
        "text": "N1",
        "correct": false
      }
    ]
  },
  {
    "id": 122,
    "category": "G - THRUST REVERSER",
    "question": "T/R nerede görünür?",
    "answer": "EPR green",
    "note": "",
    "options": [
      {
        "text": "EPR green",
        "correct": true
      },
      {
        "text": "N2 hız sensörü inlet cowl’da değildir; HP sistem/AGB ile ilişkili bölgeden okunur. Inlet cowl’da P2/T2 sensörü bulunur.",
        "correct": false
      },
      {
        "text": "Open / Max open",
        "correct": false
      }
    ]
  },
  {
    "id": 123,
    "category": "G - THRUST REVERSER",
    "question": "T/R deployment?",
    "answer": "LVDT (upper) / IVDT (upper)",
    "note": "",
    "options": [
      {
        "text": "LVDT (upper) / IVDT (upper)",
        "correct": true
      },
      {
        "text": "115 V AC",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      }
    ]
  },
  {
    "id": 124,
    "category": "G - THRUST REVERSER",
    "question": "Thrust reverser operation thrust?",
    "answer": "N1",
    "note": "",
    "options": [
      {
        "text": "N1",
        "correct": true
      },
      {
        "text": "Fan case altında",
        "correct": false
      },
      {
        "text": "HPT Stage 2 Blade'ini soğutur / HPT 1 Turbine Disc",
        "correct": false
      }
    ]
  },
  {
    "id": 125,
    "category": "G - THRUST REVERSER",
    "question": "Reverse flow nerede?",
    "answer": "Precooler downstream / PRV upstream / Precooler çıkış, PRV giriş",
    "note": "",
    "options": [
      {
        "text": "Precooler downstream / PRV upstream / Precooler çıkış, PRV giriş",
        "correct": true
      },
      {
        "text": "20 Nozzle",
        "correct": false
      },
      {
        "text": "Deactive",
        "correct": false
      }
    ]
  },
  {
    "id": 126,
    "category": "G - THRUST REVERSER",
    "question": "Reverse açılmıyorsa?",
    "answer": "Inhibition relay not energized",
    "note": "",
    "options": [
      {
        "text": "Inhibition relay not energized",
        "correct": true
      },
      {
        "text": "OPEN",
        "correct": false
      },
      {
        "text": "FCU",
        "correct": false
      }
    ]
  },
  {
    "id": 127,
    "category": "G - THRUST REVERSER",
    "question": "Inhibition relay'e kumandayı kim verir?",
    "answer": "EIU",
    "note": "",
    "options": [
      {
        "text": "EIU",
        "correct": true
      },
      {
        "text": "Inlet cowl üzerinde / Inlet cowl access door",
        "correct": false
      },
      {
        "text": "Velocity decreases",
        "correct": false
      }
    ]
  },
  {
    "id": 128,
    "category": "G - THRUST REVERSER",
    "question": "Inhibition relay nasıl enerjilenir?",
    "answer": "EIU",
    "note": "",
    "options": [
      {
        "text": "EIU",
        "correct": true
      },
      {
        "text": "28 V DC",
        "correct": false
      },
      {
        "text": "Abort, both continuous ignition / single continuous ignition",
        "correct": false
      }
    ]
  },
  {
    "id": 129,
    "category": "G - THRUST REVERSER",
    "question": "T/R uçuşta çalışır mı (EIU fail - not correct)?",
    "answer": "T/R aktivasyonu için A/C on ground sinyali şarttır; kaynakta EIU fail durumu belirsiz/not correct olarak işaretlenmiştir.",
    "note": "Kaynakta bu soru için düzeltme/belirsizlik notu bulundu; testte teknik açıklama esas alındı.",
    "options": [
      {
        "text": "T/R aktivasyonu için A/C on ground sinyali şarttır; kaynakta EIU fail durumu belirsiz/not correct olarak işaretlenmiştir.",
        "correct": true
      },
      {
        "text": "EPR green",
        "correct": false
      },
      {
        "text": "HCU'da reverse deactivate / Deactive HCU / 7C13",
        "correct": false
      }
    ]
  },
  {
    "id": 130,
    "category": "G - THRUST REVERSER",
    "question": "Reverse'de çalışırken bakımda ilk yapılacak?",
    "answer": "HCU'da reverse deactivate / Deactive HCU / 7C13",
    "note": "",
    "options": [
      {
        "text": "HCU'da reverse deactivate / Deactive HCU / 7C13",
        "correct": true
      },
      {
        "text": "EEC",
        "correct": false
      },
      {
        "text": "Mod 3",
        "correct": false
      }
    ]
  },
  {
    "id": 131,
    "category": "G - THRUST REVERSER",
    "question": "Thrust reverser HCU?",
    "answer": "Deactive",
    "note": "",
    "options": [
      {
        "text": "Deactive",
        "correct": true
      },
      {
        "text": "Automatically close",
        "correct": false
      },
      {
        "text": "During period of inactivity engines",
        "correct": false
      }
    ]
  },
  {
    "id": 132,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Crossbleed valve ne zaman auto open?",
    "answer": "APU bleed ON",
    "note": "",
    "options": [
      {
        "text": "APU bleed ON",
        "correct": true
      },
      {
        "text": "Only automatic mode",
        "correct": false
      },
      {
        "text": "200°C",
        "correct": false
      }
    ]
  },
  {
    "id": 133,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Crossbleed valve motor?",
    "answer": "Manual ve Auto / Dual motor",
    "note": "",
    "options": [
      {
        "text": "Manual ve Auto / Dual motor",
        "correct": true
      },
      {
        "text": "Rear oil tank",
        "correct": false
      },
      {
        "text": "BMC 1",
        "correct": false
      }
    ]
  },
  {
    "id": 134,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "APU bleed ON, X bleed close durumunda?",
    "answer": "Only left side / PRV1 closed, PRV2 may regulated",
    "note": "",
    "options": [
      {
        "text": "Only left side / PRV1 closed, PRV2 may regulated",
        "correct": true
      },
      {
        "text": "60 PSI",
        "correct": false
      },
      {
        "text": "ENG x REV inhibited / X ENGINE, REV INHIBITED",
        "correct": false
      }
    ]
  },
  {
    "id": 135,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "APU bleed aktif, Both engine running PRV?",
    "answer": "APU BLEED ON iken motor PRV’leri elektriksel olarak kapalı tutulur; her iki PRV de kapalı olmalıdır.",
    "note": "Kaynakta bu soru için düzeltme/belirsizlik notu bulundu; testte teknik açıklama esas alındı.",
    "options": [
      {
        "text": "APU BLEED ON iken motor PRV’leri elektriksel olarak kapalı tutulur; her iki PRV de kapalı olmalıdır.",
        "correct": true
      },
      {
        "text": "A veya B ignition yapar",
        "correct": false
      },
      {
        "text": "No. 4 scavenge valve / 10th stage",
        "correct": false
      }
    ]
  },
  {
    "id": 136,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "APU bleed priority?",
    "answer": "Priority over Engine Bleed",
    "note": "",
    "options": [
      {
        "text": "Priority over Engine Bleed",
        "correct": true
      },
      {
        "text": "BMC PRV energized to close",
        "correct": false
      },
      {
        "text": "T3",
        "correct": false
      }
    ]
  },
  {
    "id": 137,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "PRV (Pressure Regulating Valve) basıncı?",
    "answer": "44 PSI",
    "note": "",
    "options": [
      {
        "text": "44 PSI",
        "correct": true
      },
      {
        "text": "4 Thermocouple",
        "correct": false
      },
      {
        "text": "Open / Fail safe - both open",
        "correct": false
      }
    ]
  },
  {
    "id": 138,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "PRV CTL SOL (Control Selenoid)?",
    "answer": "Regulates pressure / PRV regulates",
    "note": "",
    "options": [
      {
        "text": "Regulates pressure / PRV regulates",
        "correct": true
      },
      {
        "text": "Upper detent",
        "correct": false
      },
      {
        "text": "T3",
        "correct": false
      }
    ]
  },
  {
    "id": 139,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "CT selenoid?",
    "answer": "PRV regulates",
    "note": "",
    "options": [
      {
        "text": "PRV regulates",
        "correct": true
      },
      {
        "text": "De-energize open / De-energized open",
        "correct": false
      },
      {
        "text": "Direct EEC / Directly EEC",
        "correct": false
      }
    ]
  },
  {
    "id": 140,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "ENG bleed valve fault olursa?",
    "answer": "Selenoid energized / BMC de-energized yada BMC energized (PRV close)",
    "note": "",
    "options": [
      {
        "text": "Selenoid energized / BMC de-energized yada BMC energized (PRV close)",
        "correct": true
      },
      {
        "text": "Fan case altında",
        "correct": false
      },
      {
        "text": "Spring loaded open / Yay yüklü open",
        "correct": false
      }
    ]
  },
  {
    "id": 141,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "ENG bleed fault?",
    "answer": "BMC PRV energized to close",
    "note": "",
    "options": [
      {
        "text": "BMC PRV energized to close",
        "correct": true
      },
      {
        "text": "Fire P/B ve Master Lever / Master Switch",
        "correct": false
      },
      {
        "text": "PRV regulates",
        "correct": false
      }
    ]
  },
  {
    "id": 142,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "BMC'ler leak detect ederse?",
    "answer": "Related PRV closed",
    "note": "",
    "options": [
      {
        "text": "Related PRV closed",
        "correct": true
      },
      {
        "text": "Decrease noise",
        "correct": false
      },
      {
        "text": "FCU",
        "correct": false
      }
    ]
  },
  {
    "id": 143,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Handling bleed valve sayısı ve lokasyonu?",
    "answer": "3 ea Stage 7, 1 ea Stage 10 / 3 tane 7th stage, 1 tane 10th stage",
    "note": "",
    "options": [
      {
        "text": "3 ea Stage 7, 1 ea Stage 10 / 3 tane 7th stage, 1 tane 10th stage",
        "correct": true
      },
      {
        "text": "Only left side / PRV1 closed, PRV2 may regulated",
        "correct": false
      },
      {
        "text": "P4.9 / P2",
        "correct": false
      }
    ]
  },
  {
    "id": 144,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Handling bleed valve idle'da?",
    "answer": "Open / Max open",
    "note": "",
    "options": [
      {
        "text": "Open / Max open",
        "correct": true
      },
      {
        "text": "OPEN",
        "correct": false
      },
      {
        "text": "EEC torque motors in FMU",
        "correct": false
      }
    ]
  },
  {
    "id": 145,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Handling bleed valve deceleration'da?",
    "answer": "OPEN",
    "note": "",
    "options": [
      {
        "text": "OPEN",
        "correct": true
      },
      {
        "text": "200°C",
        "correct": false
      },
      {
        "text": "Upper detent",
        "correct": false
      }
    ]
  },
  {
    "id": 146,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "BSBV (Bleed Starter and Bleed Valve) actuators?",
    "answer": "1 Master actuator, 1 Slave actuator",
    "note": "",
    "options": [
      {
        "text": "1 Master actuator, 1 Slave actuator",
        "correct": true
      },
      {
        "text": "115 V AC - EEC ve Relay Box vasıtasıyla / EEC 115V",
        "correct": false
      },
      {
        "text": "Regulates pressure / PRV regulates",
        "correct": false
      }
    ]
  },
  {
    "id": 147,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "BSBV feed?",
    "answer": "LVDT",
    "note": "",
    "options": [
      {
        "text": "LVDT",
        "correct": true
      },
      {
        "text": "Automatically close",
        "correct": false
      },
      {
        "text": "ENG x REV inhibited / X ENGINE, REV INHIBITED",
        "correct": false
      }
    ]
  },
  {
    "id": 148,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "BSBV ve VSV fail-safe mode?",
    "answer": "Open / Fail safe - both open",
    "note": "",
    "options": [
      {
        "text": "Open / Fail safe - both open",
        "correct": true
      },
      {
        "text": "N2 hız sensörü inlet cowl’da değildir; HP sistem/AGB ile ilişkili bölgeden okunur. Inlet cowl’da P2/T2 sensörü bulunur.",
        "correct": false
      },
      {
        "text": "Only left side / PRV1 closed, PRV2 may regulated",
        "correct": false
      }
    ]
  },
  {
    "id": 149,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "VSV fail-safe mode?",
    "answer": "OPEN",
    "note": "",
    "options": [
      {
        "text": "OPEN",
        "correct": true
      },
      {
        "text": "EIU fail durumunda",
        "correct": false
      },
      {
        "text": "RH fan cowl",
        "correct": false
      }
    ]
  },
  {
    "id": 150,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "VSV kaç tane ve nerede?",
    "answer": "3, 4, 5 + IGV",
    "note": "",
    "options": [
      {
        "text": "3, 4, 5 + IGV",
        "correct": true
      },
      {
        "text": "No. 4 scavenge valve / 10th stage",
        "correct": false
      },
      {
        "text": "Automatically close",
        "correct": false
      }
    ]
  },
  {
    "id": 151,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "V2500 compressor airflow control?",
    "answer": "BSBV + VSV + Handling Bleed",
    "note": "",
    "options": [
      {
        "text": "BSBV + VSV + Handling Bleed",
        "correct": true
      },
      {
        "text": "EVMU by IPS (Inch Per Second)",
        "correct": false
      },
      {
        "text": "EEC closes starter valve and cuts off ignition / EEC shutdown",
        "correct": false
      }
    ]
  },
  {
    "id": 152,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "LP valve control?",
    "answer": "FIRE P/B and Master Lever",
    "note": "",
    "options": [
      {
        "text": "FIRE P/B and Master Lever",
        "correct": true
      },
      {
        "text": "6 Chip detector, 6 Strainer",
        "correct": false
      },
      {
        "text": "FCU",
        "correct": false
      }
    ]
  },
  {
    "id": 153,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "HP SOV (High Pressure Shut Off Valve) nasıl?",
    "answer": "De-energized OPEN",
    "note": "",
    "options": [
      {
        "text": "De-energized OPEN",
        "correct": true
      },
      {
        "text": "EIU",
        "correct": false
      },
      {
        "text": "4 dakika / 4 minutes",
        "correct": false
      }
    ]
  },
  {
    "id": 154,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "HP SOV kontrol?",
    "answer": "SEC",
    "note": "",
    "options": [
      {
        "text": "SEC",
        "correct": true
      },
      {
        "text": "T2 sensörü yoksa / T2 loss / T2 giderse",
        "correct": false
      },
      {
        "text": "HPT Stage 2 Blade'ini soğutur / HPT 1 Turbine Disc",
        "correct": false
      }
    ]
  },
  {
    "id": 155,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Fire P/B release out olunca HPSOV?",
    "answer": "HPSOV kapanmaz / Açık kalır",
    "note": "",
    "options": [
      {
        "text": "HPSOV kapanmaz / Açık kalır",
        "correct": true
      },
      {
        "text": "Manual ve Auto / Dual motor",
        "correct": false
      },
      {
        "text": "20 Nozzle",
        "correct": false
      }
    ]
  },
  {
    "id": 156,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Wing anti ice ne zaman kapanır?",
    "answer": "Automatically close",
    "note": "",
    "options": [
      {
        "text": "Automatically close",
        "correct": true
      },
      {
        "text": "Sadece BMC1 / BMC #1",
        "correct": false
      },
      {
        "text": "Inlet cowl",
        "correct": false
      }
    ]
  },
  {
    "id": 157,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Wing leak detection?",
    "answer": "Auto close",
    "note": "",
    "options": [
      {
        "text": "Auto close",
        "correct": true
      },
      {
        "text": "Aerodynamic smoothness, protect engine",
        "correct": false
      },
      {
        "text": "N1, N2, Dual accelerometer",
        "correct": false
      }
    ]
  },
  {
    "id": 158,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "LH wing leak or Pylon 1 leak?",
    "answer": "APU bleed sol manifold/crossbleed hattına bağlıdır; sol wing/APU hattı leak durumunda BMC 1 APU bleed valve’i kapatır.",
    "note": "Kaynakta bu soru için düzeltme/belirsizlik notu bulundu; testte teknik açıklama esas alındı.",
    "options": [
      {
        "text": "APU bleed sol manifold/crossbleed hattına bağlıdır; sol wing/APU hattı leak durumunda BMC 1 APU bleed valve’i kapatır.",
        "correct": true
      },
      {
        "text": "BMC1",
        "correct": false
      },
      {
        "text": "EVMU by IPS (Inch Per Second)",
        "correct": false
      }
    ]
  },
  {
    "id": 159,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Precooler thermostat sıcaklığı?",
    "answer": "200°C",
    "note": "",
    "options": [
      {
        "text": "200°C",
        "correct": true
      },
      {
        "text": "3 Torque motor",
        "correct": false
      },
      {
        "text": "Accessory gearbox",
        "correct": false
      }
    ]
  },
  {
    "id": 160,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Precooler çıkış sıcaklığı?",
    "answer": "200°C",
    "note": "",
    "options": [
      {
        "text": "200°C",
        "correct": true
      },
      {
        "text": "Digital and Discrete",
        "correct": false
      },
      {
        "text": "10 HPC (High Pressure Compressor), 2 HPT (High Pressure Turbine)",
        "correct": false
      }
    ]
  },
  {
    "id": 161,
    "category": "H - HAVA SİSTEMİ (BLEED)",
    "question": "Control thermostat?",
    "answer": "Precooler çıkış sıcaklığı 200°C",
    "note": "",
    "options": [
      {
        "text": "Precooler çıkış sıcaklığı 200°C",
        "correct": true
      },
      {
        "text": "4 Thermocouple",
        "correct": false
      },
      {
        "text": "Regulates pressure / PRV regulates",
        "correct": false
      }
    ]
  },
  {
    "id": 162,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "N1 speed sensor nerede?",
    "answer": "NO 2 bearing comp / N2 bearing compartment",
    "note": "",
    "options": [
      {
        "text": "NO 2 bearing comp / N2 bearing compartment",
        "correct": true
      },
      {
        "text": "N1 + N2 + Dual Acc.",
        "correct": false
      },
      {
        "text": "Selenoid energized / BMC de-energized yada BMC energized (PRV close)",
        "correct": false
      }
    ]
  },
  {
    "id": 163,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "N1 sensör sayısı?",
    "answer": "4 Sensor",
    "note": "",
    "options": [
      {
        "text": "4 Sensor",
        "correct": true
      },
      {
        "text": "115V AC devamlı / 115V AC Relay box",
        "correct": false
      },
      {
        "text": "APU bleed sol manifold/crossbleed hattına bağlıdır; sol wing/APU hattı leak durumunda BMC 1 APU bleed valve’i kapatır.",
        "correct": false
      }
    ]
  },
  {
    "id": 164,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "N2 sensör nerede?",
    "answer": "N2 hız sensörü inlet cowl’da değildir; HP sistem/AGB ile ilişkili bölgeden okunur. Inlet cowl’da P2/T2 sensörü bulunur.",
    "note": "Kaynakta bu soru için düzeltme/belirsizlik notu bulundu; testte teknik açıklama esas alındı.",
    "options": [
      {
        "text": "N2 hız sensörü inlet cowl’da değildir; HP sistem/AGB ile ilişkili bölgeden okunur. Inlet cowl’da P2/T2 sensörü bulunur.",
        "correct": true
      },
      {
        "text": "SEC",
        "correct": false
      },
      {
        "text": "4 Booster (Stage 1.5 - 2 - 2.3 - 2.5)",
        "correct": false
      }
    ]
  },
  {
    "id": 165,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "T2 sensor nerededir?",
    "answer": "Inlet cowl üzerinde / Inlet cowl access door",
    "note": "",
    "options": [
      {
        "text": "Inlet cowl üzerinde / Inlet cowl access door",
        "correct": true
      },
      {
        "text": "N1 + EPR",
        "correct": false
      },
      {
        "text": "EIU",
        "correct": false
      }
    ]
  },
  {
    "id": 166,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "T3 nedir (HPC discharge temp)?",
    "answer": "T3",
    "note": "",
    "options": [
      {
        "text": "T3",
        "correct": true
      },
      {
        "text": "30000-33000 lbs / 31400-33000 lbs",
        "correct": false
      },
      {
        "text": "PRV regulates",
        "correct": false
      }
    ]
  },
  {
    "id": 167,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "EGT kaç tane thermocouple?",
    "answer": "4 Thermocouple",
    "note": "",
    "options": [
      {
        "text": "4 Thermocouple",
        "correct": true
      },
      {
        "text": "1 Fan, 4 Booster, 5 LPT",
        "correct": false
      },
      {
        "text": "Fan Case altında / Under fan case",
        "correct": false
      }
    ]
  },
  {
    "id": 168,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "EGT thermocouple lokasyonu?",
    "answer": "T4.95 / Station 4,95 (LPT exhaust case)",
    "note": "",
    "options": [
      {
        "text": "T4.95 / Station 4,95 (LPT exhaust case)",
        "correct": true
      },
      {
        "text": "Sağ tarafta fan case üstünde / RH under fan cowl / RH fan cowl",
        "correct": false
      },
      {
        "text": "Additional thrust capability during take-off / Extra thrust",
        "correct": false
      }
    ]
  },
  {
    "id": 169,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "P2/T2 heating?",
    "answer": "115V AC devamlı / 115V AC Relay box",
    "note": "",
    "options": [
      {
        "text": "115V AC devamlı / 115V AC Relay box",
        "correct": true
      },
      {
        "text": "Digital and Discrete",
        "correct": false
      },
      {
        "text": "EEC",
        "correct": false
      }
    ]
  },
  {
    "id": 170,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "P2/T2 sensor?",
    "answer": "Inlet cowl",
    "note": "",
    "options": [
      {
        "text": "Inlet cowl",
        "correct": true
      },
      {
        "text": "1 Master actuator, 1 Slave actuator",
        "correct": false
      },
      {
        "text": "Engine Pressure Ratio",
        "correct": false
      }
    ]
  },
  {
    "id": 171,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "Temperature sensor (fuel) nerede?",
    "answer": "LP filter çıkışında",
    "note": "",
    "options": [
      {
        "text": "LP filter çıkışında",
        "correct": true
      },
      {
        "text": "Aerodynamic smoothness, protect engine",
        "correct": false
      },
      {
        "text": "Fuel ile",
        "correct": false
      }
    ]
  },
  {
    "id": 172,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "Vibration ölçümü nasıl yapılır?",
    "answer": "EVMU by IPS (Inch Per Second)",
    "note": "",
    "options": [
      {
        "text": "EVMU by IPS (Inch Per Second)",
        "correct": true
      },
      {
        "text": "Bottom, Pylon / Rear pylon bottom engine",
        "correct": false
      },
      {
        "text": "T2 available, N1 rated mode",
        "correct": false
      }
    ]
  },
  {
    "id": 173,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "Vibration parametreleri?",
    "answer": "N1, N2, Dual accelerometer",
    "note": "",
    "options": [
      {
        "text": "N1, N2, Dual accelerometer",
        "correct": true
      },
      {
        "text": "HCU üzerinden",
        "correct": false
      },
      {
        "text": "28V DC / 28 VDC",
        "correct": false
      }
    ]
  },
  {
    "id": 174,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "EVMU (Engine Vibration Monitoring Unit)?",
    "answer": "N1 + N2 + Dual Acc.",
    "note": "",
    "options": [
      {
        "text": "N1 + N2 + Dual Acc.",
        "correct": true
      },
      {
        "text": "Fan case altında",
        "correct": false
      },
      {
        "text": "Scavenge filter clogged olunca",
        "correct": false
      }
    ]
  },
  {
    "id": 175,
    "category": "I - SENSÖRLER VE ÖLÇÜMLER",
    "question": "Accelerometer nasıl seçilir?",
    "answer": "EVMU otomatik seçer",
    "note": "",
    "options": [
      {
        "text": "EVMU otomatik seçer",
        "correct": true
      },
      {
        "text": "Abort, both continuous ignition / single continuous ignition",
        "correct": false
      },
      {
        "text": "Acc. Gear Box / Accessory gearbox",
        "correct": false
      }
    ]
  },
  {
    "id": 176,
    "category": "J - EEC VE FADEC",
    "question": "EEC single input giderse ne olur?",
    "answer": "Diğer kanaldan bilgi alır / Diğer kanal kullanılır",
    "note": "",
    "options": [
      {
        "text": "Diğer kanaldan bilgi alır / Diğer kanal kullanılır",
        "correct": true
      },
      {
        "text": "EEC torque motors in FMU",
        "correct": false
      },
      {
        "text": "Through EEC / EEC",
        "correct": false
      }
    ]
  },
  {
    "id": 177,
    "category": "J - EEC VE FADEC",
    "question": "EEC single output failure?",
    "answer": "Channel change / Switchover olur",
    "note": "",
    "options": [
      {
        "text": "Channel change / Switchover olur",
        "correct": true
      },
      {
        "text": "Selenoid energized / BMC de-energized yada BMC energized (PRV close)",
        "correct": false
      },
      {
        "text": "N1, N2, EGT, EPR, Fuel Flow",
        "correct": false
      }
    ]
  },
  {
    "id": 178,
    "category": "J - EEC VE FADEC",
    "question": "Channel output arızalıysa?",
    "answer": "Channel change",
    "note": "",
    "options": [
      {
        "text": "Channel change",
        "correct": true
      },
      {
        "text": "MCDU",
        "correct": false
      },
      {
        "text": "Regulates pressure / PRV regulates",
        "correct": false
      }
    ]
  },
  {
    "id": 179,
    "category": "J - EEC VE FADEC",
    "question": "Signal output fail durumunda?",
    "answer": "Automatic changeover to standby active channel",
    "note": "",
    "options": [
      {
        "text": "Automatic changeover to standby active channel",
        "correct": true
      },
      {
        "text": "EEC alternator / Dedicated alternator",
        "correct": false
      },
      {
        "text": "Precooler downstream / PRV upstream / Precooler çıkış, PRV giriş",
        "correct": false
      }
    ]
  },
  {
    "id": 180,
    "category": "J - EEC VE FADEC",
    "question": "Complete output signal fail?",
    "answer": "İlgili component fail-safe position'da çalışır",
    "note": "",
    "options": [
      {
        "text": "İlgili component fail-safe position'da çalışır",
        "correct": true
      },
      {
        "text": "Acc. Gear Box / Accessory gearbox",
        "correct": false
      },
      {
        "text": "Diğer kanaldan bilgi alır / Diğer kanal kullanılır",
        "correct": false
      }
    ]
  },
  {
    "id": 181,
    "category": "J - EEC VE FADEC",
    "question": "EEC nasıl kontrol eder?",
    "answer": "PRSOV ve Overspeed'i (TM ile)",
    "note": "",
    "options": [
      {
        "text": "PRSOV ve Overspeed'i (TM ile)",
        "correct": true
      },
      {
        "text": "Fuel ile",
        "correct": false
      },
      {
        "text": "Regulates pressure / PRV regulates",
        "correct": false
      }
    ]
  },
  {
    "id": 182,
    "category": "J - EEC VE FADEC",
    "question": "Overspeed ve PRSOV kontrolü?",
    "answer": "Through EEC / EEC",
    "note": "",
    "options": [
      {
        "text": "Through EEC / EEC",
        "correct": true
      },
      {
        "text": "44 PSI",
        "correct": false
      },
      {
        "text": "Fuel servo control / Tek actuator (Same actuator)",
        "correct": false
      }
    ]
  },
  {
    "id": 183,
    "category": "J - EEC VE FADEC",
    "question": "Overspeed durumunda fuel flow kontrolü?",
    "answer": "EEC torque motors in FMU",
    "note": "",
    "options": [
      {
        "text": "EEC torque motors in FMU",
        "correct": true
      },
      {
        "text": "Inlet cowl access door",
        "correct": false
      },
      {
        "text": "Abort, both continuous ignition / single continuous ignition",
        "correct": false
      }
    ]
  },
  {
    "id": 184,
    "category": "J - EEC VE FADEC",
    "question": "Overspeed kontrolü?",
    "answer": "Tork motor / Torque motor",
    "note": "",
    "options": [
      {
        "text": "Tork motor / Torque motor",
        "correct": true
      },
      {
        "text": "ECAM",
        "correct": false
      },
      {
        "text": "28V DC / 28 VDC",
        "correct": false
      }
    ]
  },
  {
    "id": 185,
    "category": "J - EEC VE FADEC",
    "question": "EEC ne zaman enerjilenmez?",
    "answer": "Manual P/B",
    "note": "",
    "options": [
      {
        "text": "Manual P/B",
        "correct": true
      },
      {
        "text": "FIRE P/B and Master Lever",
        "correct": false
      },
      {
        "text": "T2 sensörü yoksa / T2 loss / T2 giderse",
        "correct": false
      }
    ]
  },
  {
    "id": 186,
    "category": "J - EEC VE FADEC",
    "question": "EEC power after shutdown?",
    "answer": "5 minutes / 5 dk daha enerjili",
    "note": "",
    "options": [
      {
        "text": "5 minutes / 5 dk daha enerjili",
        "correct": true
      },
      {
        "text": "Close to minimum flow",
        "correct": false
      },
      {
        "text": "Forward thrust area detent point",
        "correct": false
      }
    ]
  },
  {
    "id": 187,
    "category": "J - EEC VE FADEC",
    "question": "FADEC nerededir?",
    "answer": "Overhead panel",
    "note": "",
    "options": [
      {
        "text": "Overhead panel",
        "correct": true
      },
      {
        "text": "2 İgniter",
        "correct": false
      },
      {
        "text": "BMC 1",
        "correct": false
      }
    ]
  },
  {
    "id": 188,
    "category": "J - EEC VE FADEC",
    "question": "TRA (Thrust Rating Actuator)?",
    "answer": "Direct EEC / Directly EEC",
    "note": "",
    "options": [
      {
        "text": "Direct EEC / Directly EEC",
        "correct": true
      },
      {
        "text": "Fail durumunda",
        "correct": false
      },
      {
        "text": "EIU üzerinden",
        "correct": false
      }
    ]
  },
  {
    "id": 189,
    "category": "J - EEC VE FADEC",
    "question": "EEC sorgu kontrol?",
    "answer": "PRSOV ve Overspeed valve control eder (Torque Motor ile)",
    "note": "",
    "options": [
      {
        "text": "PRSOV ve Overspeed valve control eder (Torque Motor ile)",
        "correct": true
      },
      {
        "text": "Inlet cowl",
        "correct": false
      },
      {
        "text": "EEC torque motors in FMU",
        "correct": false
      }
    ]
  },
  {
    "id": 190,
    "category": "L - BAKIM VE OPERASYON",
    "question": "Motor preservation ne zaman?",
    "answer": "Uzun süre kullanılmayacaksa / During period of inactivity / Storage",
    "note": "",
    "options": [
      {
        "text": "Uzun süre kullanılmayacaksa / During period of inactivity / Storage",
        "correct": true
      },
      {
        "text": "115 V AC",
        "correct": false
      },
      {
        "text": "Master lever %20",
        "correct": false
      }
    ]
  },
  {
    "id": 191,
    "category": "L - BAKIM VE OPERASYON",
    "question": "Preservation ne zaman uygulanır?",
    "answer": "Corrosion / AMM",
    "note": "",
    "options": [
      {
        "text": "Corrosion / AMM",
        "correct": true
      },
      {
        "text": "EIU",
        "correct": false
      },
      {
        "text": "Temporary",
        "correct": false
      }
    ]
  },
  {
    "id": 192,
    "category": "L - BAKIM VE OPERASYON",
    "question": "Storage ve preservation ne zaman?",
    "answer": "During period of inactivity engines",
    "note": "",
    "options": [
      {
        "text": "During period of inactivity engines",
        "correct": true
      },
      {
        "text": "EEC",
        "correct": false
      },
      {
        "text": "6 Strainer ve 6 Chip detector",
        "correct": false
      }
    ]
  },
  {
    "id": 193,
    "category": "L - BAKIM VE OPERASYON",
    "question": "Jet fuel tipi?",
    "answer": "Jet A1",
    "note": "",
    "options": [
      {
        "text": "Jet A1",
        "correct": true
      },
      {
        "text": "EIU",
        "correct": false
      },
      {
        "text": "During period of inactivity engines",
        "correct": false
      }
    ]
  },
  {
    "id": 194,
    "category": "L - BAKIM VE OPERASYON",
    "question": "A321 uçakları flat rate?",
    "answer": "30°C",
    "note": "",
    "options": [
      {
        "text": "30°C",
        "correct": true
      },
      {
        "text": "Abort, both continuous ignition / single continuous ignition",
        "correct": false
      },
      {
        "text": "N2",
        "correct": false
      }
    ]
  },
  {
    "id": 195,
    "category": "L - BAKIM VE OPERASYON",
    "question": "50'de fuel used?",
    "answer": "Temporary",
    "note": "",
    "options": [
      {
        "text": "Temporary",
        "correct": true
      },
      {
        "text": "Inlet cowl access door",
        "correct": false
      },
      {
        "text": "Corrosion / AMM",
        "correct": false
      }
    ]
  },
  {
    "id": 196,
    "category": "L - BAKIM VE OPERASYON",
    "question": "ECAM'da primary parametreler?",
    "answer": "N1, N2, EGT, EPR, Fuel Flow",
    "note": "",
    "options": [
      {
        "text": "N1, N2, EGT, EPR, Fuel Flow",
        "correct": true
      },
      {
        "text": "EIU fail durumunda",
        "correct": false
      },
      {
        "text": "PRV regulates",
        "correct": false
      }
    ]
  },
  {
    "id": 197,
    "category": "L - BAKIM VE OPERASYON",
    "question": "Hangisi NOT permanently SD (System Display) page'de?",
    "answer": "Filter clogged / Oil filter clog",
    "note": "",
    "options": [
      {
        "text": "Filter clogged / Oil filter clog",
        "correct": true
      },
      {
        "text": "FCU",
        "correct": false
      },
      {
        "text": "ENG RH side accessory gearbox üzerinde",
        "correct": false
      }
    ]
  },
  {
    "id": 198,
    "category": "L - BAKIM VE OPERASYON",
    "question": "Secondary ENG parameters hangisi permanent?",
    "answer": "Fuel used",
    "note": "",
    "options": [
      {
        "text": "Fuel used",
        "correct": true
      },
      {
        "text": "N2",
        "correct": false
      },
      {
        "text": "De-energize open / De-energized open",
        "correct": false
      }
    ]
  },
  {
    "id": 199,
    "category": "L - BAKIM VE OPERASYON",
    "question": "ENG ground IDLE'da çalışıyor?",
    "answer": "Slat extend (yerde)",
    "note": "",
    "options": [
      {
        "text": "Slat extend (yerde)",
        "correct": true
      },
      {
        "text": "Dedicated alternator",
        "correct": false
      },
      {
        "text": "Deactive",
        "correct": false
      }
    ]
  },
  {
    "id": 200,
    "category": "L - BAKIM VE OPERASYON",
    "question": "Motor detaylı bilgisine nasıl bakılır?",
    "answer": "MCDU",
    "note": "",
    "options": [
      {
        "text": "MCDU",
        "correct": true
      },
      {
        "text": "Slat extend (yerde)",
        "correct": false
      },
      {
        "text": "HPT - LPT",
        "correct": false
      }
    ]
  },
  {
    "id": 201,
    "category": "L - BAKIM VE OPERASYON",
    "question": "MCDU'da ne simüle edilir?",
    "answer": "N2",
    "note": "",
    "options": [
      {
        "text": "N2",
        "correct": true
      },
      {
        "text": "FMU",
        "correct": false
      },
      {
        "text": "N1 + EPR",
        "correct": false
      }
    ]
  },
  {
    "id": 202,
    "category": "L - BAKIM VE OPERASYON",
    "question": "EIU send signal?",
    "answer": "Digital and Discrete",
    "note": "",
    "options": [
      {
        "text": "Digital and Discrete",
        "correct": true
      },
      {
        "text": "Decrease noise",
        "correct": false
      },
      {
        "text": "Open / Max open",
        "correct": false
      }
    ]
  },
  {
    "id": 203,
    "category": "L - BAKIM VE OPERASYON",
    "question": "EIU output signals?",
    "answer": "Digital and Discrete",
    "note": "",
    "options": [
      {
        "text": "Digital and Discrete",
        "correct": true
      },
      {
        "text": "EIU fail durumunda",
        "correct": false
      },
      {
        "text": "MCDU",
        "correct": false
      }
    ]
  },
  {
    "id": 204,
    "category": "L - BAKIM VE OPERASYON",
    "question": "EIU voltajı?",
    "answer": "28V DC / 28 VDC",
    "note": "",
    "options": [
      {
        "text": "28V DC / 28 VDC",
        "correct": true
      },
      {
        "text": "Her iki buji de çakmaya başlar / 2 buji çakar",
        "correct": false
      },
      {
        "text": "6 Scavenge pump",
        "correct": false
      }
    ]
  },
  {
    "id": 205,
    "category": "L - BAKIM VE OPERASYON",
    "question": "Servo actuator?",
    "answer": "FMU",
    "note": "",
    "options": [
      {
        "text": "FMU",
        "correct": true
      },
      {
        "text": "115V AC devamlı / 115V AC Relay box",
        "correct": false
      },
      {
        "text": "Corrosion / AMM",
        "correct": false
      }
    ]
  },
  {
    "id": 206,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "Overpressure valve hangisi doğru?",
    "answer": "Spring loaded open / Yay yüklü open",
    "note": "",
    "options": [
      {
        "text": "Spring loaded open / Yay yüklü open",
        "correct": true
      },
      {
        "text": "Hydraulic kendi stow eder",
        "correct": false
      },
      {
        "text": "Additional thrust capability during take-off / Extra thrust",
        "correct": false
      }
    ]
  },
  {
    "id": 207,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "OPV (Overpressure Valve) kaç PSI'de kapanır?",
    "answer": "85 PSI",
    "note": "",
    "options": [
      {
        "text": "85 PSI",
        "correct": true
      },
      {
        "text": "Precooler çıkış sıcaklığı 200°C",
        "correct": false
      },
      {
        "text": "7",
        "correct": false
      }
    ]
  },
  {
    "id": 208,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "PRSOV (Pressure Raising and Shut Off Valve)?",
    "answer": "De-energize open / De-energized open",
    "note": "",
    "options": [
      {
        "text": "De-energize open / De-energized open",
        "correct": true
      },
      {
        "text": "200°C",
        "correct": false
      },
      {
        "text": "Scavenge filter clogged olunca",
        "correct": false
      }
    ]
  },
  {
    "id": 209,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "PRSOV kontrol?",
    "answer": "EEC + Master Switch / EEC ve Master switch directly / Master lever via EEC",
    "note": "",
    "options": [
      {
        "text": "EEC + Master Switch / EEC ve Master switch directly / Master lever via EEC",
        "correct": true
      },
      {
        "text": "APU bleed sol manifold/crossbleed hattına bağlıdır; sol wing/APU hattı leak durumunda BMC 1 APU bleed valve’i kapatır.",
        "correct": false
      },
      {
        "text": "FCU (Flight Control Unit)",
        "correct": false
      }
    ]
  },
  {
    "id": 210,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "Overspeed ile PRSOV?",
    "answer": "Through EEC",
    "note": "",
    "options": [
      {
        "text": "Through EEC",
        "correct": true
      },
      {
        "text": "Max open / Fully open",
        "correct": false
      },
      {
        "text": "28 V DC",
        "correct": false
      }
    ]
  },
  {
    "id": 211,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "ACC (Active Clearance Control) nereyi soğutur?",
    "answer": "HPT + LPT Case / HPT/LPT case",
    "note": "",
    "options": [
      {
        "text": "HPT + LPT Case / HPT/LPT case",
        "correct": true
      },
      {
        "text": "Upper detent",
        "correct": false
      },
      {
        "text": "RH fan cowl",
        "correct": false
      }
    ]
  },
  {
    "id": 212,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "ACC (Air Cooled Oil Cooler)?",
    "answer": "Fuel servo control / Tek actuator (Same actuator)",
    "note": "",
    "options": [
      {
        "text": "Fuel servo control / Tek actuator (Same actuator)",
        "correct": true
      },
      {
        "text": "BMC 1",
        "correct": false
      },
      {
        "text": "OPEN",
        "correct": false
      }
    ]
  },
  {
    "id": 213,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "HP/LP ACC?",
    "answer": "Fuel servo",
    "note": "",
    "options": [
      {
        "text": "Fuel servo",
        "correct": true
      },
      {
        "text": "APU BLEED ON iken motor PRV’leri elektriksel olarak kapalı tutulur; her iki PRV de kapalı olmalıdır.",
        "correct": false
      },
      {
        "text": "İlgili component fail-safe position'da çalışır",
        "correct": false
      }
    ]
  },
  {
    "id": 214,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "Active Clearance Control (ACC) nereyi soğutur?",
    "answer": "HPT - LPT",
    "note": "",
    "options": [
      {
        "text": "HPT - LPT",
        "correct": true
      },
      {
        "text": "Abort, both continuous ignition / single continuous ignition",
        "correct": false
      },
      {
        "text": "APU, Pylon / Pylon/APU",
        "correct": false
      }
    ]
  },
  {
    "id": 215,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "ACOC modulating?",
    "answer": "Mod 3",
    "note": "",
    "options": [
      {
        "text": "Mod 3",
        "correct": true
      },
      {
        "text": "Decrease noise",
        "correct": false
      },
      {
        "text": "EEC",
        "correct": false
      }
    ]
  },
  {
    "id": 216,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "BMC fail olursa?",
    "answer": "Other BMC use most of function / Remaining functions / Remaining BMC",
    "note": "",
    "options": [
      {
        "text": "Other BMC use most of function / Remaining functions / Remaining BMC",
        "correct": true
      },
      {
        "text": "Engine Pressure Ratio",
        "correct": false
      },
      {
        "text": "Only automatic mode",
        "correct": false
      }
    ]
  },
  {
    "id": 217,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "BMC'ler ne zaman most of function kullanır?",
    "answer": "Fail durumunda",
    "note": "",
    "options": [
      {
        "text": "Fail durumunda",
        "correct": true
      },
      {
        "text": "APU bleed ON",
        "correct": false
      },
      {
        "text": "EEC",
        "correct": false
      }
    ]
  },
  {
    "id": 218,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "APU'yu hangisi monitör eder?",
    "answer": "Sadece BMC1 / BMC #1",
    "note": "",
    "options": [
      {
        "text": "Sadece BMC1 / BMC #1",
        "correct": true
      },
      {
        "text": "Bottom, Pylon / Rear pylon bottom engine",
        "correct": false
      },
      {
        "text": "Spring loaded open / Yay yüklü open",
        "correct": false
      }
    ]
  },
  {
    "id": 219,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "APU bleed?",
    "answer": "BMC1",
    "note": "",
    "options": [
      {
        "text": "BMC1",
        "correct": true
      },
      {
        "text": "During period of inactivity engines",
        "correct": false
      },
      {
        "text": "SEC / HCU",
        "correct": false
      }
    ]
  },
  {
    "id": 220,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "APU leak detection?",
    "answer": "BMC 1",
    "note": "",
    "options": [
      {
        "text": "BMC 1",
        "correct": true
      },
      {
        "text": "Climb",
        "correct": false
      },
      {
        "text": "Below 5 Quarts",
        "correct": false
      }
    ]
  },
  {
    "id": 221,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "APU loop?",
    "answer": "BMC 1",
    "note": "",
    "options": [
      {
        "text": "BMC 1",
        "correct": true
      },
      {
        "text": "28V DC / 28 VDC",
        "correct": false
      },
      {
        "text": "200°C",
        "correct": false
      }
    ]
  },
  {
    "id": 222,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "Single loop nerede?",
    "answer": "APU, Pylon / Pylon/APU",
    "note": "",
    "options": [
      {
        "text": "APU, Pylon / Pylon/APU",
        "correct": true
      },
      {
        "text": "APU bleed sol manifold/crossbleed hattına bağlıdır; sol wing/APU hattı leak durumunda BMC 1 APU bleed valve’i kapatır.",
        "correct": false
      },
      {
        "text": "30 saniye sonra",
        "correct": false
      }
    ]
  },
  {
    "id": 223,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "OGV (Outlet Guide Vane)?",
    "answer": "Velocity decreases",
    "note": "",
    "options": [
      {
        "text": "Velocity decreases",
        "correct": true
      },
      {
        "text": "FCOC",
        "correct": false
      },
      {
        "text": "Dedicated alternator",
        "correct": false
      }
    ]
  },
  {
    "id": 224,
    "category": "K - UYARILAR VE ARIZA DURUMLARI",
    "question": "Hangisi fault light yakmaz?",
    "answer": "N2 overspeed",
    "note": "",
    "options": [
      {
        "text": "N2 overspeed",
        "correct": true
      },
      {
        "text": "Deploy olduğunda",
        "correct": false
      },
      {
        "text": "FCU (Flight Control Unit)",
        "correct": false
      }
    ]
  }
];
