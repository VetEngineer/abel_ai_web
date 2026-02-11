# ABEL AI 디자인 스타일 가이드

> **버전**: 1.1
> **작성일**: 2026-02-11
> **스택**: Next.js 16 + React 19 + Tailwind CSS v4 + shadcn/ui
> **테마**: 다크 모드 전용
> **참조**: [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)

---

## 1. 디자인 원칙

### 1.1 전문성
마케팅 에이전시의 자신감. 담담하지만 확신 있는 톤.
시니어 컨설턴트가 데이터를 짚어주는 느낌.

### 1.2 긴급성
데이터 기반의 절제된 긴급성. 공포 조장이 아닌 현실 직시.
수치와 근거로 뒷받침되는 설득.

### 1.3 가독성 우선
다크 배경 위 텍스트의 명확한 대비.
foreground(0.95) vs background(0.10) — WCAG AA 충족.

### 1.4 최소주의
불필요한 장식 배제. 콘텐츠가 주인공.
그라데이션과 glow는 시각적 깊이감을 위한 최소한의 장치.

### 1.5 깊이와 레이어 (Apple HIG Materials 기반)
투명도와 블러를 활용하여 전경/배경 간 시각적 분리를 만든다.
머티리얼은 콘텐츠 계층을 전달하는 수단이며, 장식이 아니다.
각 레이어는 명확한 역할을 가지고, 사용자가 현재 맥락을 유지할 수 있도록 돕는다.

---

## 2. 컬러 시스템

### 2.1 브랜드 컬러 — Tone-and-Tone 유사색 조화

두 브랜드 컬러는 hue 40° 차이의 **유사색(Analogous)**으로 자연스러운 조화를 형성한다.
그라데이션으로 연결 시 시각적 흐름이 만들어진다.

| 이름 | oklch 값 | 역할 |
|------|----------|------|
| Space Blue | `oklch(0.45 0.15 250)` | 신뢰, 전문성 |
| Brand Purple | `oklch(0.50 0.20 290)` | 혁신, 차별화 |

CSS 변수: `--color-space-blue`, `--color-brand-purple`

### 2.2 Tone-on-Tone 명도 변화

각 브랜드 컬러를 3단계 명도로 활용한다.

**Space Blue (hue 250)**

| 단계 | CSS 변수 | oklch 값 | 용도 |
|------|----------|----------|------|
| Dark | `--color-space-blue-dark` | `oklch(0.35 0.12 250)` | 배경 깊이 |
| Base | `--color-space-blue` | `oklch(0.45 0.15 250)` | 기본 |
| Light | `--color-space-blue-light` | `oklch(0.55 0.18 250)` | 강조, CTA |

**Brand Purple (hue 290)**

| 단계 | CSS 변수 | oklch 값 | 용도 |
|------|----------|----------|------|
| Dark | `--color-brand-purple-dark` | `oklch(0.40 0.18 290)` | 배경 깊이 |
| Base | `--color-brand-purple` | `oklch(0.50 0.20 290)` | 보조 강조 |
| Light | `--color-brand-purple-light` | `oklch(0.60 0.22 290)` | 밝은 강조 |

### 2.3 보색 대비 — 절제된 사용

Blue(250°)의 보색 = Amber(~70°).

**허용 사용처** (주의 유도가 필요한 극소수 요소에만):
- "(무료)" 뱃지
- 핵심 수치 강조
- 경고 상태

**금지**: 보색을 배경색이나 대면적 요소에 사용하지 않는다.

현재 `--destructive: oklch(0.704 0.191 22.216)` (Red)는 에러/경고 전용이다.

### 2.4 투명도 사용 규칙

| 용도 | 투명도 범위 | 예시 |
|------|------------|------|
| 배경 그라데이션 | /5 ~ /10 | `from-brand-purple/5` |
| CTA 배경 그라데이션 | /10 ~ /20 | `from-space-blue/20` |
| 보더 | /10 ~ /30 | `border-border/30` |
| 비활성 텍스트 | /70 | `text-muted-foreground/70` |
| 오버레이 | /50 ~ /90 | `from-background/90` |

### 2.5 시맨틱 컬러 역할

`globals.css` `:root`에 정의된 시맨틱 토큰:

