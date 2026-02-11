# UiCore Pro 히어로 섹션 구성 단계 (v1)

## 전제
- 구조: 중앙 텍스트 오버레이 + 배경 영상(풀블리드)
- 테마: UiCore Pro

## 1) 섹션 만들기
- 새 섹션 추가 → Full Width
- 섹션 높이: 85–95vh
- 패딩: Top 160 / Bottom 140 (Desktop), 110 / 90 (Mobile)
- 배경: Rich Black 기반 그라데이션
  - 예시: linear-gradient(140deg, #0A0E13 0%, #0B1F3A 55%, #1D1144 100%)

## 2) 배경 영상 레이어
- 섹션 내부에 비디오 요소 삽입(HTML 또는 위젯)
- 위치: absolute, top/left 0, width/height 100%, z-index -1
- 설정: autoplay, muted, loop, playsinline, preload="metadata"
- poster 지정 (영상 로딩 전 이미지)
- 오버레이 추가: 검정(#000) 25–35% 불투명도

## 3) 텍스트 컨테이너
- 내부 컨테이너 생성(최대 너비 720–840px)
- 정렬: 중앙 정렬(가로/세로)
- 구성:
  1) H1
  2) Sub
  3) CTA 버튼
  4) 키워드(신뢰·정확·전환)

## 4) 타이포/버튼 가이드
- H1: 54–66px, 1.05–1.15 line-height
- Sub: 18–20px, 1.4 line-height
- CTA 버튼: Large / Purple 강조 / hover 밝기 +10%

## 5) 반응형
- Tablet: H1 48–56px
- Mobile: H1 36–42px, Sub 16–18px
- 모바일에서도 텍스트 중앙 정렬 유지

## 6) 접근성/성능
- 텍스트는 HTML로만(영상 내 삽입 금지)
- 영상 용량 관리(WebM 우선, MP4 fallback)
- Lazy Load + 화면 진입 시 재생

## 체크리스트
- 카피가 배경과 충분히 분리되는가?
- CTA가 첫 화면에서 바로 보이는가?
- 모바일에서 텍스트가 과하게 작지 않은가?
