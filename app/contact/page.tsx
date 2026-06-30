'use client'

// CONVERSION INTENT: direct conversion — last-chance form for visitors who didn't call

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { createClient } from '@supabase/supabase-js'
import { Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const _sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const _sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = _sbUrl && _sbKey ? createClient(_sbUrl, _sbKey) : null

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message || !EMAIL_RE.test(formData.email)) {
      setStatus('error')
      return
    }
    setStatus('sending')
    if (!supabase) {
      setStatus('error')
      return
    }
    const { error } = await supabase
      .from('all_shine_no_grime_mobile_auto_detailing_contact_submissions')
      .insert([formData])
    if (error) {
      setStatus('error')
    } else {
      setStatus('success')
      setFormData({ name: '', phone: '', email: '', message: '' })
    }
  }

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6"
        style={{ background: 'var(--color-dark)' }}
        aria-label="Contact page header"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            Let&apos;s Get Your Car Looking Right
          </motion.p>
          <div className="overflow-visible">
            <motion.h1
              className="font-bold text-white leading-tight pb-2"
              style={{ fontFamily: 'var(--font-teko)', fontSize: 'clamp(3rem, 8vw, 6rem)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Schedule Your Detail
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      {/* CONVERSION INTENT: direct conversion — form and phone side-by-side */}
      <section
        className="py-16 md:py-24 px-4 md:px-6"
        style={{ background: 'var(--color-background)' }}
        aria-label="Contact form and details"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
          {/* Form */}
          <Reveal>
            <div className="md:col-span-3">
              <h2
                className="font-bold leading-tight pb-1 mb-6"
                style={{ fontFamily: 'var(--font-teko)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--color-primary)' }}
              >
                Send Us a Message
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-fira-sans)' }}>
                    Full Name <span style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:border-[var(--color-accent)]"
                    style={{ borderColor: 'rgba(51,48,50,0.2)', background: 'white', color: 'var(--color-text)', fontFamily: 'var(--font-fira-sans)' }}
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-fira-sans)' }}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:border-[var(--color-accent)]"
                      style={{ borderColor: 'rgba(51,48,50,0.2)', background: 'white', color: 'var(--color-text)', fontFamily: 'var(--font-fira-sans)' }}
                      placeholder="(704) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-fira-sans)' }}>
                      Email <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:border-[var(--color-accent)]"
                      style={{ borderColor: 'rgba(51,48,50,0.2)', background: 'white', color: 'var(--color-text)', fontFamily: 'var(--font-fira-sans)' }}
                      placeholder="jane@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-fira-sans)' }}>
                    Message <span style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border outline-none transition-colors resize-none focus:border-[var(--color-accent)]"
                    style={{ borderColor: 'rgba(51,48,50,0.2)', background: 'white', color: 'var(--color-text)', fontFamily: 'var(--font-fira-sans)' }}
                    placeholder="Tell us about your vehicle and what you need..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
                  style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" aria-hidden="true" />
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 p-4 rounded-lg"
                    style={{ background: 'rgba(97,125,175,0.1)', border: '1px solid rgba(97,125,175,0.3)' }}
                  >
                    <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    <p className="text-sm" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-fira-sans)' }}>
                      Thank you! We will be in touch shortly.
                    </p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 p-4 rounded-lg"
                    style={{ background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.25)' }}
                  >
                    <AlertCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#dc2626' }} aria-hidden="true" />
                    <p className="text-sm" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-fira-sans)' }}>
                      Something went wrong. Please call us directly at{' '}
                      <a href="tel:7049070623" className="font-semibold underline">
                        (704) 907-0623
                      </a>
                      .
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Info panel */}
          <Reveal delay={0.15}>
            <div
              className="md:col-span-2 p-7 rounded-2xl h-fit"
              style={{ background: 'var(--color-primary)' }}
            >
              <h3
                className="font-bold mb-5 leading-tight"
                style={{ fontFamily: 'var(--font-teko)', fontSize: '1.6rem', color: 'white' }}
              >
                Or Just Call Us
              </h3>
              <div className="space-y-5">
                <a href="tel:7049070623" className="flex items-start gap-3 group">
                  <Phone size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  <div>
                    <p className="text-white font-medium text-sm group-hover:underline" style={{ fontFamily: 'var(--font-fira-sans)' }}>
                      (704) 907-0623
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-fira-sans)' }}>
                      Fastest way to book
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  <div>
                    <p className="text-white font-medium text-sm" style={{ fontFamily: 'var(--font-fira-sans)' }}>
                      Charlotte, NC Metro
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-fira-sans)' }}>
                      Mobile only — we come to you
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  <div>
                    <p className="text-white font-medium text-sm" style={{ fontFamily: 'var(--font-fira-sans)' }}>
                      Mon–Fri · 7:00 AM – 5:00 PM
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-fira-sans)' }}>
                      Closed Saturday & Sunday
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-sm" aria-hidden="true">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-fira-sans)' }}>
                    4.9 · 241 Google Reviews
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
