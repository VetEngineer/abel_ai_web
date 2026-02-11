# 3D 히어로 영상 장면/키프레임 프롬프트 (v1)

## 목표
- 중앙 텍스트 가독성 확보
- 에이전트 노드 네트워크가 "답변 생성" 과정을 암시
- 6–8초 루프, 느리고 고급스러운 움직임

## 씬 구성 (6–8초 루프)

### Scene 1 (0–2s) — 생성
- 중앙 주변에 작은 노드들이 점등되며 나타남
- 얇은 연결선이 서서히 생김
- 카메라는 매우 느린 줌인

### Scene 2 (2–5s) — 재배열
- 노드/라인이 파형처럼 재배치
- 전체 네트워크가 미세 회전
- 중앙 40% 영역은 밝기 낮게 유지

### Scene 3 (5–8s) — 안정화
- 네트워크가 균형 잡힌 구조로 정렬
- 빛이 부드럽게 맥동
- 마지막 프레임이 첫 프레임과 자연스럽게 일치

## 색/광 규칙
- 배경: Rich Black (#0A0E13)
- 주요 발광: Space Blue (#0B1F3A) + Purple (#6A3DF0)
- 포인트 글로우: #8AB0FF (선택)
- 중앙 텍스트 영역에 밝은 요소 집중 금지

## 카메라/모션
- 움직임: 느림(빠른 이동 금지)
- 회전: 전체 씬 5–10도 내
- DOF: 얕은 심도(과도한 블러 금지)

## AI 제작용 프롬프트 (영문)
### Base Prompt
"Abstract 3D network of glowing nodes and thin connections, space blue and purple on rich black background, cinematic soft glow, slow rotation, minimal motion, clean composition, no text, 6-8s seamless loop, shallow depth of field."

### Scene 1 Prompt
"Nodes gradually appear and connect, soft glow increases, subtle camera push-in, minimal motion, clean background, no text."

### Scene 2 Prompt
"Network slowly reconfigures in a wave-like motion, thin lines stretch and relax, gentle rotation, center kept darker."

### Scene 3 Prompt
"Network stabilizes into balanced structure, soft pulsation of light, end frame matches start frame for seamless loop."

### Negative Prompt
"text, logo, people, city, clutter, fast motion, hard cuts, flicker"

## 출력 체크리스트
- 루프 매끄러움 확인
- 중앙 가독성 확보
- 모바일 성능 저하 없는지 확인
