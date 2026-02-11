# 3D 히어로 영상 AI 제작 프롬프트 세트 (v1)

## 목적
- 6–8초 루프, 중앙 텍스트 가독성 확보.
- 노드 네트워크가 “답변 생성”을 암시.
- 과한 움직임 없이 고급스럽고 집중된 영상.

## 권장 워크플로
1) Base 프롬프트로 3–5개 후보 생성
2) 최적 후보 선택 후 세부 프롬프트로 리파인
3) 루프 매칭(첫/끝 프레임 동일 느낌) 확인 후 출력

---

## 베이스 프롬프트 (Text-to-Video용)
"Abstract 3D network of glowing nodes and thin connections, space blue and purple on rich black background, cinematic soft glow, slow rotation, minimal motion, clean composition, no text, 6-8s seamless loop, shallow depth of field."

## 디테일 프롬프트 (강화 옵션)
- Composition: "keep the center darker, leave 40% safe zone"
- Motion: "slow drift, gentle rotation under 10 degrees"
- Style: "soft bloom, premium, minimal clutter"

## 네거티브 프롬프트
"text, logo, people, city, clutter, fast motion, hard cuts, flicker"

---

## 씬 기반 프롬프트(루프 최적)

### Scene 1 (0–2s)
"Nodes gradually appear and connect, soft glow increases, subtle camera push-in, minimal motion, clean background, no text."

### Scene 2 (2–5s)
"Network slowly reconfigures in a wave-like motion, thin lines stretch and relax, gentle rotation, center kept darker."

### Scene 3 (5–8s)
"Network stabilizes into balanced structure, soft pulsation of light, end frame matches start frame for seamless loop."

---

## Image-to-Video 워크플로(권장)
1) 스틸 이미지 먼저 생성 (중앙 어두운 안전영역 강조)
2) 그 이미지를 기준으로 영상 변환 (모션 낮게)
3) 루프 마무리 프레임을 초기 프레임과 유사하게 리파인

### 스틸 이미지 프롬프트
"Abstract 3D network of glowing nodes and thin connections, space blue and purple on rich black background, clean composition, center darker safe zone, premium minimal, no text."

### 영상 변환 프롬프트
"Add subtle drifting motion, soft glow pulsing, very slow rotation, seamless loop."

---

## 출력 스펙
- 길이: 6–8초
- FPS: 24 or 30
- 해상도: 1920x1080
- 포맷: WebM + MP4 + Poster

## 루프 체크리스트
- 첫/끝 프레임이 동일한 밝기/구성인가?
- 중앙 텍스트 영역이 충분히 어두운가?
- 움직임이 지나치게 빠르지 않은가?
