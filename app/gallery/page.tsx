'use client'

// CONVERSION INTENT: visual proof that builds desire — every photo drives toward "I want this for my car"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'

// 3D flip word entrance for H1 — unique to this page
function FlipH1({ text }: { text: string }) {
  return (
    <h1
      className="font-bold leading-tight pb-2 text-white"
      style={{
        fontFamily: 'var(--font-teko)',
        fontSize: 'clamp(3rem, 8vw, 6rem)',
      }}
    >
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, rotateX: -90, transformOrigin: 'top' }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            delay: 0.2 + i * 0.12,
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block', perspective: '400px' }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  )
}

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

const photos = [
  {
    src: '/scraped/google-1.jpg',
    alt: 'Mobile auto detailing exterior wash — All Shine No Grime Charlotte NC',
    span: 'col-span-2 row-span-2',
    height: '420px',
  },
  {
    src: '/scraped/google-2.jpg',
    alt: 'Deluxe shine exterior detail — All Shine No Grime Charlotte NC',
    span: 'col-span-1 row-span-1',
    height: '200px',
  },
  {
    src: '/scraped/google-3.jpg',
    alt: 'Interior deep clean detailing — All Shine No Grime Charlotte NC',
    span: 'col-span-1 row-span-1',
    height: '200px',
  },
  {
    src: '/scraped/google-4.jpg',
    alt: 'Full detail service results — All Shine No Grime Charlotte NC',
    span: 'col-span-1 row-span-1',
    height: '200px',
  },
  {
    src: '/scraped/google-5.jpg',
    alt: 'Professional car detailing Charlotte NC — All Shine No Grime',
    span: 'col-span-2 row-span-2',
    height: '420px',
  },
  {
    src: '/scraped/google-6.jpg',
    alt: 'Mobile detailing at your location — All Shine No Grime Charlotte',
    span: 'col-span-1 row-span-1',
    height: '200px',
  },
  {
    src: '/scraped/google-7.jpg',
    alt: 'Paint correction and polish Charlotte NC — All Shine No Grime',
    span: 'col-span-1 row-span-1',
    height: '200px',
  },
  {
    src: '/scraped/google-8.jpg',
    alt: 'Auto detailing at home or office — All Shine No Grime Charlotte',
    span: 'col-span-1 row-span-1',
    height: '200px',
  },
  {
    src: '/scraped/google-9.jpg',
    alt: 'Ceramic coating and protection — All Shine No Grime Charlotte NC',
    span: 'col-span-1 row-span-1',
    height: '200px',
  },
  {
    src: '/scraped/google-10.jpg',
    alt: 'Professional mobile auto detail Charlotte — All Shine No Grime',
    span: 'col-span-2 row-span-1',
    height: '200px',
  },
]

// Masonry layout — 2 columns, distribute evenly
const col1 = photos.filter((_, i) => i % 2 === 0)
const col2 = photos.filter((_, i) => i % 2 !== 0)

export default function GalleryPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section
        className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-6"
        style={{ background: 'var(--color-dark)' }}
        aria-label="Gallery page header"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            Real Work. Real Results.
          </motion.p>
          <FlipH1 text="The Work Speaks for Itself" />
          <motion.p
            className="text-white/55 text-base md:text-lg max-w-xl mt-4 leading-relaxed"
            style={{ fontFamily: 'var(--font-fira-sans)' }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            Every photo below is an actual job performed by All Shine No Grime in Charlotte NC.
            No stock photos. No filters. Just the results you can expect.
          </motion.p>
        </div>
      </section>

      {/* ── MASONRY GALLERY ── */}
      {/* CONVERSION INTENT: visual desire — the work sells itself */}
      <section
        className="py-10 md:py-14 px-4 md:px-6"
        style={{ background: 'var(--color-dark)' }}
        aria-label="Photo gallery"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-2 md:gap-2.5">
            {/* Column 1 */}
            <div className="flex flex-col gap-2 md:gap-2.5">
              {col1.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  className="relative overflow-hidden rounded-lg"
                  style={{ height: i === 0 ? '320px' : i === 2 ? '280px' : '220px' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover object-center"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2 md:gap-2.5">
              {col2.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  className="relative overflow-hidden rounded-lg"
                  style={{ height: i === 1 ? '340px' : i === 3 ? '270px' : '230px' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover object-center"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF + CTA ── */}
      {/* CONVERSION INTENT: direct conversion after visual desire is built */}
      <section
        className="py-16 md:py-20 px-4 md:px-6"
        style={{ background: 'var(--color-primary)' }}
        aria-label="Book a detail"
      >
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="flex justify-center gap-1 text-yellow-400 mb-4" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p
              className="text-white text-lg md:text-xl italic mb-2 leading-relaxed"
              style={{ fontFamily: 'var(--font-fira-sans)' }}
            >
              &ldquo;10 STARS! Wonderful service. Chris set up my appointment and got all the details ironed out. Josh came out to my business park for a &quot;Deluxe shine&quot; package on my Gotland green S4. He went above and beyond.&rdquo;
            </p>
            <p
              className="text-white/40 text-xs uppercase tracking-widest mb-10"
              style={{ fontFamily: 'var(--font-fira-sans)' }}
            >
              — Matt Connor · Google Review
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-bold text-white mb-6 leading-tight pb-1"
              style={{ fontFamily: 'var(--font-teko)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Want Results Like These?
            </p>
            <a
              href="tel:7049070623"
              className="group relative inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-white overflow-hidden transition-[transform,box-shadow] duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(97,125,175,0.4)]"
              style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            >
              <Phone size={16} aria-hidden="true" />
              Schedule Service · (704) 907-0623
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" aria-hidden="true" />
            </a>
            <p
              className="mt-5 text-white/35 text-xs"
              style={{ fontFamily: 'var(--font-fira-sans)' }}
            >
              Mon–Fri · 7:00 AM – 5:00 PM · Charlotte NC Metro
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
