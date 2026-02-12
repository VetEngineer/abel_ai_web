# SEO & GEO Strategy: ABEL AI

Generated: 2026-02-11
Last Updated: 2026-02-11

> **TL;DR**: (1) FAQPage + Organization + Service JSON-LD 스키마 즉시 구현, (2) llms.txt 배포 완료, (3) 질문형 콘텐츠 12-15개로 확장, (4) 네이버 블로그/아이보스 외부 콘텐츠 배포, (5) 케이스 스터디 페이지 추가

---

## Executive Summary

### 현재 상태

- Next.js 16 기반 웹사이트 초기 구축 단계
- 홈페이지 1-page 구조 (Hero, 서비스, 차별점, 프로세스, FAQ, CTA)
- FAQ 6개, 서비스 3종 정의 완료
- llms.txt / llms-full.txt 생성 완료
- 스키마 마크업 미적용
- 외부 플랫폼 콘텐츠 미배포

### Top 5 우선 액션

| Priority | Action | Effort | Impact | Platform |
|----------|--------|--------|--------|----------|
| 1 | JSON-LD 스키마 구현 (Organization, FAQPage, Service, HowTo) | Low | High | Google AI Overview, 전체 |
| 2 | FAQ 12-15개로 확장 + 롱테일 키워드 커버 | Low | High | ChatGPT, Perplexity, Google |
| 3 | 메타데이터 키워드 확장 + OG 태그 완성 | Low | Medium | 전체 |
| 4 | 케이스 스터디 / 인사이트 페이지 추가 | Medium | High | Claude, ChatGPT |
| 5 | 네이버 블로그 + 아이보스 기고 시작 | Medium | High | 네이버 AI Briefing, Perplexity |

### 기대 성과

- FAQPage 스키마 적용 시 Google AI Overview 노출 확률 **3.2배 증가**
- 리치 결과 표시 페이지의 CTR이 일반 대비 **82% 높음**
- AI 검색 트래픽 전년 대비 **80.92% 급증** 추세에 선점 효과

---

## 시장 현황 (2026)

### 핵심 수치

- AI 검색 트래픽 전년 대비 **80.92% 급증**, 전체 검색의 약 2.96% (초기 시장, 선점 기회)
- ChatGPT가 AI 검색 추천 트래픽의 **87.4%** 차지
- Google 검색의 약 **25%에서 AI Overview 노출**
- 제로클릭 검색 **69%** (2024년 56% → 2025년 69%)
- 한국인 **54.5%**가 ChatGPT로 정보 검색 경험 (2026 OpenSurvey)

### 한국 시장 특수성

- **이중 AI 생태계**: 구글 AI Overview + ChatGPT (글로벌) + 네이버 AI Briefing/Cue: (국내)
- 네이버 AI Briefing이 전체 검색 쿼리의 **20%+** 커버 (2025년 말 기준)
- 네이버 검색 점유율 ~55%, 구글 ~40% → **양쪽 동시 최적화 필수**
- GEO 키워드 월간 검색량 4,400회 (YoY 128% 성장), AEO 2,400회

---

## Customer-Aligned Strategy

### ICP가 검색하는 방식

| 트리거 | 검색어 예시 | 플랫폼 |
|--------|------------|--------|
| ChatGPT에 경쟁사만 나올 때 | "ChatGPT 답변 최적화", "AEO란" | ChatGPT, Google |
| 마케팅 성과 부진 | "SEO 효과 없음", "마케팅 에이전시 추천" | Google, 네이버 |
| AI 검색 트렌드 인지 | "GEO 최적화", "생성형 검색 대응" | Google, Perplexity |
| 에이전시 탐색 | "AEO 에이전시", "AI SEO 전문 업체" | Google, 네이버 |
| 경쟁사 분석 | "경쟁사 ChatGPT 노출 방법" | ChatGPT, Perplexity |

### ICP가 신뢰하는 권위 신호

1. **구체적 프로세스**: 진단→설계→실행의 명확한 3단계
2. **데이터 기반 근거**: 수치, 통계, Before/After
3. **무료 진단**: 리스크 없는 진입점
4. **전문 용어 활용**: AEO/GEO/SEO 전문 지식 입증
5. **한국 시장 사업자 정보**: 사업자등록번호, 대표자명 명시

---

## Traditional SEO Foundation

### Technical SEO

#### Schema Markup (최우선)

