export const symptomsData = {
  "breast-pain": {
    title: "Breast Pain (Mastalgia)",
    description: "Breast pain is very common and usually not a sign of cancer. Learn about different types of breast pain and when to see a doctor.",
    riskLevel: "Low",
    riskSummary: "Most breast pain is cyclical (related to menstrual cycles) or non-cyclical (musculoskeletal). Rarely associated with malignancy.",
    checkerQuestions: [
      "Is the pain related to your period?",
      "Is the pain in one specific spot or all over?",
      "Do you feel any lumps along with the pain?"
    ],
    tests: [
      { name: "Breast Ultrasound", description: "Detailed imaging to check for cysts or solid masses." },
      { name: "Mammography", description: "Standard X-ray of the breast for screening or diagnosis." }
    ],
    faqs: [
      { q: "Is breast pain a sign of cancer?", a: "Pain alone is rarely the only symptom of breast cancer. Most pain is benign." },
      { q: "What can I do to relieve cyclical pain?", a: "Reducing caffeine, wearing a supportive bra, and certain vitamins may help." }
    ]
  },
  "breast-lump": {
    title: "Breast Lump",
    description: "Finding a lump can be stressful, but many are benign cysts or fibroadenomas. Prompt evaluation is important.",
    riskLevel: "Moderate",
    riskSummary: "While most lumps are benign, any new or changing lump should be professionally evaluated via imaging.",
    checkerQuestions: [
      "How long has the lump been there?",
      "Does it change size during your cycle?",
      "Is the lump hard or soft/movable?"
    ],
    tests: [
      { name: "Mammogram/Ultrasound", description: "First-line imaging to characterize the lump." },
      { name: "Core Needle Biopsy", description: "If the imaging is suspicious, a tissue sample may be needed." }
    ],
    faqs: [
      { q: "Are all lumps cancerous?", a: "No, about 80% of breast lumps biopsied are benign." },
      { q: "What does a cancerous lump feel like?", a: "Often hard, painless, and fixed in place, but this is not always the case." }
    ]
  },
  "nipple-discharge": {
    title: "Nipple Discharge",
    description: "Discharge can happen for many reasons, including hormonal changes or benign growths in the ducts.",
    riskLevel: "Moderate",
    riskSummary: "Spontaneous, bloody, or clear discharge from a single duct requires investigation. Bilateral milky discharge is often hormonal.",
    checkerQuestions: [
      "Is the discharge from one breast or both?",
      "What color is the discharge?",
      "Does it happen spontaneously or only when squeezed?"
    ],
    tests: [
      { name: "Duct Ultrasound", description: "Specialized ultrasound to look at the milk ducts." },
      { name: "Cytology", description: "Examining the fluid under a microscope." }
    ],
    faqs: [
      { q: "Is bloody discharge always cancer?", a: "No, it's often caused by an intraductal papilloma, which is a benign growth." }
    ]
  },
  "lactation-lump": {
    title: "Lactation Lump",
    description: "Lumps during breastfeeding are often clogged ducts or mastitis (infection).",
    riskLevel: "Low",
    riskSummary: "Usually related to milk stasis. If accompanied by fever and redness, it may be mastitis requiring antibiotics.",
    checkerQuestions: [
      "Do you have a fever or flu-like symptoms?",
      "Is the area red and warm to the touch?",
      "Does the lump get smaller after nursing?"
    ],
    tests: [
      { name: "Physical Exam", description: "Checking for signs of infection or abscess." },
      { name: "Ultrasound", description: "To rule out an abscess if the lump doesn't resolve." }
    ],
    faqs: [
      { q: "Can I continue breastfeeding with a lump?", a: "Yes, frequent nursing or pumping is actually recommended to clear a clogged duct." }
    ]
  },
  "thyroid-nodule": {
    title: "Thyroid Nodule",
    description: "Thyroid nodules are very common and most are non-cancerous. They are often found during routine exams or imaging.",
    riskLevel: "Moderate",
    riskSummary: "Most are benign. Evaluation depends on size, ultrasound characteristics, and family history.",
    checkerQuestions: [
      "Can you see or feel the lump in your neck?",
      "Do you have trouble swallowing or breathing?",
      "Has your voice changed recently?"
    ],
    tests: [
      { name: "Thyroid Ultrasound", description: "The most important tool for evaluating nodule characteristics." },
      { name: "FNA Biopsy", description: "Fine Needle Aspiration to check for cancer cells if indicated by ultrasound." }
    ],
    faqs: [
      { q: "Are thyroid nodules common?", a: "Yes, up to 50% of people have them, though most are too small to feel." }
    ]
  },
  "thyroid-medication": {
    title: "Thyroid Medication",
    description: "Proper management of thyroid hormone replacement is key to feeling your best.",
    riskLevel: "Low",
    riskSummary: "Focuses on optimizing dosage and monitoring TSH levels.",
    checkerQuestions: [
      "Are you experiencing symptoms of hypo or hyperthyroidism?",
      "Do you take your medication on an empty stomach?",
      "Have you had your TSH checked recently?"
    ],
    tests: [
      { name: "TSH/Free T4 Blood Test", description: "Standard blood work to monitor hormone levels." }
    ],
    faqs: [
      { q: "When should I take my thyroid pill?", a: "Usually first thing in the morning, at least 30-60 minutes before food or coffee." }
    ]
  }
};
