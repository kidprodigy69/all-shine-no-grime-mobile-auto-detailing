'use client'

// CONVERSION INTENT: trust builder — social proof at scale, drives toward Schedule Service CTA

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Star } from 'lucide-react'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const reviews = [
  {
    name: 'Matt Connor',
    quote:
      '10 STARS! Wonderful service. Chris set up my appointment and got all the details ironed out. Josh came out to my business park for a "Deluxe shine" package on my Gotland green S4. He went above and beyond.',
  },
  {
    name: 'AKarpenter47',
    quote:
      "Very good detailing job done by Josh! My nugget hasn't been cleaned in quite a long time, and recently, rain water got inside of the interior and was causing mold to start growing and my seats to black.",
  },
  {
    name: 'Alys Kuchenbrod',
    quote:
      'My SUV is 6 years old and gets very dirty sometimes. I am in the property management business and am also sometimes involved with real estate renovations and staging. It is usually parked in the garage.',
  },
  {
    name: 'Ashley D',
    quote:
      'Josh came out to service my car. He did an incredible job with the express shine on a mid sized vehicle! His attention to detail and thoroughness was greatly appreciated! My car looks brand new. Thanks.',
  },
  {
    name: 'Ann Marie Gebel',
    quote:
      'Had the greatest experience with Josh today. Came to my office and worked his butt off making my SUV look brand new again. The attention to detail that I never would of thought of, he did and the results.',
  },
]

export default function ReviewsPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6"
        style={{ background: 'var(--color-dark)' }}
        aria-label="Reviews page header"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            Real Customers · Real Google Reviews
          </motion.p>
          <div className="overflow-visible">
            <motion.h1
              className="font-bold text-white leading-tight pb-2"
              style={{ fontFamily: 'var(--font-teko)', fontSize: 'clamp(3rem, 8vw, 6rem)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              What Charlotte Is Saying
            </motion.h1>
          </div>
          <motion.div
            className="flex flex-col items-center gap-2 mt-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div
              className="font-bold leading-none"
              style={{ fontFamily: 'var(--font-teko)', fontSize: 'clamp(3rem, 7vw, 5rem)', color: 'var(--color-accent)' }}
            >
              4.9
            </div>
            <div className="flex gap-1 text-yellow-400" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <p className="text-white/55 text-sm" style={{ fontFamily: 'var(--font-fira-sans)' }}>
              Across 241+ Google Reviews
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS GRID ── */}
      {/* CONVERSION INTENT: trust at scale — quantity + specificity of real reviews */}
      <section
        className="py-16 md:py-24 px-4 md:px-6"
        style={{ background: 'var(--color-background)' }}
        aria-label="Customer reviews"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06}>
                <div
                  className="h-full p-6 md:p-7 rounded-2xl flex flex-col"
                  style={{ background: 'var(--color-primary)', border: '1px solid rgba(97,125,175,0.2)' }}
                >
                  <div className="flex gap-1 text-yellow-400 mb-4" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={14} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-fira-sans)' }}
                  >
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <p
                    className="mt-5 text-xs uppercase tracking-widest"
                    style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
                  >
                    — {r.name} · Google Review
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      {/* CONVERSION INTENT: direct conversion riding the momentum of social proof */}
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
              Join 241+ Happy Customers
            </p>
            <a
              href="tel:7049070623"
              className="group relative inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(97,125,175,0.4)]"
              style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            >
              <Phone size={16} aria-hidden="true" />
              Schedule Service · (704) 907-0623
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" aria-hidden="true" />
            </a>
            <p className="mt-5 text-white/35 text-xs" style={{ fontFamily: 'var(--font-fira-sans)' }}>
              Mon–Fri · 7:00 AM – 5:00 PM · Charlotte NC Metro
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