| 토큰 | oklch 값 | 역할 |
|------|----------|------|
| `--background` | `oklch(0.10 0.01 260)` | 페이지 배경 |
| `--foreground` | `oklch(0.95 0 0)` | 기본 텍스트 |
| `--card` | `oklch(0.14 0.015 260)` | 카드/컨테이너 배경 |
| `--primary` | `oklch(0.55 0.18 250)` | CTA, 강조 (Space Blue Light) |
| `--secondary` | `oklch(0.50 0.20 290)` | 보조 강조 (Brand Purple) |
| `--muted` | `oklch(0.20 0.015 260)` | 비활성 배경 |
| `--muted-foreground` | `oklch(0.65 0.02 260)` | 보조 텍스트 |
| `--border` | `oklch(1 0 0 / 10%)` | 구분선 |
| `--input` | `oklch(1 0 0 / 12%)` | 입력 필드 보더 |
| `--ring` | `oklch(0.55 0.18 250)` | 포커스 링 |
| `--destructive` | `oklch(0.704 0.191 22.216)` | 에러/경고 전용 |

### 2.6 유틸리티 클래스

`globals.css`에 정의된 커스텀 유틸리티:

```css
.text-gradient     /* Space Blue → Brand Purple 135° 그라데이션 텍스트 */
.glow-blue         /* Space Blue 30% box-shadow */
.glow-purple       /* Brand Purple 30% box-shadow */
```

---

## 3. 머티리얼 & 깊이 — Apple HIG Materials 기반

> Apple HIG는 머티리얼을 "투명도와 블러를 결합하여 전경과 배경 사이에
> 시각적 분리감을 만드는 효과"로 정의한다.
> ABEL AI는 이 원칙을 다크 테마 웹 환경에 맞게 적용한다.

### 3.1 3-레이어 구조

모든 UI는 세 개의 레이어로 구성된다.

| 레이어 | 역할 | 구현 |
|--------|------|------|
| **Background** | 깊이감의 기저. 페이지의 공간감 형성 | `bg-background` (`oklch(0.10 0.01 260)`) + 섹션별 그라데이션 |
| **Material** | 전경과 배경을 분리하는 반투명 표면 | `bg-card`, `bg-card/50`, `backdrop-blur` |
| **Foreground** | 사용자가 직접 읽고 상호작용하는 콘텐츠 | 텍스트, 버튼, 아이콘 |

이 구조는 사용자가 배경의 맥락을 잃지 않으면서 전경 콘텐츠에 집중할 수 있게 한다.

### 3.2 머티리얼 두께 (Material Thickness)

Apple HIG는 Ultra Thin → Thin → Regular → Thick → Chrome 5단계를 정의한다.
ABEL AI는 다크 모드 전용이므로, 배경 불투명도로 두께를 표현한다.

| 두께 | 불투명도 | Tailwind 표현 | 용도 |
|------|---------|--------------|------|
| Ultra Thin | 5% | `bg-card/5` | 섹션 배경 그라데이션 |
| Thin | 10~15% | `bg-card/10` ~ `bg-card/15` | 전환 훅 필(pill), 호버 배경 |
| Regular | 50% | `bg-card/50` | 전환 훅 컨테이너, 오버레이 요소 |
| Thick | 100% (불투명) | `bg-card` | 카드, 팝오버, 헤더 |

**원칙**: 콘텐츠가 많은 표면일수록 두꺼운 머티리얼을 사용한다.
텍스트가 dense한 카드는 `bg-card`(Thick), 장식적 힌트는 `bg-card/5`(Ultra Thin).

### 3.3 블러 & 바이브런시 (Blur & Vibrancy)

Apple HIG의 바이브런시는 "머티리얼 뒤의 색을 전경으로 끌어올려 깊이감을 강화"하는 효과다.
ABEL AI에서는 그라데이션 + 블러 조합으로 이를 구현한다.

#### 블러 사용 규칙

| 용도 | 블러 강도 | 예시 |
|------|----------|------|
| 배경 장식 glow | `blur-[100px]` ~ `blur-[120px]` | FinalCTA의 퍼플 원형 glow |
| Hero 모바일 오버레이 | `backdrop-blur` 없이 그라데이션 opacity로 대체 | 성능 우선 |
| 향후 모달/팝오버 | `backdrop-blur-md` (12px) | 배경 맥락 유지 |

#### 바이브런시 패턴

배경의 브랜드 컬러가 그라데이션을 통해 전경 레이어에 은은하게 스며드는 구조:

```
[Background] oklch(0.10 ...) 위에
  └─ [Gradient] from-space-blue/8 via-transparent to-brand-purple/8  ← 색이 스며듦
       └─ [Card] bg-card border-border  ← 불투명 표면
            └─ [Text] foreground  ← 가장 높은 레이어
```

