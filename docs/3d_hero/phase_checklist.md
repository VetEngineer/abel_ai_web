# H3D–01 Search Universe 개발 Phase & 체크리스트 (v0.1 → v1.0)

목표

* SEO/AEO/GEO를 “하나의 시스템”으로 직관적으로 보여주는 인터랙티브 3D HERO를 제작한다.
* 인터랙션은 Drag(회전) + Hover(확대/툴팁) + Click(모드 토글) 3종으로 완결한다.
* 모바일/저사양/로딩 실패에 대비해 폴백(webm 루프 + 포스터)을 필수로 제공한다.
* 3D는 장식 요소로 취급하고, 핵심 메시지(H1/요약/CTA)는 DOM에 별도로 존재해야 한다(SEO/AEO/접근성).

---

Milestones (권장)

* M0: 스펙 확정 + 통합 방식 결정(Embed vs GLB)
* M1: Spline 씬 v0.1 완성(Idle/Hover/Drag/Mode 1–3 동작)
* M2: Export/폴백 자산 준비(webm + poster)
* M3: 웹 통합 v0.1(모드 토글, 폴백 분기, DOM 텍스트/aria 포함)
* M4: 퍼포먼스/접근성 게이트 통과 → v1.0 후보
* M5: QA + 배포 + 운영 로그(개선 백로그)

---

Phase 0 — 스펙 고정 & 작업 환경 세팅 (M0)

0.1 스펙 고정

* [ ] 컨셉: H3D–01 Search Universe로 확정
* [ ] 오브제 예산: 메인 1 + 서브 10–25(노드 12개 권장)
* [ ] 인터랙션 범위: Drag/Hover/Click은 필수, Scroll 내러티브는 옵션
* [ ] 모드 정의: SEO/AEO/GEO 모드 전환 시 Active/Inactive 대비가 “형태 변화”로 읽혀야 함
* [ ] 툴팁 1줄 문구(EN) 확정(SEO/AEO/GEO)
* [ ] Hero 카피 3종 중 “기본 1종” 선택(나머지 2종은 보관)
* [ ] DOM 텍스트 필수(3D 로딩과 무관하게 즉시 렌더)

0.2 통합 방식 결정(둘 중 1개)
A안: Spline Web Embed (권장 v0.1)

* 장점: 빠른 구현, 수정 속도 빠름
* 리스크: 런타임/로드 제어 제한, 외부 의존

B안: GLB export + three.js

* 장점: 완전 제어, 성능 최적화/LOD/로더 제어 용이

* 리스크: 개발량 증가, 초기 셋업 비용↑

* [ ] A/B 중 1개 선택

* [ ] 선택 근거를 Decision Log에 기록(나중에 회귀 방지)

0.3 폴더/파일 구조 생성(드라이브)

* [ ] /hero-3d/H3D–01_search-universe/

  * [ ] /spline
  * [ ] /exports
  * [ ] /textures
  * [ ] /ui
  * [ ] /copy
  * [ ] /notes
* [ ] 파일명 규칙 적용(예: H3D–01_SearchUniverse_v0.1.*)

Exit Criteria (Phase 0)

* 통합 방식이 결정되었고, 스펙/카피/툴팁/폴백 정책이 문서로 고정되어 있다.

---

Phase 1 — Spline 씬 제작 v0.1 (M1)

1.1 씬 구조(레이어/그룹) 세팅

* [ ] 00_GUIDES (Hidden)
* [ ] 01_CORE
* [ ] 02_RING_SEO
* [ ] 03_RING_AEO
* [ ] 04_RING_GEO
* [ ] 05_PARTICLES (옵션)
* [ ] 06_UI_LABELS (옵션)

1.2 오브제 구성
CORE

* [ ] Core_Base (Sphere 또는 Icosahedron)
* [ ] Core_Glow (emissive 오버레이, 약간 크게)
* [ ] Core_Halo (얇은 후광 링)

