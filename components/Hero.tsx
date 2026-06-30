'use client'

// CONVERSION INTENT: Direct conversion — highest-visibility CTA above fold. Stat-first credibility (4.9★) before the ask.

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone } from 'lucide-react'

const h1Words = ["Charlotte's", 'Most', 'Thorough', 'Auto', 'Detailing']

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-dark)' }}
      aria-label="Hero section"
    >
      {/* Aurora Background blobs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            top: '10%',
            left: '20%',
            background: 'var(--color-accent)',
            filter: 'blur(130px)',
            animation: 'aurora-1 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[450px] h-[450px] rounded-full opacity-20"
          style={{
            bottom: '15%',
            right: '15%',
            background: '#4a6a9c',
            filter: 'blur(110px)',
            animation: 'aurora-2 25s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full opacity-15"
          style={{
            top: '60%',
            left: '55%',
            background: '#8fa3cf',
            filter: 'blur(90px)',
            animation: 'aurora-3 18s ease-in-out infinite',
          }}
        />
      </div>

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-36 max-w-5xl mx-auto">

        {/* Business name — small above stat */}
        <motion.p
          className="text-white/50 text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: 'var(--font-teko)' }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          All Shine No Grime · Mobile Auto Detailing · Charlotte NC
        </motion.p>

        {/* THE signature element: 4.9★ stat at massive size */}
        <motion.div
          className="mb-6 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-baseline justify-center gap-2">
            <span
              className="font-bold leading-none pb-1"
              style={{
                fontFamily: 'var(--font-teko)',
                fontSize: 'clamp(5rem, 19vw, 9rem)',
                color: 'var(--color-accent)',
                textShadow: '0 0 80px rgba(97, 125, 175, 0.45)',
              }}
            >
              4.9
            </span>
            <span
              className="leading-none"
              style={{
                fontFamily: 'var(--font-teko)',
                fontSize: 'clamp(3rem, 10vw, 5rem)',
                color: '#F5C842',
                textShadow: '0 0 40px rgba(245, 200, 66, 0.35)',
              }}
            >
              ★
            </span>
          </div>
          <p
            className="text-white/40 text-xs tracking-[0.25em] uppercase mt-1"
            style={{ fontFamily: 'var(--font-fira-sans)' }}
          >
            241 Google Reviews
          </p>
        </motion.div>

        {/* H1 — word stagger (21st.dev stagger pattern) */}
        <div className="overflow-visible mb-5">
          <h1
            className="text-white font-bold leading-tight pb-2"
            style={{
              fontFamily: 'var(--font-teko)',
              fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
            }}
          >
            {h1Words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.22em]"
                initial={{ opacity: 0, y: 55 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.42 + i * 0.09,
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subheadline — 12-20 words */}
        <motion.p
          className="text-white/65 text-base md:text-lg max-w-2xl mb-9 leading-relaxed"
          style={{ fontFamily: 'var(--font-fira-sans)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.55 }}
        >
          We come to your driveway, office, or parking lot — mobile detailing that fits your schedule, not the other way around.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center mb-9"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
        >
          {/* Primary CTA — pill shape with shimmer */}
          <a
            href="tel:7049070623"
            className="group relative flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(97,125,175,0.4)]"
            style={{
              background: 'var(--color-accent)',
              fontFamily: 'var(--font-fira-sans)',
              minHeight: '56px',
              minWidth: '200px',
            }}
          >
            <Phone size={18} aria-hidden="true" />
            Schedule Service
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700"
              aria-hidden="true"
            />
          </a>

          {/* Secondary CTA — text link */}
          <Link
            href="/services"
            className="text-white/60 hover:text-white transition-colors text-sm font-medium tracking-wide"
            style={{ fontFamily: 'var(--font-fira-sans)' }}
          >
            View Services →
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.div
          className="flex items-center gap-2 text-sm text-white/45"
          style={{ fontFamily: 'var(--font-fira-sans)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.5 }}
        >
          <span className="text-yellow-400 text-base" aria-hidden="true">⭐⭐⭐⭐⭐</span>
          <span>4.9 · 241 Google Reviews · Charlotte NC · Mon–Fri 7AM–5PM</span>
        </motion.div>
      </div>

      {/* Bottom stat bar — spans full width */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.4 }}
        aria-label="Key statistics"
      >
        <div
          className="grid grid-cols-3 w-full"
          style={{ background: 'var(--color-accent)' }}
        >
          {[
            { value: '4.9★', label: 'Average Rating' },
            { value: '241+', label: 'Google Reviews' },
            { value: 'Mobile', label: 'We Come to You' },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-4 text-white text-center"
              style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
            >
              <span
                className="font-bold text-xl md:text-2xl leading-tight"
                style={{ fontFamily: 'var(--font-teko)' }}
              >
                {stat.value}
              </span>
              <span
                className="text-[10px] uppercase tracking-widest opacity-70 mt-0.5"
                style={{ fontFamily: 'var(--font-fira-sans)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
