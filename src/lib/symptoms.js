export const symptomsData = {
  "breast-pain": {
    title: "유방 통증 (Breast Pain)",
    description: "유방 통증은 매우 흔한 증상이며 대부분 암의 신호가 아닙니다. 통증의 유형과 병원 방문이 필요한 시기를 알아보세요.",
    riskLevel: "Low",
    riskSummary: "대부분의 유방 통증은 생리 주기와 관련된 주기적 통증이거나 근골격계 통증입니다. 악성 종양과 관련될 확률은 매우 낮습니다.",
    checkerQuestions: [
      "생리 주기와 통증이 관련이 있나요?",
      "특정 한 부위가 아픈가요, 아니면 전체적으로 아픈가요?",
      "통증과 함께 멍울이 만져지나요?"
    ],
    tests: [
      { name: "유방 초음파", description: "낭종(물혹)이나 고형 종물을 확인하기 위한 정밀 영상 검사입니다." },
      { name: "유방 촬영술 (Mammography)", description: "유방암 선별 및 진단을 위한 표준 엑스레이 검사입니다." }
    ],
    faqs: [
      { q: "유방 통증이 있으면 무조건 암인가요?", a: "아닙니다. 통증만으로 암을 진단하는 경우는 드물며, 대부분 양성 질환입니다." },
      { q: "커피를 마시면 통증이 심해지나요?", a: "카페인은 일부 여성에게 유방 조직의 민감도를 높여 통증을 유발할 수 있습니다." }
    ],
    videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    relatedSymptoms: ["breast-lump", "nipple-discharge"],
    doctorNote: "유방 통증은 심리적 안정만으로도 호전되는 경우가 많습니다. 하지만 3개월 이상 지속된다면 검사를 권장합니다."
  },
  "breast-lump": {
    title: "유방 멍울 (Breast Lump)",
    description: "멍울이 만져진다고 해서 모두 암은 아닙니다. 하지만 정확한 진단을 위해 전문가의 진찰과 영상 검사가 필수적입니다.",
    riskLevel: "Moderate",
    riskSummary: "발견된 멍울의 80% 이상은 섬유선종이나 낭종 같은 양성 질환이지만, 새로 생긴 딱딱한 멍울은 즉시 검사가 필요합니다.",
    checkerQuestions: [
      "멍울이 만져진 지 얼마나 되었나요?",
      "생리 주기에 따라 멍울의 크기가 변하나요?",
      "멍울이 주변 조직에 고정된 느낌인가요, 아니면 잘 움직이나요?"
    ],
    tests: [
      { name: "유방 초음파", description: "멍울의 모양과 내부 성상(물혹 여부)을 파악하는 가장 중요한 검사입니다." },
      { name: "조직 검사 (Biopsy)", description: "영상이 의심스러울 경우 총생검 등을 통해 암 여부를 확진합니다." }
    ],
    faqs: [
      { q: "아프지 않은 멍울이 더 위험한가요?", a: "통증이 없는 고정된 멍울이 오히려 악성일 가능성이 있어 주의 깊은 관찰이 필요합니다." }
    ],
    videoId: "dQw4w9WgXcQ",
    relatedSymptoms: ["breast-pain", "nipple-discharge"],
    doctorNote: "유방 멍울은 자가 검진으로 가장 먼저 발견됩니다. 평소 자신의 유방 상태를 잘 파악해두는 것이 중요합니다."
  },
  "nipple-discharge": {
    title: "유두 분비물 (Nipple Discharge)",
    description: "유두에서 액체가 나오는 증상은 호르몬 변화나 관내 양성 종양 등 다양한 원인에 의해 발생할 수 있습니다.",
    riskLevel: "Moderate",
    riskSummary: "양측성 유즙 분비는 보통 호르몬 문제이나, 일측성의 피 섞인 분비물은 정밀 검사가 필요합니다.",
    checkerQuestions: [
      "분비물이 한쪽에서만 나오나요, 양쪽 모두 나오나요?",
      "분비물의 색깔이 투명한가요, 아니면 선홍색/갈색인가요?",
      "짰을 때만 나오나요, 아니면 속옷에 묻어날 정도로 저절로 나오나요?"
    ],
    tests: [
      { name: "유관 초음파", description: "유관 내부의 확장이나 미세한 종물을 확인하는 특수 초음파입니다." },
      { name: "분비물 세포 검사", description: "나오는 액체를 채취하여 현미경으로 암세포 유무를 확인합니다." }
    ],
    faqs: [
      { q: "피 섞인 분비물은 무조건 암인가요?", a: "아닙니다. 유관 내 유두종이라는 양성 종양이 가장 흔한 원인입니다." }
    ],
    videoId: "dQw4w9WgXcQ",
    relatedSymptoms: ["breast-lump", "breast-pain"],
    doctorNote: "한쪽 유두의 특정 구멍에서만 저절로 나오는 혈성 분비물은 반드시 전문의와 상담하십시오."
  },
  "lactation-lump": {
    title: "수유기 멍울/통증 (Lactation Lump)",
    description: "수유 중 발생하는 멍울은 주로 유관 폐쇄나 유선염에 의한 경우가 많습니다.",
    riskLevel: "Low",
    riskSummary: "열감과 발적이 동반된다면 유선염일 가능성이 높으며, 항생제 치료와 꾸준한 수유가 병행되어야 합니다.",
    checkerQuestions: [
      "고열이나 오한 같은 몸살 기운이 있나요?",
      "피부가 붉게 변하고 열감이 느껴지나요?",
      "수유나 유축 후에 멍울이 작아지나요?"
    ],
    tests: [
      { name: "유방 초음파", description: "유선염과 농양(고름)을 감별하기 위해 시행합니다." }
    ],
    faqs: [
      { q: "유선염인데 수유를 계속해도 되나요?", a: "네, 아기가 젖을 빨아주는 것이 유관 폐쇄를 해결하는 데 가장 도움이 됩니다." }
    ],
    videoId: "dQw4w9WgXcQ",
    relatedSymptoms: ["breast-pain"],
    doctorNote: "수유 중 통증과 멍울은 빠른 대처가 중요합니다. 방치하면 농양으로 발전하여 배농 수술이 필요할 수 있습니다."
  },
  "thyroid-nodule": {
    title: "갑상선 결절 (Thyroid Nodule)",
    description: "갑상선 결절은 매우 흔하며 대부분 양성입니다. 크기와 초음파 모양에 따라 추적 관찰 또는 정밀 검사를 결정합니다.",
    riskLevel: "Moderate",
    riskSummary: "대부분 증상이 없으나, 목에 만져지는 멍울이나 목소리 변화, 삼킴 곤란이 있다면 주의가 필요합니다.",
    checkerQuestions: [
      "목 앞부분에 육안으로 보이는 멍울이 있나요?",
      "침을 삼킬 때 이물감이 느껴지나요?",
      "최근 목소리가 쉬거나 변했나요?"
    ],
    tests: [
      { name: "갑상선 초음파", description: "결절의 모양, 크기, 석회화 여부를 확인하는 핵심 검사입니다." },
      { name: "미세침 흡인 세포 검사", description: "암이 의심되는 경우 가느다란 바늘로 세포를 채취해 확인합니다." }
    ],
    faqs: [
      { q: "갑상선 결절이 있으면 무조건 수술하나요?", a: "아닙니다. 크기가 작고 양성 모양이라면 정기적인 초음파 관찰만으로 충분합니다." }
    ],
    videoId: "dQw4w9WgXcQ",
    relatedSymptoms: ["thyroid-medication-vitamin"],
    doctorNote: "갑상선암은 예후가 좋은 편이지만, 결절의 모양이 나쁜 경우에는 조기 발견이 중요합니다."
  },
  "thyroid-medication-vitamin": {
    title: "갑상선 약/비타민 관리 (Thyroid Meds)",
    description: "갑상선 호르몬제 복용과 영양제 관리는 올바른 방법으로 이루어져야 치료 효과를 극대화할 수 있습니다.",
    riskLevel: "Low",
    riskSummary: "약 복용 시간과 함께 먹으면 안 되는 음식/영양제를 숙지하는 것이 혈중 호르몬 수치 유지에 중요합니다.",
    checkerQuestions: [
      "약을 매일 아침 공복에 드시고 계신가요?",
      "철분제나 칼슘제를 함께 복용하시나요?",
      "피로감이나 가슴 두근거림이 지속되나요?"
    ],
    tests: [
      { name: "갑상선 기능 혈액 검사", description: "TSH, Free T4 수치를 통해 약 용량이 적절한지 확인합니다." }
    ],
    faqs: [
      { q: "약 먹는 것을 깜빡했다면 어떻게 하나요?", a: "생각난 즉시 복용하시되, 다음 날이라면 한꺼번에 두 알을 먹지 말고 한 알만 드세요." }
    ],
    videoId: "dQw4w9WgXcQ",
    relatedSymptoms: ["thyroid-nodule"],
    doctorNote: "갑상선 약은 커피나 우유와 함께 드시면 흡수율이 떨어지므로 주의해야 합니다."
  }
};
