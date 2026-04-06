'use client';

/**
 * page.js — Part 1 (Foundation)
 *
 * ✅ Loaded in this commit:
 *   - LoadingScreen  (animated letter reveal + progress bar)
 *   - CustomCursor   (neon glowing dot + magnetic ring)
 *   - ScanLine       (ambient CRT scan line)
 *   - ScrollProgress (gradient top bar)
 *
 * 🔜 Coming in next commits:
 *   - Part 2: Navbar + Hero (Three.js 3D scene)
 *   - Part 3: Journey + Projects
 *   - Part 4: Skills + Experience
 *   - Part 5: RealtimeZone + Contact
 */

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Ambient UI — no SSR needed for animation-heavy components
const LoadingScreen  = dynamic(() => import('../components/LoadingScreen'),  { ssr: false });
const CustomCursor   = dynamic(() => import('../components/CustomCursor'),   { ssr: false });
const ScanLine       = dynamic(() => import('../components/ScanLine'),       { ssr: false });
const ScrollProgress = dynamic(() => import('../components/ScrollProgress'), { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Loading screen visible for ~2.8s while assets initialise
    const timer = setTimeout(() => setLoaded(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ── Ambient UI layer (always present) ─────────────── */}
      {!loaded && <LoadingScreen />}
      <CustomCursor />
      <ScanLine />
      <ScrollProgress />

      {/* ── Main content placeholder ──────────────────────── */}
      <main
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
        style={{ background: 'var(--bg)' }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        {/* Glow blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]
                     rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
          style={{ background: 'var(--cyan)' }}
        />

        {/* Corner frame decorations */}
        <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2"
             style={{ borderColor: 'rgba(0,212,255,0.35)' }} />
        <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2"
             style={{ borderColor: 'rgba(0,212,255,0.35)' }} />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2"
             style={{ borderColor: 'rgba(0,212,255,0.35)' }} />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2"
             style={{ borderColor: 'rgba(0,212,255,0.35)' }} />

        {/* Initials badge */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative"
          style={{
            border: '1px solid rgba(0,212,255,0.25)',
            background: 'rgba(0,212,255,0.05)',
            boxShadow: '0 0 30px rgba(0,212,255,0.15)',
          }}
        >
          <span
            className="text-3xl font-black gradient-text"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            SJ
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl font-black mb-3 leading-none"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          <span className="gradient-text">Swarna Jeswanth</span>
        </h1>

        {/* Role */}
        <p
          className="section-tag mb-8"
          style={{ letterSpacing: '0.25em' }}
        >
          Full Stack Developer
        </p>

        {/* Progress chips — roadmap for this repo */}
        <div className="flex flex-col items-center gap-3 max-w-sm w-full">
          {[
            { part: '01', label: 'Foundation & Ambient UI',   done: true  },
            { part: '02', label: 'Navbar + Hero (3D Scene)',  done: false },
            { part: '03', label: 'Journey + Projects',        done: false },
            { part: '04', label: 'Skills + Experience',       done: false },
            { part: '05', label: 'Realtime Zone + Contact',   done: false },
          ].map((item) => (
            <div
              key={item.part}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm"
              style={{
                background: item.done
                  ? 'rgba(0,212,255,0.08)'
                  : 'rgba(255,255,255,0.02)',
                border: `1px solid ${item.done ? 'rgba(0,212,255,0.3)' : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              <span
                className="text-xs w-6 text-right shrink-0"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  color: item.done ? 'var(--cyan)' : 'var(--text-muted, #475569)',
                }}
              >
                {item.part}
              </span>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  color: item.done ? '#E2E8F0' : '#475569',
                  flex: 1,
                  textAlign: 'left',
                }}
              >
                {item.label}
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-md shrink-0"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  background: item.done ? 'rgba(0,212,255,0.15)' : 'rgba(255,255,255,0.04)',
                  color: item.done ? 'var(--cyan)' : '#334155',
                  border: `1px solid ${item.done ? 'rgba(0,212,255,0.3)' : 'rgba(255,255,255,0.06)'}`,
                }}
              >
                {item.done ? '✓ done' : 'pending'}
              </span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="mt-12 text-xs"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            color: '#334155',
          }}
        >
          // Next.js 14 · React Three Fiber · Framer Motion · Tailwind CSS
        </p>
      </main>
    </>
  );
}
