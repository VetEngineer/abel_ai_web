# UiCore Pro 히어로 섹션 상세 구현 가이드 (v1)

## 목표
- 중앙 텍스트 + 배경 3D 루프 영상.
- 군더더기 없는 레이아웃, 강한 카피 집중.
- 성능과 가독성 우선.

## 공통 구조(모든 빌더 공통)
- 섹션: Full width, min-height 85–95vh, overflow hidden
- 레이어 순서
  1) 배경 영상 (z-index: 1)
  2) 어둡게 오버레이 (z-index: 2)
  3) 텍스트 콘텐츠 (z-index: 3)
- 중앙 안전영역: 화면 중앙 40%는 어둡게 유지

---

## A) Elementor 기준(가장 보편적인 UiCore 사용 흐름)

### 1) 섹션 설정
- 새 섹션 추가 → Full Width / Stretch
- 높이: Min Height 85–95vh
- 배경: Rich Black 그라데이션
  - 예시: linear-gradient(140deg, #0A0E13 0%, #0B1F3A 55%, #1D1144 100%)

### 2) 배경 영상 추가
- 섹션 배경 → Video Background 사용(가능한 경우)
- 파일: WebM + MP4 (브라우저 대응)
- Fallback 이미지: poster 이미지

### 3) 오버레이 설정
- 섹션 Background Overlay
- Color: #000, Opacity 25–35%

### 4) 텍스트 컨테이너
- Inner Section 또는 Container 추가
- 최대 너비: 720–840px
- 정렬: 중앙(가로/세로)
- 구성 순서:
  1) H1
  2) Sub
  3) CTA
  4) 키워드(신뢰 · 정확 · 전환)

### 5) 버튼 설정
- 버튼 텍스트: 무료 진단 요청
- 스타일: 보라색 강조, Hover 밝기 +10%

---

## B) Gutenberg 기준(블록 에디터)

### 1) 섹션 만들기
- Group 블록 → Full width
- 최소 높이: 85–95vh
- 배경 그라데이션 적용

### 2) 배경 영상 삽입
- HTML 블록 추가 → 아래 비디오 삽입

```html
<div class="hero-bg-video">
  <video autoplay muted loop playsinline preload="metadata" poster="/path/to/poster.jpg">
    <source src="/path/to/hero.webm" type="video/webm">
    <source src="/path/to/hero.mp4" type="video/mp4">
  </video>
</div>
```

### 3) 텍스트 블록
- Group(내용) 블록 생성
- 중앙 정렬 + 최대 너비 720–840px

---

## 공통 CSS (추가 CSS에 삽입)

```css
.hero-section { position: relative; overflow: hidden; min-height: 90vh; }
.hero-bg-video { position: absolute; inset: 0; z-index: 1; }
.hero-bg-video video { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; z-index: 2; background: rgba(0,0,0,0.30); }
.hero-content { position: relative; z-index: 3; max-width: 820px; margin: 0 auto; text-align: center; }
@media (max-width: 767px) {
  .hero-section { min-height: 80vh; padding: 110px 20px 90px; }
  .hero-content h1 { font-size: 38px; line-height: 1.1; }
}
```

> Gutenberg 사용 시: Group 블록에 `hero-section` 클래스, 영상 래퍼에 `hero-bg-video`, 오버레이 div에 `hero-overlay`, 텍스트 래퍼에 `hero-content` 클래스 부여.

---

## 카피 배치(참고)
- H1: ChatGPT는 당신의 사업장을 알고 있나요?
- Sub: ChatGPT 월간 사용자수 2000만+명. 답변에 없으면 매출도 없습니다. ABEL AI가 AEO·GEO·SEO로 신뢰·정확·전환을 만듭니다.
- CTA: 무료 진단 요청
- 키워드: 신뢰 · 정확 · 전환

## 체크리스트
- 첫 화면에서 CTA가 즉시 보이는가?
- 텍스트 대비(가독성)가 충분한가?
- 모바일에서 줄바꿈이 과하지 않은가?