이 패턴에서 그라데이션이 "뒤에서 앞으로 색을 당기는" Apple HIG의 바이브런시 역할을 한다.

### 3.4 Glass-on-Glass 금지

Apple HIG는 반투명 표면 위에 또 다른 반투명 표면을 겹치는 것을 명시적으로 금지한다.
이중 반투명은 가독성을 해치고 시각적 혼란을 유발한다.

**허용**:
```
[불투명 배경] → [반투명 그라데이션] → [불투명 카드]
```

**금지**:
```
[반투명 표면] → [반투명 카드] → [반투명 뱃지]  ← 3중 겹침
```

### 3.5 머티리얼 적용 현황

| 컴포넌트 | 머티리얼 두께 | 구현 |
|----------|-------------|------|
| 섹션 배경 그라데이션 | Ultra Thin (5~10%) | `from-{색}/5` ~ `from-{색}/8` |
| 전환 훅 필(pill) | Regular (50%) | `bg-card/50 border-border/50` |
| 카드 (Services, Insight) | Thick (100%) | `bg-card border-border` |
| CTA 섹션 glow | Ultra Thin (10%) | `bg-brand-purple/10 blur-[100px]` |
| Hero 모바일 오버레이 | 그라데이션 | `from-background/90 via-background/50` |
| 비교 테이블 (Differentiators) | Thick | `bg-card` (래퍼) + `bg-primary/5` (셀 강조) |

### 3.6 향후 확장 가이드

`backdrop-filter: blur()`를 사용하는 새 컴포넌트 추가 시:

1. **성능**: `backdrop-blur`는 GPU 가속 필요. 모바일에서 과도한 사용 자제
2. **폴백**: `@supports not (backdrop-filter: blur())` 시 불투명 배경으로 대체
3. **대비**: 반투명 표면 위 텍스트는 어떤 배경 위에서도 WCAG AA 충족해야 함
4. **중첩 금지**: Glass-on-Glass 금지 원칙 준수

---

## 4. 타이포그래피 — SEO/GEO 최적화 시맨틱 계층

### 4.1 HTML 태그 규칙

| 레벨 | HTML 태그 | 페이지 당 사용 | Tailwind 크기 | 용도 |
|------|----------|--------------|--------------|------|
| H1 | `<h1>` | **1개만** | `text-4xl sm:text-5xl lg:text-6xl` | 페이지 주제 (Hero) |
| H2 | `<h2>` | 섹션 당 1개 | `text-3xl sm:text-4xl` | 섹션 제목 |
| H3 | `<h3>` | 섹션 내 서브 | `text-xl` ~ `text-2xl` | 카드 제목, 스텝 제목 |
| H4 | `<h4>` | 선택적 | `text-xs uppercase tracking-wider` | 라벨 (예: "핵심 작업") |
| P | `<p>` | 자유 | `text-base` / `text-sm` | 본문, 설명 |

**SEO 핵심**: H1 → H2 → H3 → H4 순서를 건너뛰지 않는다. H1 다음에 H3가 바로 오지 않도록 한다.

**GEO 핵심**: 각 섹션의 H2가 해당 섹션의 핵심 메시지를 담아야 AI가 구조를 파악할 수 있다.

### 4.2 현재 태그 사용 현황

| 태그 | 사용 위치 | 상태 |
|------|----------|------|
| `<h1>` | Hero.tsx — 1회 | 정상 |
| `<h2>` | 각 섹션(Reality, Insight, Services, Process, Differentiators, FAQ, FinalCTA) — 각 1회 | 정상 |
| `<h3>` | Services 카드 제목, Process 스텝 제목 | 정상 |
| `<h4>` | Services "핵심 작업" 라벨, Process "당신이 받는 것" 라벨 | 정상 |

### 4.3 폰트 설정

| 용도 | 폰트 | CSS 변수 | 설정 |
|------|------|----------|------|
| 본문 | Pretendard Variable | `--font-pretendard` | weight 100-900, `font-sans` |
| 기술 용어 | Geist Mono | `--font-geist-mono` | `font-mono` |

- **Pretendard**: 한글 최적화 로컬 폰트. `src/fonts/PretendardVariable.woff2`
- **Geist Mono**: AEO, GEO, SEO 등 약어 및 코드에 사용
- **한글 줄바꿈**: 모든 제목/본문에 `break-keep` 적용 필수 (음절 단위 끊김 방지)