RINGS

* [ ] Ring_SEO (단일 토러스)
* [ ] Ring_AEO (단일 토러스)
* [ ] Ring_GEO (단일 토러스)

NODES (총 12개 권장)

* [ ] SEO_Node_01~04
* [ ] AEO_Node_01~04
* [ ] GEO_Node_01~04
* [ ] 노드는 동일 메쉬 복제/인스턴싱(아이콘 디테일은 메시로 만들지 않는다)

HIT AREA (클릭 안정성)

* [ ] Mode_Hit_SEO / Mode_Hit_AEO / Mode_Hit_GEO (투명 히트박스)

CAMERA/LIGHT

* [ ] Camera_Main (FOV 과도하게 넓지 않게)
* [ ] Light_Key / Light_Fill / Light_Rim (3점 조명)

1.3 머티리얼/룩

* [ ] Core_Base: 메탈릭/글로시 + 약한 그라데이션
* [ ] Core_Glow: emissive(강도 과하지 않게), 색상 1개로 통일
* [ ] Rings: 반투명 + 얇은 발광 라인 느낌
* [ ] Nodes: 링과 대비, 모드 활성에서만 채도/발광 상승
* [ ] 배경: 아주 어두운 그라데이션(완전 블랙 지양)

1.4 인터랙션 구현(상태별)
IDLE

* [ ] 코어: 6–10초 주기의 미세 회전 + 약한 부유
* [ ] 링: 느린 공전(각 링 속도 다르게)
* [ ] 라벨/툴팁: 기본 숨김(또는 매우 은은)

HOVER

* [ ] 노드 Scale 1.12–1.18
* [ ] 해당 링 밝기 소폭 상승
* [ ] 1줄 툴팁 표시(깜빡임 없게)

DRAG

* [ ] 전체 Hero_Group 회전
* [ ] 관성/댐핑 적용(손 떼면 자연 감속)
* [ ] 피치 제한(상하 과도 회전 방지)
* [ ] 드래그 중 툴팁 숨김 또는 고정(산만함 방지)

MODE TOGGLE (250–400ms)

* [ ] Active 링: Z+ 이동(5–10%) + 발광 상승
* [ ] Inactive 링: 밝기/채도 30–50% 다운 + Z- 이동
* [ ] Active 노드: 간격 확장(구성 요소가 읽히게)
* [ ] GEO에서만 Particle_Tokens 강조(옵션)

Exit Criteria (Phase 1)

* Spline에서 Idle/Hover/Drag/Mode(SEO/AEO/GEO) 동작이 모두 확인된다.
* 모드 전환이 텍스트 없이도 “활성/비활성” 대비로 읽힌다.
* 오브제 수가 예산 범위(10–25) 내에 있다.

---

Phase 2 — Export & 폴백 자산 제작 v0.1 (M2)

2.1 내보내기(통합 방식별)
A안(Embed)

* [ ] Spline Publish/Scene URL 확보
* [ ] 모드 전환 트리거 방식 확인(씬 내부 클릭만 vs 외부 버튼 연동 가능)

B안(GLB + three.js)

* [ ] GLB export 1차
* [ ] 텍스처 최소화(가능하면 무텍스처)
* [ ] glb 로딩/재질/조명 재현성 체크

2.2 폴백 자산(필수)

* [ ] webm 루프(4–6초) 생성(반복 티 최소)
* [ ] 정적 포스터 1장 생성(webp 권장)
* [ ] reduced motion 대응 버전(정적 또는 저모션)

Exit Criteria (Phase 2)

* “3D 실패/로딩 지연” 상황에서도 폴백으로 시각이 보장된다.
* 산출물 파일이 exports 폴더에 정리되어 있다.

---

Phase 3 — 웹 통합 v0.1 (M3)

3.1 Hero 섹션 구조

