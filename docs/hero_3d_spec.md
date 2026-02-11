# 3D 히어로 영상 제작 스펙 (v1)

## 목표
- “답변 생성” 메타포: 에이전트 노드가 연결 → 분해 → 재구성.
- 강한 인상, 과한 산만함은 피함.
- 카피 가독성을 최우선(텍스트 없는 영상).

## 기본 사양
- 길이: 6–8초
- 루프: 시작/끝 프레임 동일(컷 티 없음)
- FPS: 24 또는 30
- 해상도: 1920x1080 (필수), 1080x1920 (옵션)
- 파일: WebM(VP9) + MP4(H.264) + Poster(WebP/JPG)
- 용량 목표: WebM 3–5MB, MP4 6–8MB

## 비주얼 콘셉트
- 요소: 발광 노드(점) + 얇은 연결선
- 움직임: 느린 회전/드리프트, 파형처럼 재배열
- 질감: 소프트 글로우, 살짝 블룸
- 배경: Rich Black 기반 그라데이션
- 복잡도: 중간 이하 (카피 방해 금지)

## 컬러(제안)
- Space Blue: #0B1F3A
- Purple: #6A3DF0
- Rich Black: #0A0E13
- 포인트 글로우: #8AB0FF (선택)

## 카피 가독성 규칙
- 중앙 40% 영역 밝기 최소화
- 밝은 요소가 카피 뒤로 겹치지 않게 배치
- 텍스트/로고 삽입 금지

## 출력 및 웹 적용
- <video> 태그: autoplay, muted, loop, playsinline
- preload="metadata" 권장
- poster 반드시 지정
- 모바일은 저해상도 버전 제공 권장

## AI 제작용 프롬프트(영문 예시)
- Prompt:
  "Abstract 3D network of glowing nodes and thin connections, space blue and purple on rich black background, cinematic soft glow, slow rotation, minimal motion, clean composition, no text, 6-8s seamless loop, shallow depth of field."
- Negative:
  "text, logo, people, city, clutter, fast motion, hard cuts"

## 체크리스트
- 루프 이음새 자연스러운가?
- 카피 가독성 충분한가?
- 모바일에서 과부하 없는가?