### 4.4 행간 + 자간

| 용도 | leading | tracking |
|------|---------|----------|
| H1 | `leading-tight` (1.25) | `tracking-tight` (-0.025em) |
| H2 | `leading-tight` (1.25) | `tracking-tight` (-0.025em) |
| H3 | 기본 (1.5) | 기본 |
| Body | `leading-relaxed` (1.625) | 기본 |
| Label/Caption | 기본 (1.5) | `tracking-wider` (0.05em) |

---

## 5. 레이아웃

### 5.1 컨테이너 계층

| 용도 | max-width | 사용 섹션 |
|------|-----------|----------|
| 풀 레이아웃 | `max-w-7xl` | Hero (2열 그리드) |
| 표준 | `max-w-6xl` | Services, Insight, Header |
| 내로우 | `max-w-4xl` | Reality, Process, Differentiators |
| 포커스 | `max-w-3xl` | FAQ |
| 집중 | `max-w-2xl` | FinalCTA |

### 5.2 섹션 패딩

| 섹션 타입 | 패딩 |
|----------|------|
| 표준 섹션 | `py-24 px-6` (96px / 24px) |
| Hero | `min-h-screen px-6 lg:px-8` |
| 앵커 보정 | `scroll-mt-20` |

### 5.3 그리드 패턴

| 패턴 | Tailwind 클래스 | 사용 |
|------|----------------|------|
| 3열 카드 | `grid gap-8 md:grid-cols-3` | Services, Insight |
| 2열 Hero | `grid lg:grid-cols-2` | Hero |
| 2열 테이블 | `grid grid-cols-1 sm:grid-cols-2` | Differentiators |

---

## 6. 컴포넌트 패턴

### 6.1 섹션 래퍼 — 시각적 리듬

섹션은 A/B/C 타입이 교차 배치되어 시각적 리듬을 형성한다.

**A타입 — 강조 섹션** (Reality, Services, Differentiators)

```tsx
<section className="relative scroll-mt-20 py-24 px-6 border-y border-border/30">
  <div className="absolute inset-0 bg-gradient-to-{방향} from-{색}/8 via-transparent to-{색}/8" />
  <div className="relative mx-auto max-w-{크기}">
```

특징: `border-y border-border/30`으로 구분, 그라데이션 강도 `/8`

**B타입 — 일반 섹션** (Insight, Process, FAQ)

```tsx
<section className="relative scroll-mt-20 py-24 px-6">
  <div className="absolute inset-0 bg-gradient-to-{방향} from-{색}/5 via-transparent to-{색}/5" />
  <div className="relative mx-auto max-w-{크기}">
```

특징: 보더 없음, 그라데이션 강도 `/5`

**C타입 — CTA 섹션** (FinalCTA)

```tsx
<section className="relative py-24 px-6 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-space-blue/20 via-brand-purple/10 to-space-blue/20" />
  <div className="pointer-events-none absolute ... rounded-full bg-brand-purple/10 blur-[100px]" />
```

특징: 가장 강한 그라데이션 `/20`, blur glow 효과

**교차 배치 순서**: A(Reality) → B(Insight) → A(Services) → B(Process) → A(Differentiators) → B(FAQ) → C(FinalCTA)

### 6.2 카드

```tsx
<div className="rounded-xl border border-border bg-card p-8
  transition-all duration-300 hover:border-primary/50 hover:glow-blue">
```

- `rounded-xl`: 카드 모서리
- `border border-border`: 기본 보더 (white 10%)
- `bg-card`: 카드 배경 (`oklch(0.14 0.015 260)`)
- `hover:border-primary/50`: 호버 시 보더 강조
- `hover:glow-blue`: 호버 시 박스 섀도

### 6.3 전환 훅 (Open Loop)

각 섹션 하단에 위치. 다음 섹션으로의 스크롤을 유도한다.

```tsx
<div className="mt-12 flex justify-center">
  <div className="inline-flex items-center gap-2 rounded-full
    border border-border/50 bg-card/50 px-4 py-2">
    <div className="size-1.5 rounded-full bg-primary animate-pulse" />
    <p className="text-sm text-muted-foreground">{hook}</p>
  </div>
</div>
```

### 6.4 버튼

| 용도 | 설정 |
|------|------|
| CTA 대형 | `Button size="lg" className="text-lg px-8 py-6"` |
| 네비 소형 | `Button size="sm"` |
| 외부 링크 | `target="_blank" rel="noopener noreferrer"` |

