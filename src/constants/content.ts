export const SITE = {
  name: "ABEL AI",
  tagline: "AI 루프마케팅 에이전시",
  description:
    "ChatGPT 답변에 없으면 매출도 없습니다. ABEL AI가 AEO·GEO·SEO로 신뢰·정확·전환을 만듭니다.",
  url: "https://abelai.kr",
  business: {
    corporateName: "주식회사 아벨(ABEL)",
    representative: "강은구",
    registrationNumber: "732-81-04102",
    corporateRegistrationNumber: "160111-0073535",
    address:
      "대전광역시 유성구 은구비남로33번길 13-8, 3층 3327호(지족동, 양지빌딩)",
    branches: [
      { name: "인천점", location: "인천 계양구" },
      { name: "김포점", location: "김포시 구래동" },
    ],
    email: "abelai.korea@gmail.com",
  },
} as const;

export const NAV_ITEMS = [
  { label: "서비스", href: "#services" },
  { label: "프로세스", href: "#process" },
  { label: "원칙", href: "#credibility" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO_MODES = {
  SEO: {
    label: "SEO",
    shortLabel: "검색 발견",
    ariaLabel: "SEO: 검색 발견 최적화 모드로 전환",
    contextLine: "검색에서 발견되고, 발견이 문의로 이어지게 합니다.",
  },
  AEO: {
    label: "AEO",
    shortLabel: "답변 노출",
    ariaLabel: "AEO: AI 답변 노출 최적화 모드로 전환",
    contextLine: "AI가 답변할 때, 당신을 먼저 말하게 합니다.",
  },
  GEO: {
    label: "GEO",
    shortLabel: "출처 인용",
    ariaLabel: "GEO: 출처 인용 최적화 모드로 전환",
    contextLine: "AI가 답변할 때, 당신의 사이트를 출처로 링크합니다.",
  },
} as const;

export const HERO = {
  title: "고객이 AI에게 물었습니다.\n당신은 답변에 없었습니다.",
  subtitle:
    "ChatGPT에 업종을 검색하면, 경쟁사만 나옵니다.\n답변에 없으면, 선택지에도 없습니다.",
  cta: "무료 진단 요청",
  transitionHook: "왜 이런 일이 벌어지고 있을까요?",
} as const;

export const REALITY = {
  title: "고객이 정보를 찾는 방식이 달라졌습니다",
  subtitle: "검색창에 입력하던 고객이, 이제 AI에게 묻습니다.",
  pain: "\"경쟁사는 ChatGPT에 나오는데 우리는 왜 안 나올까?\"\n많은 대표님들이 같은 질문을 합니다.\n당신의 콘텐츠가 나빠서가 아닙니다. 검색의 구조가 바뀐 것입니다.",
  dataCards: [
    {
      stat: "54.5%",
      description: "한국인 절반 이상이 ChatGPT로 정보를 검색합니다",
    },
    {
      stat: "69%",
      description: "검색 결과를 클릭하지 않고 AI 답변만 보고 떠납니다",
    },
    {
      stat: "527%↑",
      description: "AI 검색 트래픽, 전년 대비 급증하고 있습니다",
    },
  ],
  supporting:
    "검색 1등이어도, AI 답변 밖이면 고객은 당신을 보지 못합니다.\n이것은 트렌드가 아닙니다. 이미 일어나고 있는 일입니다.",
  transitionHook: "그렇다면, 답변에 포함되려면 무엇이 필요할까요?",
} as const;

export const INSIGHT = {
  title: "답변에 나오는 것은 운이 아닙니다",
  subtitle:
    "AI가 특정 브랜드를 답변에 포함하는 데는 구조가 있습니다.\n그 구조를 설계하는 것이 우리가 하는 일입니다.",
  reframe:
    "\"SEO만 잘하면 된다\"는 통념은 더 이상 사실이 아닙니다.\n구글 검색 1등이어도, AI 답변에 포함되지 않으면\n고객의 절반 이상을 놓칩니다.",
  cards: [
    {
      result:
        '"OO 추천해줘"라고 물었을 때, AI가 당신을 먼저 말하게 합니다.',
      description:
        "질문에 바로 답할 수 있는 콘텐츠 구조를 설계합니다.\nAI 엔진은 명확한 답변이 있는 콘텐츠를 선호합니다.",
      term: "Answer Engine Optimization (AEO)",
    },
    {
      result: "AI가 답변할 때, 당신의 사이트를 출처로 링크하게 합니다.",
      description:
        "근거와 데이터가 있는 신뢰 구조를 만들어,\nAI가 \"참고한 출처\"로 당신을 인용하도록 설계합니다.",
      term: "Generative Engine Optimization (GEO)",
    },
    {
      result: "검색에서 발견되고, 발견이 문의로 이어지게 합니다.",
      description:
        "유입 키워드부터 전환 동선까지,\n검색 → 방문 → 문의의 전체 여정을 최적화합니다.",
      term: "Search Engine Optimization (SEO)",
    },
  ],
  mechanism:
    "이 세 가지는 하나의 파이프라인으로 연결되어야 합니다.\n답변에 나오고, 출처로 인용되고, 검색에서 발견되는 것.\n하나라도 빠지면 전체 흐름이 끊깁니다.",
  transitionHook: "구체적으로 어떤 서비스인지 살펴보세요.",
} as const;

export const SERVICES_SECTION = {
  title: "답변에 나오는 구조를 만듭니다",
  transitionHook: "이 방식은 어떤 원칙으로 운영될까요?",
} as const;

export const SERVICES = [
  {
    id: "aeo",
    title: "AEO",
    subtitle: "Answer Engine Optimization",
    benefit: "AI 답변의 첫 번째 선택지가 됩니다",
    description: "AI가 당신의 콘텐츠를 직접 답변으로 채택합니다.",
    tasks: [
      "질문형 의도 분석 및 답변형 카피 설계",
      "답변 우선 구조 (정의 → 요약 → 근거) 구성",
      "FAQ/피처 스니펫 대응 콘텐츠 제작",
    ],
  },
  {
    id: "geo",
    title: "GEO",
    subtitle: "Generative Engine Optimization",
    benefit: "AI가 당신을 출처로 인용합니다",
    description:
      '답변 하단의 "참고한 사이트"에 당신의 링크가 걸립니다.',
    tasks: [
      "인용 가능한 신뢰 구조 설계 (근거·출처·데이터)",
      "브랜드/서비스 지식 체계화",
      "생성형 검색 친화형 콘텐츠 정렬",
    ],
  },
  {
    id: "seo",
    title: "SEO",
    subtitle: "Search Engine Optimization",
    benefit: "검색 유입이 실제 문의로 이어집니다",
    description: "검색에서 발견되고, 발견이 전환으로 연결됩니다.",
    tasks: [
      "유입 키워드 구조 재설계",
      "전환 동선/페이지 흐름 최적화",
      "기술 SEO 기본 정비 (속도/인덱싱/메타)",
    ],
  },
] as const;

export const CREDIBILITY = {
  title: "약속 대신 원칙으로 일합니다",
  subtitle:
    "확인되지 않은 성과를 내세우지 않습니다.\n대신, 작동이 검증된 방법론과 투명한 프로세스로 일합니다.",
  antiHype: [
    "\"3개월 안에 검색 1등 보장\"",
    "\"매출 300% 상승 확정\"",
    "\"AI가 알아서 다 해줍니다\"",
  ],
  antiHypeClosing:
    "이런 약속은 하지 않습니다.\n대신, 우리가 지키는 원칙이 있습니다.",
  principles: [
    {
      title: "데이터로 설계합니다",
      description:
        "감이 아닌 수치 근거로 전략을 수립합니다.\nFAQPage 스키마 적용 시 AI Overview 노출 3.2배 증가.\n검증된 방법론만 사용합니다.",
      stat: "3.2×",
      statLabel: "FAQPage → AI Overview 노출 증가",
    },
    {
      title: "주간으로 추적합니다",
      description:
        "AI 엔진은 최신 정보를 선호합니다.\n한 번 세팅하고 방치하면 답변에서 밀려납니다.\n주간 업데이트와 성과 리포트로 지속 관리합니다.",
      stat: "주간",
      statLabel: "업데이트 및 성과 리포트 주기",
    },
    {
      title: "측정할 수 없으면 하지 않습니다",
      description:
        "답변 노출 빈도, 인용 횟수, 전환율.\n모든 활동은 수치로 추적되고 리포트로 공유됩니다.",
      stat: "3가지",
      statLabel: "핵심 지표: 노출·인용·전환",
    },
  ],
  transitionHook: "진행은 단순합니다.",
} as const;

export const PROCESS = {
  title: "3단계. 그것으로 충분합니다.",
  subtitle: "복잡한 준비는 필요 없습니다. 진단 요청 하나로 시작됩니다.",
  steps: [
    {
      step: 1,
      title: "진단",
      description:
        "AI 답변에서 당신의 현재 위치를 확인합니다.\nChatGPT·Perplexity·Google AI Overview 노출 상태, 경쟁사 대비 포지션, 콘텐츠 답변 적합성을 평가합니다.",
      free: true,
    },
    {
      step: 2,
      title: "설계",
      description:
        "데이터 기반 통합 전략서를 받습니다.\n타깃 키워드·질문형 쿼리 맵, 콘텐츠 구조 설계안, 전환 동선 개선안을 포함합니다.",
      free: false,
    },
    {
      step: 3,
      title: "실행",
      description:
        "콘텐츠와 구조가 최적화되고, 주간으로 관리됩니다.\n답변형 콘텐츠 제작, 주간 업데이트·성과 리포트, 노출·인용·전환율 추적을 수행합니다.",
      free: false,
    },
  ],
  transitionHook: "왜 ABEL AI인가?",
} as const;

export const MID_CTA = {
  title: "현재 상태가 궁금하시다면",
  subtitle: "무료 진단으로 AI 답변에서의 위치를 확인하세요.",
  cta: "무료 진단 요청",
  riskRemoval: "무료. 5분이면 충분합니다.",
} as const;

export const DIFFERENTIATORS = {
  title: "기존 방식과는 다릅니다",
  subtitle: "검색 순위만 올리는 시대는 끝났습니다.",
  comparisons: [
    {
      before: "검색 순위 올리기에 집중",
      after: "답변 노출 + 출처 인용 + 검색 순위를 동시에 설계",
    },
    {
      before: "한번 세팅하고 끝",
      after: "주간 업데이트로 지속 관리",
    },
    {
      before: "감과 경험에 의존",
      after: "데이터와 근거 기반으로 설계",
    },
    {
      before: "구글 검색만 대응",
      after: "구글 + ChatGPT + 네이버 AI를 동시에 대응",
    },
  ],
  supporting:
    "AI 엔진은 최신 정보를 선호합니다.\n한번 세팅하고 방치하면, 답변에서 밀려납니다.\nABEL AI는 주간 단위로 콘텐츠를 갱신하고, 성과를 추적합니다.",
  transitionHook: "이 서비스가 나에게 맞을까요?",
} as const;

export const QUALIFICATION = {
  title: "이런 상황이라면 ABEL AI가 적합합니다",
  fitForTitle: "이런 분에게 적합합니다",
  notForTitle: "이런 경우에는 맞지 않습니다",
  fitFor: [
    "ChatGPT나 Perplexity에서 업종을 검색하면 경쟁사만 나온다",
    "콘텐츠를 만들고 있지만 실제 문의로 이어지지 않는다",
    "기존 SEO 대행사를 쓰고 있지만 성과가 보이지 않는다",
    "AI 검색 대응이 필요한 건 아는데 무엇부터 해야 할지 모르겠다",
  ],
  notFor: [
    "즉각적인 매출 증가를 원하시는 경우 — 검색 최적화는 구조적 투자입니다",
    "콘텐츠 없이 기술 세팅만으로 해결하길 원하시는 경우",
    "주간 피드백과 협업에 시간을 투자하기 어려운 경우",
  ],
  transitionHook: "궁금한 점이 있으신가요?",
} as const;

export const FAQ_SECTION = {
  title: "자주 묻는 질문",
  subtitle: "AI 검색 최적화에 대해 궁금한 점을 확인하세요",
} as const;

export const FAQ_ITEMS = [
  // 그룹 1: 교육 (개념 이해)
  {
    question: "AI 검색 최적화가 왜 중요한가요?",
    answer:
      "ChatGPT 월간 사용자 2000만+명 시대, 검색의 중심이 AI로 이동하고 있습니다. AI 답변에 포함되지 않으면 고객에게 도달할 기회가 줄어듭니다.",
  },
  {
    question: "AEO와 GEO는 무엇이 다른가요?",
    answer:
      'AEO는 AI가 즉시 답변할 수 있는 "직접 답변" 콘텐츠를 만듭니다. GEO는 AI가 참고하고 출처로 링크하는 "인용될 출처"를 만듭니다. 쉽게 말해 AEO는 답변 자체, GEO는 답변의 근거입니다.',
  },
  {
    question: "SEO만 하면 충분하지 않나요?",
    answer:
      "충분하지 않습니다. 구글 1등을 하더라도 AI 답변에 포함되지 않으면 유입 기회를 놓칩니다. AEO와 GEO를 함께 해야 AI 시대의 검색 가시성을 확보할 수 있습니다.",
  },
  {
    question: "ChatGPT에 우리 브랜드가 노출되게 하려면?",
    answer:
      "질문에 직접 답하는 구조화된 콘텐츠, 신뢰할 수 있는 출처 구조, 그리고 AI가 크롤링하기 쉬운 기술적 최적화가 필요합니다. ABEL AI가 이 세 가지를 통합 설계합니다.",
  },
  // 그룹 2: 실무 (서비스 이해)
  {
    question: "ABEL AI는 어떤 회사인가요?",
    answer:
      "ABEL AI는 AEO·GEO·SEO 통합 최적화 전문 에이전시입니다. ChatGPT, Perplexity, Google AI Overviews 등 AI 검색에서 브랜드가 답변에 포함되도록 설계합니다.",
  },
  {
    question: "기존 SEO 대행사와 무엇이 다른가요?",
    answer:
      "기존 대행사는 검색 순위에 집중합니다. ABEL AI는 AEO+GEO+SEO 통합으로 AI 답변 노출, 출처 인용, 검색 유입을 동시에 확보합니다.",
  },
  {
    question: "어떤 업종이 효과가 큽니까?",
    answer:
      "탐색에서 비교, 문의로 이어지는 업종일수록 효과가 큽니다. 전문 서비스업, B2B SaaS, 컨설팅, 교육, 의료, 법률 등이 대표적입니다.",
  },
  {
    question: "콘텐츠 업데이트는 얼마나 자주 하나요?",
    answer:
      "주 단위 업데이트가 기본입니다. AI 엔진은 최신 정보를 선호하므로 정기적인 갱신이 중요합니다. 운영 템플릿을 제공하여 효율적으로 관리할 수 있도록 지원합니다.",
  },
  {
    question: "성과는 어떻게 측정하나요?",
    answer:
      "답변 노출 빈도, 인용 빈도, 전환율 세 가지 핵심 지표로 측정합니다. 정량적 데이터 기반 주간/월간 리포트를 제공합니다.",
  },
  // 그룹 3: 행동 (의사결정)
  {
    question: "진행 기간은 얼마나 걸리나요?",
    answer:
      "무료 진단 후 프로젝트 범위에 따라 다르지만, 일반적으로 초기 셋업은 2-4주, 이후 주간 단위로 지속 운영합니다. 빠른 테스트와 개선을 반복합니다.",
  },
  {
    question: "비용은 어떻게 책정되나요?",
    answer:
      "진단 후 프로젝트 범위 기반으로 결정됩니다. 먼저 무료 진단을 요청하시면, 비용 없이 현재 상태를 파악하고 개선 방향을 확인하실 수 있습니다.",
  },
  {
    question: "무료 진단에서는 무엇을 확인하나요?",
    answer:
      "AI 엔진에서의 현재 노출 상태, 기존 콘텐츠의 답변 적합성, 전환 동선 효율성, 경쟁사 대비 포지션을 분석하고 개선 방향을 제시합니다.",
  },
] as const;

export const FINAL_CTA = {
  title: "5분이면 시작할 수 있습니다",
  subtitle:
    "무료 진단을 요청하시면,\nAI 답변에서 당신의 현재 위치와 개선 방향을 확인할 수 있습니다.",
  cta: "무료 진단 요청",
  checklist: [
    "ChatGPT / Perplexity / Google AI에서의 현재 노출 상태",
    "경쟁사 대비 포지션",
    "콘텐츠 답변 적합성 평가",
    "구체적 개선 방향 제시",
  ],
  riskRemoval: "무료. 약정 없음.",
} as const;