**1. Organization Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ABEL AI",
  "url": "https://abelai.kr",
  "description": "AEO·GEO·SEO 통합 최적화 에이전시",
  "foundingDate": "2025",
  "areaServed": { "@type": "Country", "name": "South Korea" },
  "knowsAbout": [
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "Search Engine Optimization"
  ]
}
```

**2. FAQPage Schema** (AI Overview 노출 3.2배 증가)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "AEO와 GEO는 무엇이 다른가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AEO는 '직접 답변', GEO는 '인용될 출처'를 만듭니다."
      }
    }
  ]
}
```

**3. Service Schema** (각 서비스별)

**4. HowTo Schema** (프로세스 섹션)

#### Site Structure

- URL: `abelai.kr/`, `/service`, `/cases`, `/contact`
- Internal linking: 모든 페이지에서 무료 진단 CTA 연결
- Breadcrumb: 서브페이지 추가 시 BreadcrumbList 스키마 적용

#### Performance

- Core Web Vitals 목표: LCP < 2.5s, FID < 100ms, CLS < 0.1
- 이미지: WebP/AVIF, lazy loading
- 빠른 로딩 페이지가 ChatGPT 인용 확률 **3배** 높음

### Content Strategy

#### 1차 타깃 키워드

| 키워드 | 검색 의도 | 콘텐츠 전략 |
|--------|-----------|------------|
| "AEO 최적화" | 정보 탐색 | 교육 가이드 + 서비스 연결 |
| "GEO 최적화" | 정보 탐색 | 정의 + 방법론 가이드 |
| "ChatGPT 답변 최적화" | 문제 해결 | 실전 가이드 + CTA |
| "AI 검색 노출" | 문제 해결 | 케이스 스터디 |
| "AEO GEO SEO 차이" | 비교 탐색 | 비교 콘텐츠 |
| "SEO 에이전시" | 구매 의도 | 서비스 페이지 |

#### 2차 타깃 키워드 (롱테일)

| 키워드 |
|--------|
| "ChatGPT에 우리 회사 나오게 하는 방법" |
| "생성형 AI 최적화" |
| "네이버 AI 검색 최적화" |
| "구글 AI Overview 노출" |
| "제로클릭 검색 대응" |
| "AI 시대 SEO 전략" |
| "답변엔진 최적화" |

#### 콘텐츠 구조 원칙 (답변 캡슐 포맷)

```
[질문을 H2로]
[2-3문장의 직접 답변 — AI가 인용하는 부분]
[상세 설명 및 근거]
[데이터/예시]
```

#### 발행 빈도

- 주 2-3회 콘텐츠 발행 (블로그/인사이트)
- 주 1회 FAQ 추가 또는 업데이트
- 월 1회 케이스 스터디 발행

### Authority Building

#### 외부 플랫폼 (한국 특화)

| 플랫폼 | 전략 | 우선순위 |
|--------|------|---------|
| 네이버 블로그 | AEO/GEO 교육 콘텐츠 정기 발행 | 최우선 |
| 아이보스 | 전문가 칼럼/기고 | 최우선 |
| 브런치 | 인사이트 매거진 연재 | 높음 |
| LinkedIn | 한국 마케팅 그룹 활동 | 중간 |
| Reddit (r/SEO, r/marketing) | 영문 GEO/AEO 전문성 (글로벌 인용) | 중간 |

#### 디지털 PR

- ZDNet Korea, GTT Korea 등 테크 매체 기고
- AEO/GEO 관련 웨비나/세미나 발표
- 업계 보고서/백서 발행 (Conductor 등 글로벌 데이터 인용)

---

## Platform-Specific GEO

### Google AI Overviews

**소스 선택 기준**: Top 10 랭킹 페이지 + 구조화된 콘텐츠 + 스키마 마크업

**최적화 전술**:
1. FAQPage 스키마 필수 (노출 확률 3.2배)
2. 답변 캡슐 포맷: 질문 → 2-3문장 직접 답변 → 상세
3. HowTo 스키마로 프로세스 구조화
4. 한국어 쿼리 대응 강화

**안티패턴**: 키워드 스터핑, 얇은 콘텐츠, 스키마와 실제 콘텐츠 불일치

---

### ChatGPT

**소스 선택 기준**: RAG 기반 시맨틱 관련성 + 제3자 검증 + 페이지 로딩 속도

**핵심 수치**: AI 검색 추천 트래픽의 87.4%, 한국인 54.5% 사용 경험

