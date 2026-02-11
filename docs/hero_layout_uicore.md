# UiCore Pro Hero 레이아웃 정의 (v1)

## 목표
- 3D 루프 영상이 주인공인 히어로.
- 카피는 강하고 짧게, 시각적 군더더기 최소화.
- CTA 단일(무료 진단 요청)로 전환 집중.

## 레이아웃 구조
- 섹션: Full-width 섹션 + 내부 컨테이너.
- 컨테이너 폭: 1200–1280px.
- 구성: 중앙 정렬 텍스트 오버레이 + 배경 영상(풀블리드).
- 텍스트 위치: 중앙 정렬(가로/세로).
- 텍스트 안전영역: 중앙 40% 영역을 비워 가독성 확보.

## UiCore Pro 구성 가이드
- Section: Hero (Full-width)
  - Background: Rich Black 기반 그라데이션
  - Overlay: 25–35% 어둡게 (카피 가독성 확보)
  - Padding: Top 160 / Bottom 140 (Desktop)
- Inner 컨테이너
  - 중앙 정렬 텍스트(Heading + Sub + CTA + 키워드)
  - 최대 너비 720–840px
- Video 설정
  - 배경 레이어로 배치(absolute + z-index 낮게)
  - autoplay, muted, loop, playsinline
  - preload="metadata"
  - poster 이미지 지정

## 타이포그래피
- H1: 54–66px, 1.05–1.15 line-height, 2줄 제한
- Sub: 18–20px, 1.4 line-height
- 키워드: 작은 캡슐형(선택), 텍스트 12–14px

## CTA
- 버튼: 단일 CTA (무료 진단 요청)
- 크기: Large
- 컬러: Purple 강조, 호버 시 밝기 +10%

## 반응형
- Tablet: H1 48–56px, 중앙 정렬 유지
- Mobile: 텍스트 중앙 유지, 영상은 배경 고정
- 모바일 여백: Top 110 / Bottom 90

## 접근성/퍼포먼스
- 영상에 텍스트 삽입 금지(카피는 HTML로).
- poster 이미지 제공.
- 영상은 Lazy Load + 화면 내 진입 시 재생.

## 참고 카피 배치
- H1: ChatGPT는 당신의 사업장을 알고 있나요?
- Sub: ChatGPT 월간 사용자수 2000만+명. 답변에 없으면 매출도 없습니다. ABEL AI가 AEO·GEO·SEO로 신뢰·정확·전환을 만듭니다.
- CTA: 무료 진단 요청
