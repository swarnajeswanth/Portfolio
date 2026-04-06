# 🚀 Swarna Jeswanth — Portfolio | Part 1: Foundation & Ambient UI

> **Commit message for this push:**
> ```
> feat: project foundation — configs, global styles, ambient UI layer
>
> Sets up the full Next.js 14 (App Router) project base including Tailwind CSS,
> Three.js / React Three Fiber transpile config, global CSS design system,
> and the four ambient UI components that persist across all sections:
> LoadingScreen, CustomCursor, ScanLine, ScrollProgress.
> The page.js is a functional stub showing a build-progress roadmap.
> ```

---

## ✅ What's in this commit (Part 1 / 5)

### ⚙️ Config & Tooling
| File | Purpose |
|---|---|
| `package.json` | All dependencies: Next.js 14, React Three Fiber, Three.js, Framer Motion, GSAP, Tailwind CSS |
| `next.config.mjs` | Transpile config for `three`, `@react-three/fiber`, `@react-three/drei` |
| `tailwind.config.js` | Custom design tokens — colors (cyan, violet, amber), font families, animations, shadows |
| `postcss.config.js` | Tailwind + Autoprefixer |
| `vercel.json` | Vercel deployment config (region: bom1) |
| `netlify.toml` | Netlify deployment config with Next.js plugin |
| `.gitignore` | Standard Next.js ignores |

### 🎨 Design System (`app/globals.css`)
The entire visual language lives here as CSS custom properties:
- **Fonts**: Syne (display) · JetBrains Mono (code) · DM Sans (body) — loaded from Google Fonts
- **Colors**: `--cyan: #00D4FF` · `--violet: #A855F7` · `--amber: #F59E0B` · `--bg: #030712`
- **Utilities**: `.glass`, `.glass-strong`, `.gradient-text`, `.neon-cyan`, `.neon-violet`, `.grid-bg`, `.skill-pill`, `.tech-badge`, `.border-glow-cyan`, `.border-glow-violet`
- **Animations**: `float`, `glow`, `shimmer`, `scanLine`, `pulse-node`, `borderRotate`, `orbit`
- **Custom cursor**: CSS class rules for `.custom-cursor` and `.custom-cursor-ring`

### 🏗️ App Shell (`app/layout.js`)
- Root layout with full SEO metadata (title, description, keywords, Open Graph)
- Google Fonts import wired through CSS
- Viewport config

### 🌀 Ambient UI Components (`components/`)

#### `LoadingScreen.jsx`
- Animated SJ initials badge with radial glow
- Letter-by-letter staggered reveal of "SWARNA JESWANTH" using Framer Motion
- Gradient progress bar with shimmer animation (0 → 100%)
- Status messages: "Loading 3D assets", "Compiling shaders", "Setting up scene"
- Animated exit (slides up, fades out after 2.8s)

#### `CustomCursor.jsx`
- Replaces default OS cursor (`cursor: none` on `*`)
- Small neon cyan dot that snaps to mouse position instantly
- Larger ring that follows with a smooth lag (lerp 12% per frame)
- On hover over links/buttons: dot shrinks, ring expands + turns violet
- Uses `requestAnimationFrame` for 60fps tracking

#### `ScanLine.jsx`
- A single `<div>` with a CSS animation that scrolls a translucent horizontal line top→bottom every 8s
- Gives a subtle retro CRT monitor ambience across the whole page

#### `ScrollProgress.jsx`
- Fixed top bar that fills left→right as the user scrolls
- Gradient: `cyan → violet → amber`
- Glow shadow on the filled portion

### 📄 Page Stub (`app/page.js`)
- Renders all 4 ambient components
- Shows SJ initials badge + name + role
- Build-progress roadmap chips showing Part 1 as ✓ done, Parts 2–5 as pending
- Grid background + corner frame decorations (from globals.css)
- **This file will be replaced in Part 5** with the full section wiring

---

## 🔜 Coming Next

| Part | Commit | Contents |
|---|---|---|
| **Part 2** | `feat: navbar + hero 3D scene` | Glassmorphism Navbar with mobile menu · Three.js Hero (star field, orbit rings, icosahedron core, OrbitControls) |
| **Part 3** | `feat: journey and projects sections` | 4-stage developer journey cards with mini 3D icons · 3D tilt project cards with mock browser previews |
| **Part 4** | `feat: skills orbit system and experience timeline` | 3D orbit visualization · animated skill bars · CountUp stats · experience timeline |
| **Part 5** | `feat: realtime zone, contact, final wiring` | Canvas 2D node network (Socket.io sim) · Contact form · footer · full page.js |

---

## 🚀 Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

> You'll see: Loading screen animation → SJ badge → name reveal → 5-part roadmap tracker.

---

## 🌐 Deploy

**Vercel**
```bash
npx vercel
```

**Netlify**
```bash
npm run build
netlify deploy --prod --dir=.next
```

---

## 📦 Tech Stack

```
Next.js 14 (App Router)     — Framework
React 18                    — UI
Three.js + R3F + Drei       — 3D (used from Part 2 onwards)
Framer Motion               — Animations
GSAP                        — Timeline animations (Part 3+)
Tailwind CSS                — Utility styles
Syne · JetBrains Mono       — Typography
```

---

*Part 1 of 5 — [Swarna Jeswanth](https://github.com/swarnajeswanth) · Full Stack Developer · Hyderabad, IN*
"# Portfolio" 