**최적화 전술**:
1. 페이지 로딩 속도 최적화 (빠른 페이지 = 인용 확률 3배)
2. 근거 기반 서술: 통계, 수치, 출처 포함
3. E-E-A-T 강화: 저자 정보, 전문성 입증
4. llms.txt 배포 (이미 완료)
5. 외부 플랫폼 멘션 확보 (Reddit, LinkedIn, 아이보스)

**안티패턴**: 백링크/키워드 밀도에 의존, AI 생성 콘텐츠 무편집 발행

---

### Perplexity

**소스 선택 기준**: 투명한 인용, UGC/커뮤니티 콘텐츠 강하게 선호

**핵심 수치**: Reddit이 인용의 46.7% 차지, UGC가 전체 인용의 ~50%

**최적화 전술**:
1. Reddit r/SEO, r/marketing 활동 (영문 GEO/AEO 전문성)
2. 비교/분석 콘텐츠 (표 형식, 명확한 구조)
3. 원본 리서치/데이터 발행 (인용 가치 극대화)
4. 네이버 카페/블로그 콘텐츠 (한국어 쿼리 대응)

**안티패턴**: 자사 콘텐츠만 의존, 커뮤니티 미참여

---

### Claude

**소스 선택 기준**: 정보 밀도, 다각적 분석, 권위 있는 출처

**최적화 전술**:
1. 장문 콘텐츠 (1500+ 단어) 우선
2. 다수의 권위 있는 인용 포함
3. 케이스 스터디, 원본 데이터, 실제 경험 포함
4. 명확한 헤딩 구조 (H2/H3 체계)
5. passage-level 팩트: 문단당 하나의 명확한 주장

**안티패턴**: 얇은 콘텐츠, 출처 없는 주장, 피상적 분석

---

### Gemini

**소스 선택 기준**: Google Knowledge Graph + Google AI Overview와 유사

**최적화 전술**:
1. Google AI Overview 전략과 동일하게 적용
2. Organization 스키마 강화 (엔티티 인식)
3. Google 검색 상위 랭킹 확보가 선행 조건

---

### 네이버 AI Briefing (Cue:)

**소스 선택 기준**: 시맨틱 유사성 + 권위성/신뢰성 + 사용자 참여도

**핵심**: 전체 검색 쿼리의 20%+ 커버, 2026년 Q2 AI 탭 확장 예정

**최적화 전술**:
1. 네이버 블로그 정기 발행 (AI Briefing 소스로 활용)
2. 구조화된 콘텐츠: 불릿, Q&A, 요약, 고해상도 이미지
3. 콘텐츠 업데이트 빈도 높이기 (주 2-3회)
4. 네이버 지식인 활용: AEO/GEO 관련 질문 답변
5. 네이버 플레이스 등록 (오프라인 실체 확인)

**안티패턴**: 네이버 생태계 무시, 콘텐츠 업데이트 중단

---

## 경쟁 환경

### 한국 주요 경쟁사

| 경쟁사 | 포지셔닝 | 강점 | ABEL AI 차별점 |
|--------|----------|------|---------------|
| TBWA 데이터랩 | No.1 SEO 에이전시 | LG U+, KB, 무신사 레퍼런스 | AEO+GEO 통합 (TBWA는 SEO 중심) |
| 리드젠랩 | GEO/AEO 전문 | GEO 실험실, 디사일로 사례 | 통합 최적화 (리드젠은 GEO 특화) |
| 넥스트티 | 종합 SEO + GEO | Samsung/LG/SK 포트폴리오 | 중소기업 특화 + 공격적 톤 |
| 238LAB | 구글 SEO | 80%+ 성공률 | AEO/GEO 추가 + 네이버 대응 |

### ABEL AI 차별화

- **통합 = 유일**: AEO + GEO + SEO를 하나의 프로세스로 통합하는 에이전시는 희소
- **중소기업 맞춤**: 대기업 위주 경쟁사와 달리 중소기업/스타트업 타깃
- **공격적 톤**: "답변에 없으면 매출도 없습니다" — 위기감 자극 + 솔루션 제시

---

## Implementation Roadmap

### Quick Wins (Low Effort, High Impact)

1. **JSON-LD 스키마 구현**: Organization + FAQPage + Service + HowTo → AI Overview 노출 극대화
2. **메타데이터 키워드 확장**: "ChatGPT 답변 최적화", "GEO 최적화", "AI 검색 노출" 등 추가
3. **FAQ 확장**: 12-15개로 늘리기 (롱테일 키워드 커버)
4. **llms.txt 배포**: 완료 ✅

