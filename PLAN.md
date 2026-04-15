# LP 레이아웃 개선 + 텍스트 축소 계획

## 문제
1. Hero 메인 카피 2줄 → 레이아웃 깨짐
2. 전체적으로 왼쪽 치우침 느낌
3. 텍스트 과다

## 변경 사항

### 1. Hero 2줄 깨짐 수정 (`Hero.tsx`)
- h1 텍스트 크기를 조정하여 2줄이 자연스럽게 보이도록 개선
- `lg:text-6xl` → `lg:text-5xl`로 축소하여 줄바꿈 시 여백 과다 방지
- `max-w-xl` → `max-w-lg`로 텍스트 영역 조정

### 2. 중앙 정렬 느낌 강화 (`Hero.tsx`)
- 왼쪽 그라디언트 오버레이를 약간 줄여서 3D가 더 보이게 (`via-background/80` → `via-background/60`)
- 콘텐츠 영역의 좌측 여백을 늘리지 않되, 3D 장면의 오프셋을 중앙 쪽으로 이동

### 3. Differentiators 섹션 제거
- `page.tsx`에서 `<Differentiators />` 제거
- `content.ts`에서 `DIFFERENTIATORS` export는 유지 (다른 곳에서 참조 가능성)
- Credibility의 before/after 비교 핵심 메시지가 이미 커버

### 4. 전체 텍스트 밀도 줄이기 (`content.ts`)
- **Reality**: `pain` 문단을 2문장으로 축소 (3문장 → 2문장)
- **Insight**: `reframe` 문단을 1문장으로 축소, `mechanism`도 2줄로 줄임
- **Credibility**: `principles` 각 description을 2줄로 축소
- **Process**: 각 step description을 1문장 핵심만 유지

## 영향 범위
- `src/components/sections/Hero.tsx` — 텍스트 크기/영역 조정
- `src/app/page.tsx` — Differentiators 제거
- `src/constants/content.ts` — 텍스트 간소화
