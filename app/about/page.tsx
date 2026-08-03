'use client'

// CONVERSION INTENT: trust builder — the story and differentiator behind the brand

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle } from 'lucide-react'

// Underline-draw reveal for H2 — distinct from homepage/services/gallery treatments
function UnderlineH2({
  text,
  className,
  style,
}: {
  text: string
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <div ref={ref} className="inline-block">
      <motion.h2
        className={className}
        style={style}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.h2>
      <motion.div
        className="h-0.5 mt-2"
        style={{ background: 'var(--color-accent)' }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}

function Reveal({
  children,
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const init =
    direction === 'left' ? { opacity: 0, x: -30 } : direction === 'right' ? { opacity: 0, x: 30 } : { opacity: 0, y: 28 }
  const anim = direction === 'left' || direction === 'right' ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
  return (
    <motion.div
      ref={ref}
      initial={init}
      animate={inView ? anim : init}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const values = [
  { title: 'Thorough', desc: 'Every panel, vent, and crevice gets attention — nothing is rushed or skipped.' },
  { title: 'Clean', desc: 'We leave your vehicle (and the spot we worked in) spotless, every single time.' },
  { title: 'Beautiful', desc: 'The goal is not just clean — it\'s a finish you\'re proud to drive around Charlotte.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6"
        style={{ background: 'var(--color-dark)' }}
        aria-label="About page header"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            About All Shine No Grime
          </motion.p>
          <div className="overflow-visible">
            <motion.h1
              className="font-bold text-white leading-tight pb-2"
              style={{ fontFamily: 'var(--font-teko)', fontSize: 'clamp(3rem, 8vw, 6rem)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Thorough, Clean, Beautiful
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── STORY + PHOTO ── */}
      {/* CONVERSION INTENT: trust builder — the story behind the rating */}
      <section
        className="py-16 md:py-24 px-4 md:px-6"
        style={{ background: 'var(--color-background)' }}
        aria-label="Our story"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal direction="left">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '460px' }}>
              <Image
                src="/scraped/google-6.jpg"
                alt="All Shine No Grime mobile detailing team at work in Charlotte NC"
                fill
                className="object-cover object-center"
              />
            </div>
          </Reveal>
          <div>
            <UnderlineH2
              text="Built on One Idea: Do It Right"
              className="font-bold leading-tight pb-1"
              style={{ fontFamily: 'var(--font-teko)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-primary)' }}
            />
            <Reveal delay={0.2}>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-fira-sans)' }}
              >
                All Shine No Grime started with a simple frustration: too many detailers cut corners, rush the
                job, or leave half the vehicle untouched. We built our business the opposite way — every job is
                thorough, every finish is clean, and every result is something you&apos;ll actually want to show
                off. We come to your home or office anywhere in the Charlotte metro, so a genuinely great detail
                fits into your day instead of taking it over. That approach is why we&apos;re rated 4.9★ across
                241+ Google reviews — one of the highest-rated mobile detailers in Charlotte.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="flex items-center gap-3 mt-8">
                <a
                  href="tel:7049070623"
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white overflow-hidden transition-transform duration-300 hover:scale-105"
                  style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
                >
                  <Phone size={16} aria-hidden="true" />
                  Schedule Service
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      {/* CONVERSION INTENT: differentiator — what "thorough, clean, beautiful" actually means */}
      <section
        className="py-16 md:py-24 px-4 md:px-6"
        style={{ background: 'var(--color-primary)' }}
        aria-label="Our values"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div
                  className="p-7 rounded-2xl h-full"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(97,125,175,0.2)' }}
                >
                  <CheckCircle size={28} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  <h3
                    className="font-bold mt-4 mb-2 leading-tight"
                    style={{ fontFamily: 'var(--font-teko)', fontSize: '1.8rem', color: 'white' }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-fira-sans)' }}
                  >
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      {/* CONVERSION INTENT: direct conversion */}
      <section
        className="py-16 md:py-20 px-4 md:px-6"
        style={{ background: 'var(--color-dark)' }}
        aria-label="Book a service"
      >
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p
              className="font-bold text-white mb-6 leading-tight pb-1"
              style={{ fontFamily: 'var(--font-teko)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              See the Difference for Yourself
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7049070623"
                className="group relative flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-white overflow-hidden transition-transform duration-300 hover:scale-105"
                style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
              >
                <Phone size={16} aria-hidden="true" />
                (704) 907-0623
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" aria-hidden="true" />
              </a>
              <Link
                href="/services"
                className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium border-2 overflow-hidden transition-colors duration-300"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', fontFamily: 'var(--font-fira-sans)' }}
              >
                <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/10" />
                <span className="relative z-10">View Services & Pricing →</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