* [ ] 3D 영역(Embed/Canvas)
* [ ] DOM 텍스트(H1/요약/CTA) 영역
* [ ] 모드 버튼 UI(SEO/AEO/GEO) 또는 씬 내 클릭 UX 확정

3.2 DOM 텍스트(필수)

* [ ] H1: “SEO × AEO × GEO, One System.”
* [ ] 요약 1–2줄(크롤/정답/생성 인용 통합 최적화)
* [ ] CTA 2개(Primary/Secondary)

3.3 접근성(필수)

* [ ] 3D 영역 aria-label 적용
* [ ] 모드 버튼 aria-label 적용(“SEO 모드로 전환” 등)
* [ ] 키보드 포커스 흐름 확인(CTA/모드 버튼 접근 가능)

3.4 로딩/폴백 분기(필수)

* [ ] 첫 페인트: 폴백(포스터 또는 짧은 루프) 먼저 표시
* [ ] 3D 준비 완료 시 교체(점진 로딩)
* [ ] 모바일/저사양: 기본은 폴백, 옵션으로 3D 허용 가능
* [ ] prefers-reduced-motion: 폴백/저모션 강제

Exit Criteria (Phase 3)

* 텍스트(H1/요약/CTA)가 3D 로딩과 무관하게 즉시 렌더된다.
* 모드 전환이 UX로 작동한다(버튼 또는 씬 클릭).
* 모바일에서 폴백이 기본적으로 안정적이다.

---

Phase 4 — 퍼포먼스 & 품질 게이트 (v1.0 후보) (M4)

4.1 퍼포먼스 제약 준수

* [ ] 오브제 수 예산 유지(증식 금지)
* [ ] 파티클은 모바일 OFF 또는 극저수량
* [ ] 텍스처는 0–1장(최대 1024) 원칙 유지
* [ ] 초기 로딩 중 레이아웃 흔들림(CLS) 최소화

4.2 UX 품질

* [ ] 드래그 조작이 과민하지 않다(관성/감속 자연)
* [ ] 툴팁 깜빡임이 없다(hover/drag 충돌 방지)
* [ ] 모드 전환 250–400ms(느려서 답답하지 않게)

4.3 실패 시나리오

* [ ] 3D 로딩 실패 → 자동 폴백 유지
* [ ] 3D 로딩 지연 → 폴백이 계속 보인다(깨진 화면 없음)

Exit Criteria (Phase 4)

* “멋있지만 느린 Hero”가 아닌, “빠르고 안정적인 Hero”로 동작한다.
* reduced motion/모바일/실패 케이스를 모두 커버한다.

---

Phase 5 — QA / 배포 / 운영 (M5)

5.1 크로스 브라우저/디바이스 QA

* [ ] Desktop: Chrome, Safari
* [ ] Mobile: iOS Safari, Android Chrome
* [ ] 저속 네트워크 시뮬에서 폴백 우선 노출 확인
* [ ] 키보드 탭 이동/포커스 스타일 확인

5.2 릴리즈/버전 로그

* [ ] v1.0 릴리즈 태깅(내부 기준)
* [ ] /notes/H3D–01_changelog.txt 업데이트(변경점/이슈/결정 기록)

5.3 개선 백로그(다음 v1.x)

* [ ] Scroll 내러티브 추가(선택)
* [ ] GEO 모드 토큰 스트림 최소 적용(선택)
* [ ] 모드별 카피 자동 스위칭(선택)
* [ ] LOD/더 강한 성능 최적화(three.js 전환 고려)

---

산출물 체크(최소 세트)

* /spline/H3D–01_SearchUniverse_v0.1.spline
* /exports/H3D–01_SearchUniverse_v0.1.webm
* /exports/H3D–01_SearchUniverse_v0.1_poster.webp
* /copy/H3D–01_copy_v0.1.txt
* /notes/H3D–01_changelog.txt
* (필요 시) /exports/H3D–01_SearchUniverse_v0.1.glb

끝.
