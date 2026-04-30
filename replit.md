# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### `artifacts/studio` — Pulse & Frame
Premium dark/cinematic portfolio website for a US audio-visual creative studio (jingles, soundtracks, commercial audio, video/3D).

**Theme**: bg `#050505`, accent neon red `#ff2a2a`, Orbitron/Sora display + Inter body.

**Stack**: React + Vite + Tailwind v4 + Framer Motion + Lenis (smooth scroll) + shadcn/ui + wouter.

**Sections**: Navbar, Hero, Services (4 cards w/ desktop-only 3D tilt), Portfolio (6 user-supplied YouTube embeds), About, Process (3-step), Contact, Footer.

**Responsive system** (mobile-first, sm 640 / md 768 / lg 1024 / xl 1280):
- Section vertical padding: `py-20 sm:py-24 md:py-28 lg:py-32`
- Container horizontal padding: `px-5 sm:px-6 md:px-12`
- Section heading: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
- Hero headline: `text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl`
- Body copy: min 16px (`text-base sm:text-lg`)
- Grids: Services `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`; Portfolio `1 sm:2 lg:3`; Process `1 lg:3` (with desktop-only connecting line); About + Contact `1 lg:2`
- Touch targets: 44–56px min on Navbar links, mobile menu items, footer social icons, submit button
- Hover-only effects (3D tilt, image grayscale flip) gated to non-touch devices
- Global `html, body { overflow-x: hidden }` to prevent horizontal scroll
