# CLAUDE.md — abel_ai_web

## Project Overview

**Abel AI** 랜딩페이지. Next.js + Three.js 기반 인터랙티브 3D LP.
AI 브랜딩/마케팅 서비스 소개용 단일 페이지 앱. Vercel 배포.

## Commands

```bash
pnpm dev          # 개발 서버 (Next.js)
pnpm build        # 프로덕션 빌드
pnpm start        # 프로덕션 서버
pnpm lint         # ESLint
```

## Tech Stack

- **Framework**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui (components.json)
- **3D**: Three.js (인터랙티브 배경)
- **Font**: Pretendard
- **Deploy**: Vercel (`vercel.json` 설정 있음)
- **Package**: pnpm + pnpm-workspace.yaml

## Architecture

```
src/
  app/            # Next.js App Router
  components/
    sections/     # Hero, Differentiators, Credibility, Process 등 LP 섹션
    ui/           # shadcn/ui 컴포넌트
  constants/
    content.ts    # 모든 텍스트/카피 중앙 관리
  lib/            # 유틸리티
public/           # 정적 에셋
docs/             # 기획 문서
```

## Conventions

- **텍스트는 `content.ts` 에서만** 수정. 컴포넌트에 하드코딩 금지.
- 섹션 컴포넌트는 `src/components/sections/` 에 위치
- PLAN.md 에 레이아웃 변경 계획 기록되어 있음 — 작업 전 확인
- SEO_STRATEGY.md 참고해 메타데이터/OG 관리

## Known Issues / Gotchas

- Three.js 3D 장면은 `Hero.tsx` 에 위치, SSR 비호환 주의 (`'use client'` 필수)
- `pnpm-workspace.yaml` 있으나 실제 monorepo 아님 — 단일 앱
- `PLAN.md` 에 미완료 레이아웃 조정 항목 있음 (Differentiators 제거 등)
- `abel_ai_web/docs/` 내 기획서 변경 전 확인

## Deploy

```bash
# Vercel CLI
vercel --prod
```

vercel.json 설정으로 자동 라우팅 처리됨.

## 컨텍스트 관리

sub-agent를 최대한 활용해서 컨텍스트를 평균 40%, 최대 60%를 넘지 않도록 관리한다.
