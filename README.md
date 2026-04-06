#  Swarna Jeswanth — Portfolio |  Foundation & Ambient UI

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


### UI Components (`components/`)

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

###  Page Stub (`app/page.js`)
- Renders all 4 ambient components
- Shows SJ initials badge + name + role
- Build-progress roadmap chips showing Part 1 as ✓ done, Parts 2–5 as pending
- Grid background + corner frame decorations (from globals.css)
- **This file will be replaced in Part 5** with the full section wiring

---


##  Run Locally

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

##  Deploy

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

##  Tech Stack

```
Next.js 14 (App Router)     — Framework
React 18                    — UI
Three.js + R3F + Drei       — 3D (used from Part 2 onwards)
Framer Motion               — Animations
GSAP                        — Timeline animations (Part 3+)
Tailwind CSS                — Utility styles
Syne · JetBrains Mono       — Typography
```

 
