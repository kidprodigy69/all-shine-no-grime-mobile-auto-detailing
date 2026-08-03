'use client'

// CONVERSION INTENT: services page — show full offering with pricing, drive to Schedule Service CTA

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, CheckCircle } from 'lucide-react'

// Clip-path wipe reveal for H2 — different animation than homepage stagger
function ClipRevealH2({
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
    <div ref={ref} className="overflow-visible">
      <motion.h2
        className={className}
        style={style}
        initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
        animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.h2>
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

const services = [
  {
    name: 'Express Shine',
    tagline: 'Quick refresh. Professional results.',
    price: 'Starting from $79',
    duration: '~45 minutes',
    photo: '/scraped/google-1.jpg',
    includes: [
      'Hand wash & dry (exterior)',
      'Wheel & tire clean',
      'Window clean (exterior)',
      'Tire shine & dressing',
      'Door jamb wipe-down',
    ],
    ideal: 'Regular maintenance — keep your car looking sharp between full details.',
  },
  {
    name: 'Deluxe Shine',
    tagline: 'Inside and out. Completely clean.',
    price: 'Starting from $149',
    duration: '~1.5–2 hours',
    photo: '/scraped/google-2.jpg',
    includes: [
      'Everything in Express Shine',
      'Interior vacuum (seats, floors, trunk)',
      'Dashboard & console wipe-down',
      'Interior window clean',
      'Air freshener',
    ],
    ideal: 'Monthly maintenance for commuters and families who want a truly clean car.',
  },
  {
    name: 'Interior Detail',
    tagline: 'Deep clean from the inside.',
    price: 'Starting from $129',
    duration: '~2–3 hours',
    photo: '/scraped/google-3.jpg',
    includes: [
      'Full interior vacuum & steam clean',
      'Stain removal (fabric & carpet)',
      'Leather conditioning & treatment',
      'Odor elimination treatment',
      'Vent & crevice detail',
      'Interior glass polish',
    ],
    ideal: 'Pet owners, families with kids, or vehicles with spills and stains.',
  },
  {
    name: 'Full Detail',
    tagline: 'The complete treatment. Inside and out.',
    price: 'Starting from $249',
    duration: '~3–5 hours',
    photo: '/scraped/google-4.jpg',
    includes: [
      'Everything in Deluxe Shine',
      'Everything in Interior Detail',
      'Clay bar paint decontamination',
      'Paint sealant application',
      'Engine bay clean',
      'Headlight restoration',
    ],
    ideal: 'Pre-sale prep, seasonal refresh, or when you want your car showroom-ready.',
  },
  {
    name: 'Paint Correction',
    tagline: 'Remove swirls, scratches, and oxidation.',
    price: 'Starting from $349',
    duration: '~4–6 hours',
    photo: '/scraped/google-9.jpg',
    includes: [
      'Single-stage machine polish',
      'Swirl & light scratch removal',
      'Paint correction evaluation',
      'Finishing polish application',
      'Paint sealant protection',
    ],
    ideal: 'Vehicles with visible swirl marks, light scratches, or dull oxidation.',
  },
  {
    name: 'Ceramic Coating',
    tagline: 'Long-lasting protection that lasts years.',
    price: 'Call for pricing',
    duration: '~6–8 hours',
    photo: '/scraped/google-10.jpg',
    includes: [
      'Full paint decontamination',
      'Multi-stage paint correction',
      'Professional ceramic coating application',
      '2–5 year protection',
      'Hydrophobic surface treatment',
      'Warranty documentation',
    ],
    ideal: 'New vehicles or freshly corrected paint needing long-term protection.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6"
        style={{ background: 'var(--color-dark)' }}
        aria-label="Services page header"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Mobile Auto Detailing · Charlotte NC
          </motion.p>
          <div className="overflow-visible">
            <motion.h1
              className="font-bold text-white leading-tight pb-2"
              style={{
                fontFamily: 'var(--font-teko)',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Everything We Offer
            </motion.h1>
          </div>
          <motion.p
            className="text-white/60 text-base md:text-lg max-w-2xl mt-4 leading-relaxed"
            style={{ fontFamily: 'var(--font-fira-sans)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
          >
            Every package is performed by hand at your location — home, office, or parking lot.
            4.9★ across 241+ Google reviews. Mon–Fri 7AM–5PM.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="tel:7049070623"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            >
              <Phone size={16} aria-hidden="true" />
              Schedule Service
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" aria-hidden="true" />
            </a>
            <div
              className="inline-flex items-center gap-2 text-white/50 text-sm"
              style={{ fontFamily: 'var(--font-fira-sans)' }}
            >
              <span className="text-yellow-400 text-base" aria-hidden="true">⭐⭐⭐⭐⭐</span>
              <span>4.9 · 241 Google Reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      {/* CONVERSION INTENT: value display — drives booking decision */}
      <section
        className="py-16 md:py-24 px-4 md:px-6"
        style={{ background: 'var(--color-background)' }}
        aria-label="All services"
      >
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            {services.map((svc, i) => (
              <motion.article
                key={svc.name}
                className="grid grid-cols-1 md:grid-cols-5 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: i % 2 === 0 ? 'var(--color-primary)' : 'rgba(51,48,50,0.08)',
                  border: i % 2 !== 0 ? '1px solid rgba(97,125,175,0.2)' : 'none',
                }}
              >
                {/* Photo */}
                <div className="md:col-span-2 relative" style={{ minHeight: '240px' }}>
                  <Image
                    src={svc.photo}
                    alt={`${svc.name} — All Shine No Grime Charlotte NC`}
                    fill
                    className="object-cover object-center"
                  />
                  {i % 2 === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-primary)]/80 hidden md:block" />
                  )}
                </div>

                {/* Details */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h2
                        className="font-bold leading-tight pb-0.5"
                        style={{
                          fontFamily: 'var(--font-teko)',
                          fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                          color: i % 2 === 0 ? 'white' : 'var(--color-primary)',
                        }}
                      >
                        {svc.name}
                      </h2>
                      <p
                        className="text-sm"
                        style={{
                          color: i % 2 === 0 ? 'rgba(255,255,255,0.55)' : 'var(--color-secondary)',
                          fontFamily: 'var(--font-fira-sans)',
                        }}
                      >
                        {svc.tagline}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div
                        className="font-bold text-lg"
                        style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-teko)' }}
                      >
                        {svc.price}
                      </div>
                      <div
                        className="text-xs"
                        style={{
                          color: i % 2 === 0 ? 'rgba(255,255,255,0.4)' : 'var(--color-secondary)',
                          fontFamily: 'var(--font-fira-sans)',
                        }}
                      >
                        {svc.duration}
                      </div>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                    {svc.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs"
                        style={{
                          color: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'var(--color-text)',
                          fontFamily: 'var(--font-fira-sans)',
                        }}
                      >
                        <CheckCircle
                          size={13}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--color-accent)' }}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p
                    className="text-xs italic mb-5"
                    style={{
                      color: i % 2 === 0 ? 'rgba(255,255,255,0.4)' : 'var(--color-secondary)',
                      fontFamily: 'var(--font-fira-sans)',
                    }}
                  >
                    <strong>Best for:</strong> {svc.ideal}
                  </p>

                  <a
                    href="tel:7049070623"
                    className="group relative inline-flex items-center gap-2 self-start px-6 py-3 rounded-lg font-semibold text-sm overflow-hidden transition-transform duration-300 hover:scale-105"
                    style={{
                      background: 'var(--color-accent)',
                      color: 'white',
                      fontFamily: 'var(--font-fira-sans)',
                    }}
                  >
                    <Phone size={14} aria-hidden="true" />
                    Book This Service
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-600" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      {/* CONVERSION INTENT: direct conversion after reviewing all services */}
      <section
        className="py-16 md:py-20 px-4 md:px-6"
        style={{ background: 'var(--color-primary)' }}
        aria-label="Book a service"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p
              className="text-xs uppercase tracking-[0.25em] mb-3"
              style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            >
              Not Sure Which Package?
            </p>
          </Reveal>
          <ClipRevealH2
            text="Call Us — We'll Figure It Out"
            className="text-3xl md:text-5xl font-bold text-white leading-tight pb-1 mb-5"
            style={{ fontFamily: 'var(--font-teko)' }}
          />
          <Reveal delay={0.2}>
            <p
              className="text-white/55 text-sm mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-fira-sans)' }}
            >
              Describe your vehicle and what you need — we&apos;ll recommend the right service and get you scheduled.
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
                href="/contact"
                className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium border-2 overflow-hidden transition-colors duration-300"
                style={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: 'white',
                  fontFamily: 'var(--font-fira-sans)',
                }}
              >
                <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/10" />
                <span className="relative z-10">Send a Message →</span>
              </Link>
            </div>
            <p
              className="mt-6 text-white/35 text-xs"
              style={{ fontFamily: 'var(--font-fira-sans)' }}
            >
              <span className="text-yellow-400" aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9★ · 241 Google Reviews · Mon–Fri 7AM–5PM
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
