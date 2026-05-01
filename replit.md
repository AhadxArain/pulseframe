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

**Architecture**: Multi-page SPA with wouter routing. Each route renders a single section inside `PageLayout`.

| Route | Page file | Section(s) |
|---|---|---|
| `/` | `Home.tsx` | Hero |
| `/services` | `ServicesPage.tsx` | Services |
| `/work` | `WorkPage.tsx` | Portfolio + TrustedBy + Testimonials |
| `/studio` | `StudioPage.tsx` | About |
| `/process` | `ProcessPage.tsx` | Process |
| `/contact` | `ContactPage.tsx` | Contact |

**PageLayout** (`components/layout/PageLayout.tsx`): shared wrapper for all pages — mounts Grain, Navbar, Footer, ChatLauncher, SmoothScroll, 0.3s fade-in `motion.main`, sets `document.title`, and calls `window.scrollTo(0)` on route change.

**Navbar**: route-based active state via `useLocation()` from wouter. Logo and all nav items use `<Link>` for SPA navigation. Mobile menu auto-closes on route change.

**Sections**: Navbar, Hero, Services (4 cards w/ desktop-only 3D tilt), Portfolio (6 user-supplied YouTube embeds), TrustedBy (infinite marquee), Testimonials (3 cards), About, Process (3-step), Contact, Footer.

**Chat widget** (HubSpot/Intercom-style, static UI only — no backend):
- Lives in `src/components/chat/`: `ChatLauncher` (state owner), `ChatWindow` (panel + view router), `ChatHome`, `ChatHistory`, `ChatConversation`
- Mounted in `Home.tsx` after `<Footer />`
- Floating launcher: 60px desktop / 52px mobile, `bottom-6 right-6`, neon red glow shadow, one-time double-ping pulse on load (2.4s), morphs to X icon when open
- Desktop: floating panel 380×560 anchored bottom-right with rounded-2xl + shadow + red corner glow
- Mobile: full-screen `inset-0` (launcher hidden when open since panel has its own close X)
- Three views with AnimatePresence slide transitions: Home (CTAs + studio hours), History (4 static threads w/ unread indicator), Conversation (EchoFrame Assistant w/ bot+user bubbles, working local input, send button)
- Escape key closes panel; safe-area-inset padding on mobile

**Motion system** (Awwwards-level cinematic feel):
- Shared easings/variants in `src/lib/motion.ts` (`easeExpo`, `fadeUp`, `staggerParentSlow`, `wordRise`)
- Hero: animated aurora gradients (`aurora-drift` keyframes), word-by-word stagger headline reveal, parallax background + content
- Signature audio touches: `Waveform` component (animated bars), used in Hero badge — `keyframes waveform-bar`
- Cinematic film grain via `Grain` component (SVG noise + mix-blend-overlay)
- Section transitions: `SectionDivider` component with sweeping gradient line
- Micro-interactions: `.btn-magnetic` utility (scale 1.03 + glow on hover, pointer:fine only) + `.btn-shimmer` light sweep
- Service cards: 3D tilt + cursor-following radial light spot + top accent line on hover
- Portfolio cards: 1.08 zoom, crimson radial wash, pulsing play ring (`.pulse-ring`), corner index badge, "Watch Reel" reveal
- Navbar: scroll-spy active link tracking via IntersectionObserver, accent dot per active item, stronger backdrop blur on scroll
- All hover/3D effects gated behind `(hover: hover) and (pointer: fine)` and `prefers-reduced-motion: reduce` honored globally

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