### 6.5 리스트 스타일

**점 리스트**:
```tsx
<li className="flex items-start gap-2 text-sm text-muted-foreground">
  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
  {item}
</li>
```

**체크 리스트**:
```tsx
<li className="flex items-start gap-3 text-sm">
  <svg viewBox="0 0 20 20" fill="currentColor"
    className="mt-0.5 size-5 shrink-0 text-primary">
    {/* checkmark path */}
  </svg>
  <span className="text-left text-muted-foreground">{item}</span>
</li>
```

---

## 7. 접근성 / 성능

### 7.1 색상 대비
- WCAG AA 충족: foreground(0.95) vs background(0.10)
- 보조 텍스트(`muted-foreground` 0.65)도 충분한 명도차 확보

### 7.2 반투명 표면의 대비 (Apple HIG Materials 기반)

Apple HIG는 반투명 머티리얼 위에서 가변적 대비 비율(variable contrast ratio)이
발생하는 것을 경고한다. 배경이 바뀌면 같은 텍스트도 읽기 어려워질 수 있다.

**ABEL AI 대응**:
- 텍스트가 포함된 표면은 반드시 `bg-card`(불투명) 사용
- 반투명 표면(`bg-card/50`)에는 짧은 보조 텍스트만 허용 (전환 훅 등)
- 반투명 위 텍스트는 `text-muted-foreground`(0.65) 이상 명도 사용
- `backdrop-blur` 적용 시 불투명 폴백 제공: `@supports not (backdrop-filter: blur()) { background: var(--card); }`

### 7.3 사용자 제어 존중 (Reduce Transparency)

Apple HIG는 사용자가 투명도를 줄이는 접근성 설정을 존중할 것을 요구한다.

```css
@media (prefers-reduced-transparency: reduce) {
  /* 반투명 표면을 불투명으로 대체 */
  /* bg-card/50 → bg-card */
  /* 그라데이션 투명도 강화 */
}
```

향후 이 미디어 쿼리 지원이 확산되면 적용한다.
현재는 불투명 카드 중심 설계로 기본적인 호환성을 확보한 상태.

### 7.4 포커스 상태
- `outline-ring/50`: 전역 포커스 링 스타일 (`globals.css` base 레이어)

### 7.5 모션 제어

```css
@media (prefers-reduced-motion: reduce) {
  /* animate-pulse, transition 비활성화 */
}
```

전환 훅의 `animate-pulse`와 카드의 `transition-all`은 이 설정을 존중해야 한다.

### 7.6 3D 씬 (Hero)
- `poster` 속성 필수
- 모바일: 저해상도 + 그라데이션 오버레이 (`from-background/90 via-background/50 to-transparent`)
- `prefers-reduced-motion: reduce` 시 정적 이미지로 대체 권장

### 7.7 한글 접근성
- `break-keep`: 음절 끊김 방지, 모든 한글 제목에 적용

---

## 8. 금지 사항

- 느낌표(!) 사용 금지
- 라이트 모드 스타일 정의 금지
- 하드코딩 컬러값 금지 (CSS 변수 또는 Tailwind 유틸리티만 사용)
- H1 태그 2회 이상 사용 금지
- H 레벨 건너뛰기 금지 (H1 → H3 금지, 반드시 H2를 거쳐야 함)
- `break-keep` 없이 한글 제목 작성 금지
- 보색(Amber)을 배경색이나 대면적 요소에 사용 금지
- Glass-on-Glass 금지 (반투명 표면 위에 반투명 표면 중첩 금지)
- 반투명 표면 위에 본문 텍스트 배치 금지 (짧은 보조 텍스트만 허용)
- `backdrop-blur` 불투명 폴백 없이 단독 사용 금지

---

## 참조 파일

| 파일 | 역할 |
|------|------|
| `src/app/globals.css` | 컬러 토큰 원본 |
| `src/app/layout.tsx` | 폰트 설정 |
| `components.json` | shadcn/ui (new-york, lucide) |
| `docs/brief.md` | "bold, aggressive, minimal clutter" |
| `docs/hero_3d_spec.md` | HEX 컬러 참조, 3D 스펙 |
| `docs/hero_layout_uicore.md` | 타이포 스케일 (H1: 54-66px) |
| `docs/persuasion_structure_v2.md` | 톤 가이드 ("시니어 컨설턴트") |
| [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials) | 머티리얼, 깊이, 바이브런시 원칙 |