### Strategic Investments (High Effort, High Impact)

1. **케이스 스터디 페이지**: 업종별 인사이트형 사례 (진단 결과 공개 방식)
2. **블로그/인사이트 섹션**: 주 2-3회 AEO/GEO 교육 콘텐츠 발행
3. **네이버 블로그 + 아이보스 기고**: 외부 권위성 확보
4. **About 페이지**: 팀/방법론 상세 → E-E-A-T 신뢰성

### Maintenance (Low Effort, Low Impact)

1. 주간 콘텐츠 업데이트 (FAQ 추가, 블로그 발행)
2. Google Search Console / Naver Webmaster 모니터링
3. AI 엔진 인용 모니터링 (ChatGPT, Perplexity에서 브랜드 검색)

### Skip These (High Effort, Low Impact)

1. **대규모 백링크 캠페인**: AI 시대에 시맨틱 관련성이 더 중요
2. **키워드 밀도 최적화**: RAG 기반 AI는 키워드 밀도를 평가하지 않음
3. **다국어 사이트**: 현재 국문 중심 전략이 우선

---

## Anti-Patterns

### 절대 하지 말 것

| Anti-Pattern | 위험성 | 대안 |
|-------------|--------|------|
| 스키마와 실제 콘텐츠 불일치 | Search Console 오류, 신뢰도 하락 | Rich Results Test로 검증 |
| AI 생성 콘텐츠 무편집 발행 | E-E-A-T 저하, 검색 순위 하락 | 전문가 감수 + 원본 데이터 추가 |
| 네이버 생태계 무시 | 한국 시장 55% 유실 | 네이버 블로그/카페/지식인 병행 |
| 커뮤니티 미참여 | Perplexity 인용 기회 상실 | Reddit/아이보스 정기 활동 |
| 콘텐츠 업데이트 중단 | AI 최신 정보 선호 → 인용 감소 | 주간 업데이트 체계 유지 |

---

## Refresh Cadence

AI 플랫폼은 빠르게 진화합니다. 이 전략은 **분기별 갱신**을 권장합니다.

**Next Review**: 2026-05-11

**조기 갱신 신호**:
- 주요 플랫폼 알고리즘 변경 발표
- AI 인용 트래픽 급감
- 네이버 AI 탭 정식 출시 (2026 Q2 예정)
- 신규 AI 검색 플랫폼 등장

---

## Version History

- **v1.0** - 2026-02-11 - 초기 생성 (3개 리서치 에이전트 기반)

---

## Quick Reference

**한 줄 전략**: "스키마로 AI가 이해하게, 답변 캡슐로 AI가 인용하게, 외부 플랫폼으로 AI가 신뢰하게"

**새 콘텐츠 체크리스트**:
- [ ] ICP의 검색 의도에 부합하는가?
- [ ] AI 인용 구조 (답변 캡슐, FAQ 등)가 적용되었는가?
- [ ] 적절한 스키마 마크업이 포함되었는가?
- [ ] 내부 링크로 전환 동선이 연결되었는가?
- [ ] 외부 플랫폼 배포를 고려했는가?

---

## Sources

- [Conductor 2026 AEO/GEO Benchmarks Report](https://www.conductor.com/academy/aeo-geo-benchmarks-report/)
- [TBWA 데이터랩 SEO 가이드](https://seo.tbwakorea.com/)
- [리드젠랩 AEO/GEO 최적화 가이드](https://blog.lead-gen.team/aeo-geo-optimization-guide-checklist)
- [Schema Markup in 2026: Critical for SERP Visibility](https://almcorp.com/blog/schema-markup-detailed-guide-2026-serp-visibility/)
- [Naver AI Briefing | The Egg](https://www.theegg.com/seo/korea/naver-search-engine-updates-exploring-naver-ai-and-ai-briefing/)
- [ChatGPT narrows Naver's grip on Korean search](https://www.koreaherald.com/article/10665662)
- [OpenAds - SEO/GEO/AEO 총정리](https://openads.co.kr/content/contentDetail?contsId=17364)
- [Perplexity AI Optimization | Am I Cited](https://www.amicited.com/blog/perplexity-ai-optimization-get-cited-real-time-search/)
- [Claude AI SEO | ClickRank](https://www.clickrank.ai/claude-ai-seo/)
