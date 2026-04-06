'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return p + Math.random() * 12;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const letters = 'SWARNA JESWANTH'.split('');

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg overflow-hidden"
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-bg opacity-40" />

          {/* Radial gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-cyan-glow/5 via-transparent to-transparent" />

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-glow/40" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-glow/40" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-glow/40" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-glow/40" />

          {/* Logo / Initials */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'backOut' }}
            className="relative mb-12"
          >
            <div className="w-24 h-24 rounded-2xl border-glow-cyan flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-radial from-cyan-glow/10 to-transparent" />
              <span
                className="text-4xl font-bold gradient-text"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                SJ
              </span>
            </div>
            {/* Orbiting dot */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-cyan-glow"
              style={{
                top: '50%',
                left: '50%',
                boxShadow: '0 0 10px #00D4FF',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              // Use transformOrigin trick
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-cyan-glow"
                animate={{ x: 54, y: -54 }}
                style={{ position: 'absolute' }}
              />
            </motion.div>
          </motion.div>

          {/* Name with staggered letter reveal */}
          <div className="flex gap-[2px] mb-2 overflow-hidden">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4 + i * 0.04,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                className={`text-xl font-bold tracking-widest ${
                  letter === ' ' ? 'w-3' : ''
                }`}
                style={{ fontFamily: 'Syne, sans-serif', color: '#E2E8F0' }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="section-tag mb-16"
          >
            Full Stack Developer
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="relative"
          >
            <div className="w-80 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full loader-bar rounded-full"
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <span
                className="text-xs text-text-muted"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Initializing...
              </span>
              <span
                className="text-xs text-cyan-glow"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </motion.div>

          {/* Status messages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex gap-6 flex-wrap justify-center"
          >
            {['Loading 3D assets', 'Compiling shaders', 'Setting up scene'].map((msg, i) => (
              <motion.span
                key={msg}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 0.5 + i * 0.8, duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
                className="text-xs text-text-muted flex items-center gap-2"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
                {msg}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
