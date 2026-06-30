'use client'

// CONVERSION INTENT: Full homepage — hero impressions → trust → services → gallery → reviews → CTA
// Structure: Hero → Trust Strip → Services → Parallax → Stats → Gallery → Reviews → Hours → CTA → FAQ

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Star, ChevronDown, MapPin } from 'lucide-react'
import Hero from '@/components/Hero'

// Scroll-triggered animated count-up using rAF (safe across framer-motion versions)
function AnimatedStat({
  end,
  suffix = '',
  prefix = '',
}: {
  end: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

// H2 word-stagger on scroll — different per section via className
function StaggerH2({
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
    <h2 ref={ref} className={className} style={style}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  )
}

// Directional scroll reveal wrapper
function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const init =
    direction === 'left'
      ? { opacity: 0, x: -35 }
      : direction === 'right'
        ? { opacity: 0, x: 35 }
        : { opacity: 0, y: 30 }
  const anim =
    direction === 'left' || direction === 'right'
      ? { opacity: 1, x: 0 }
      : { opacity: 1, y: 0 }
  return (
    <motion.div
      ref={ref}
      className={className}
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
    description: 'Hand wash, dry, and tire shine. 45-minute professional treatment at your location.',
    price: 'Starting from $79',
    photo: '/scraped/google-1.jpg',
  },
  {
    name: 'Deluxe Shine',
    description: 'Full exterior wash plus complete interior vacuum, window clean, and wipe-down.',
    price: 'Starting from $149',
    photo: '/scraped/google-2.jpg',
  },
  {
    name: 'Interior Detail',
    description: 'Deep steam clean, stain removal, leather conditioning, and odor elimination.',
    price: 'Starting from $129',
    photo: '/scraped/google-3.jpg',
  },
  {
    name: 'Full Detail',
    description: 'The complete treatment — inside, outside, paint decontamination, and protection.',
    price: 'Starting from $249',
    photo: '/scraped/google-4.jpg',
  },
]

const testimonials = [
  {
    quote:
      '10 STARS! Wonderful service. Chris set up my appointment and got all the details ironed out. Josh came out to my business park for a "Deluxe shine" package on my Gotland green S4. He went above and beyond.',
    name: 'Matt Connor',
  },
  {
    quote:
      "Josh came out to service my car. He did an incredible job with the express shine! His attention to detail and thoroughness was greatly appreciated. My car looks brand new.",
    name: 'Ashley D',
  },
  {
    quote:
      'Had the greatest experience with Josh today. Came to my office and worked his butt off making my SUV look brand new again. The attention to detail — the results were breathtaking.',
    name: 'Ann Marie Gebel',
  },
]

const faqs = [
  {
    q: 'Where do you provide mobile auto detailing in Charlotte?',
    a: 'We serve the greater Charlotte NC metro area. We come directly to your home, office, or any parking lot — no drop-off needed.',
  },
  {
    q: 'How long does a mobile detail take at my location?',
    a: 'An Express Shine takes about 45 minutes. A Full Detail runs 3–5 hours depending on vehicle size and condition. We schedule a time that works around your day.',
  },
  {
    q: 'Do I need to be present during the detail?',
    a: "No. As long as we have access to your vehicle, you can carry on with your day. We'll notify you when we arrive and when we're finished.",
  },
  {
    q: 'What do you need from me before the appointment?',
    a: "Access to your vehicle and a clean area to work. We bring all our own water, supplies, and equipment. A power outlet within ~50 feet is helpful for interior work.",
  },
  {
    q: 'What makes All Shine No Grime different from a drive-through car wash?',
    a: 'We hand-wash every vehicle with professional-grade products. Automated car washes use harsh brushes that scratch paint over time. Our 4.9★ across 241+ Google reviews tells the real story.',
  },
]

const galleryPhotos = [
  '/scraped/google-5.jpg',
  '/scraped/google-6.jpg',
  '/scraped/google-7.jpg',
  '/scraped/google-8.jpg',
  '/scraped/google-9.jpg',
  '/scraped/google-10.jpg',
]

export default function HomePage() {
  // Parallax for the full-bleed image section
  const parallaxRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <>
      {/* ── 1. HERO ── */}
      <Hero />

      {/* ── 2. TRUST STRIP ── immediately below hero */}
      {/* CONVERSION INTENT: credibility before visitor scrolls */}
      <section style={{ background: 'var(--color-primary)' }} aria-label="Trust signals">
        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-wrap justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            { icon: '⭐', value: '4.9★', label: '241 Google Reviews' },
            { icon: '📍', value: 'Mobile', label: 'We Come to You' },
            { icon: '🛡️', value: 'Insured', label: 'Fully Insured Service' },
            { icon: '⏱️', value: 'Mon–Fri', label: '7:00 AM – 5:00 PM' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 text-white">
              <span className="text-xl" aria-hidden="true">{s.icon}</span>
              <div>
                <div
                  className="font-bold text-sm md:text-base leading-tight"
                  style={{ fontFamily: 'var(--font-teko)' }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs opacity-70"
                  style={{ fontFamily: 'var(--font-fira-sans)' }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 3. SERVICES PREVIEW ── */}
      {/* CONVERSION INTENT: shows value, drives to /services */}
      <section
        className="py-20 md:py-28 px-4 md:px-6"
        style={{ background: 'var(--color-background)' }}
        aria-label="Services preview"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            >
              What We Do
            </p>
          </Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <StaggerH2
              text="Everything We Offer"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-1"
              style={{ fontFamily: 'var(--font-teko)', color: 'var(--color-primary)' }}
            />
            <Reveal delay={0.2} direction="right">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
              >
                View All Services →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <motion.article
                key={svc.name}
                className="relative rounded-2xl overflow-hidden"
                style={{ minHeight: '320px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                {/* Photo background */}
                <Image
                  src={svc.photo}
                  alt={`${svc.name} auto detailing — All Shine No Grime Charlotte NC`}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Glassmorphism content card */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5 border-t"
                  style={{
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    background: 'rgba(28, 26, 27, 0.45)',
                    borderColor: 'rgba(255,255,255,0.15)',
                  }}
                >
                  <h3
                    className="text-white font-bold text-2xl leading-tight mb-1 pb-0"
                    style={{ fontFamily: 'var(--font-teko)' }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    className="text-white/65 text-xs leading-relaxed mb-2"
                    style={{ fontFamily: 'var(--font-fira-sans)' }}
                  >
                    {svc.description}
                  </p>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
                  >
                    {svc.price}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PARALLAX PHOTO — SIGNATURE UNIQUENESS ELEMENT 1 ── */}
      {/* CONVERSION INTENT: differentiator + emotional impact + secondary CTA */}
      <section
        ref={parallaxRef}
        className="relative overflow-hidden"
        style={{ height: '500px' }}
        aria-label="Mobile detailing in Charlotte"
      >
        <motion.div
          className="absolute inset-x-0"
          style={{ y: parallaxY, top: '-15%', height: '130%' }}
        >
          <Image
            src="/scraped/google-1.jpg"
            alt="All Shine No Grime Mobile Auto Detailing — Charlotte NC"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/58" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Reveal>
            <p
              className="text-white/55 text-xs uppercase tracking-[0.3em] mb-5"
              style={{ fontFamily: 'var(--font-fira-sans)' }}
            >
              Charlotte NC's Highest Rated Mobile Detail
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-visible mb-8">
              <p
                className="text-white font-bold leading-tight pb-2"
                style={{
                  fontFamily: 'var(--font-teko)',
                  fontSize: 'clamp(2.8rem, 7vw, 5rem)',
                }}
              >
                Your Car. Your Location.<br />Our Expertise.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="tel:7049070623"
              className="group relative flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(97,125,175,0.4)]"
              style={{
                background: 'var(--color-accent)',
                fontFamily: 'var(--font-fira-sans)',
                minHeight: '54px',
              }}
            >
              <Phone size={16} aria-hidden="true" />
              Schedule Service
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── 5. STATS COUNTER ── */}
      {/* CONVERSION INTENT: trust builder with animated numbers */}
      <section
        className="py-14 md:py-16"
        style={{ background: 'var(--color-primary)' }}
        aria-label="Key statistics"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { animated: true, end: 241, suffix: '+', display: null, label: 'Google Reviews' },
              { animated: false, end: 0, suffix: '', display: '4.9★', label: 'Average Rating' },
              { animated: true, end: 100, suffix: '%', display: null, label: 'Mobile Service' },
              { animated: true, end: 5, suffix: '', display: null, label: 'Days a Week' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div
                  className="font-bold leading-none mb-2"
                  style={{
                    fontFamily: 'var(--font-teko)',
                    fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {stat.animated ? (
                    <AnimatedStat end={stat.end} suffix={stat.suffix} />
                  ) : (
                    stat.display
                  )}
                </div>
                <div
                  className="text-white/55 text-xs uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-fira-sans)' }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GALLERY PREVIEW ── */}
      {/* CONVERSION INTENT: social proof via real work photos */}
      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-dark)' }}
        aria-label="Gallery preview"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <Reveal>
                <p
                  className="text-xs uppercase tracking-[0.2em] mb-3"
                  style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
                >
                  Real Results
                </p>
              </Reveal>
              <StaggerH2
                text="The Work Speaks for Itself"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-1 text-white"
                style={{ fontFamily: 'var(--font-teko)' }}
              />
            </div>
            <Reveal delay={0.2} direction="right">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-4"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
              >
                View Full Gallery →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {galleryPhotos.map((src, i) => (
              <motion.div
                key={src}
                className="relative overflow-hidden rounded-lg"
                style={{ height: i === 0 || i === 3 ? '280px' : '210px' }}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.07, duration: 0.55 }}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={src}
                    alt="Auto detailing Charlotte NC — All Shine No Grime"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. REVIEWS PREVIEW ── */}
      {/* CONVERSION INTENT: trust builder with real customer voices */}
      <section
        className="py-20 md:py-28 px-4 md:px-6"
        style={{ background: 'var(--color-background)' }}
        aria-label="Customer reviews"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <Reveal>
                <p
                  className="text-xs uppercase tracking-[0.2em] mb-3"
                  style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
                >
                  4.9★ · 241 Google Reviews
                </p>
              </Reveal>
              <StaggerH2
                text="What Charlotte Says"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-1"
                style={{ fontFamily: 'var(--font-teko)', color: 'var(--color-primary)' }}
              />
            </div>
            <Reveal delay={0.2} direction="right">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-4"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
              >
                Read All Reviews →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={{
                  background: 'rgba(51, 48, 50, 0.06)',
                  borderColor: 'rgba(97, 125, 175, 0.2)',
                }}
              >
                <div
                  className="flex gap-0.5 mb-4 text-yellow-400"
                  aria-label="5 stars"
                >
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} fill="currentColor" />
                  ))}
                </div>
                <blockquote
                  className="text-sm leading-relaxed mb-4 italic"
                  style={{ color: 'var(--color-text)', fontFamily: 'var(--font-fira-sans)' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <cite
                  className="text-xs font-semibold not-italic uppercase tracking-wide"
                  style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
                >
                  — {t.name}
                </cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. HOURS + LOCATION ── */}
      {/* CONVERSION INTENT: bridge — answers "when can I call?" before final CTA */}
      <section
        className="py-16 md:py-20 px-4 md:px-6"
        style={{ background: 'var(--color-primary)' }}
        aria-label="Hours and service area"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal direction="left">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            >
              Service Area
            </p>
            <StaggerH2
              text="Find Us Anywhere You Are"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight pb-1 text-white mb-4"
              style={{ fontFamily: 'var(--font-teko)' }}
            />
            <p
              className="text-white/60 text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-fira-sans)' }}
            >
              We&apos;re mobile — no shop drop-off needed. We serve homes, offices, and parking lots
              throughout Charlotte and surrounding communities.
            </p>
            <a
              href="tel:7049070623"
              className="inline-flex items-center gap-2 font-semibold text-lg"
              style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            >
              <Phone size={18} aria-hidden="true" />
              (704) 907-0623
            </a>
          </Reveal>

          <Reveal delay={0.2} direction="right">
            <div className="space-y-0">
              {[
                { day: 'Monday – Friday', time: '7:00 AM – 5:00 PM', open: true },
                { day: 'Saturday', time: 'Closed', open: false },
                { day: 'Sunday', time: 'Closed', open: false },
              ].map((h, i) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between py-4 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <span
                    className="text-white/80 text-sm font-medium"
                    style={{ fontFamily: 'var(--font-fira-sans)' }}
                  >
                    {h.day}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: h.open ? 'var(--color-accent)' : 'var(--color-secondary)',
                      fontFamily: 'var(--font-fira-sans)',
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
              <div
                className="pt-5 flex items-start gap-2 text-white/50 text-xs"
                style={{ fontFamily: 'var(--font-fira-sans)' }}
              >
                <MapPin size={13} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Charlotte NC Metro Area · Mobile Service Only · We Come to You</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 9. CTA STRIP ── */}
      {/* CONVERSION INTENT: direct conversion — final push before footer */}
      <section
        className="py-20 md:py-28 px-4 md:px-6"
        style={{ background: 'var(--color-background)' }}
        aria-label="Schedule service"
      >
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p
              className="text-xs uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            >
              Get Started Today
            </p>
          </Reveal>
          <StaggerH2
            text="Ready for a Cleaner Car?"
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight pb-2 mb-5"
            style={{ fontFamily: 'var(--font-teko)', color: 'var(--color-primary)' }}
          />
          <Reveal delay={0.25}>
            <p
              className="text-sm md:text-base mb-9 leading-relaxed"
              style={{ color: 'var(--color-secondary)', fontFamily: 'var(--font-fira-sans)' }}
            >
              4.9★ across 241+ Google reviews. We come to your home, office, or parking lot.
              Mon–Fri 7AM–5PM · Charlotte NC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Pill CTA — shimmer hover */}
              <a
                href="tel:7049070623"
                className="group relative flex items-center gap-2 px-10 py-5 rounded-full font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(97,125,175,0.35)]"
                style={{
                  background: 'var(--color-accent)',
                  fontFamily: 'var(--font-fira-sans)',
                  minHeight: '56px',
                }}
              >
                <Phone size={17} aria-hidden="true" />
                Schedule Service
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700"
                  aria-hidden="true"
                />
              </a>
              {/* Outlined fill-slide CTA */}
              <Link
                href="/contact"
                className="group relative flex items-center gap-2 px-9 py-5 rounded-lg font-medium border-2 overflow-hidden transition-all duration-300"
                style={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-fira-sans)',
                  minHeight: '56px',
                }}
              >
                <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ background: 'var(--color-primary)' }} />
                <span className="relative z-10 group-hover:text-[var(--color-background)] transition-colors duration-300">
                  Send a Message →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 10. FAQ ── */}
      {/* CONVERSION INTENT: AI search optimization + objection removal */}
      <section
        className="py-20 md:py-28 px-4 md:px-6"
        style={{ background: 'var(--color-primary)' }}
        aria-label="Frequently asked questions"
      >
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3 text-center"
              style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            >
              FAQ
            </p>
          </Reveal>
          <StaggerH2
            text="Your Questions, Answered"
            className="text-3xl md:text-5xl font-bold leading-tight pb-1 text-white text-center mb-12"
            style={{ fontFamily: 'var(--font-teko)' }}
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <details
                  className="group rounded-xl p-5"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <summary
                    className="font-semibold text-white cursor-pointer flex items-center justify-between gap-4 list-none text-sm md:text-base select-none"
                    style={{ fontFamily: 'var(--font-fira-sans)' }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className="flex-shrink-0 text-white/50 group-open:rotate-180 transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </summary>
                  <p
                    className="mt-4 text-sm text-white/60 leading-relaxed"
                    style={{ fontFamily: 'var(--font-fira-sans)' }}
                  >
                    {faq.a}
                  </p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
