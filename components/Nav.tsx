'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, Menu } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(28, 26, 27, 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="All Shine No Grime home">
            <span
              className="block w-1 h-8 rounded-full transition-[height] duration-300 group-hover:h-10"
              style={{ background: 'var(--color-accent)' }}
              aria-hidden="true"
            />
            <span
              className="text-white font-bold leading-tight tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-teko)', fontSize: '1.1rem', letterSpacing: '0.1em' }}
            >
              All Shine<br />
              <span style={{ color: 'var(--color-accent)' }}>No Grime</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
                style={{ fontFamily: 'var(--font-fira-sans)', letterSpacing: '0.05em' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:7049070623"
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm overflow-hidden transition-[transform,box-shadow] duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
            >
              <Phone size={14} aria-hidden="true" />
              Schedule Service
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: 'var(--color-dark)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between px-4 h-16">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <span
                  className="block w-1 h-8 rounded-full"
                  style={{ background: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
                <span
                  className="text-white font-bold tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-teko)', fontSize: '1.1rem' }}
                >
                  All Shine <span style={{ color: 'var(--color-accent)' }}>No Grime</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-11 h-11 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col justify-center flex-1 px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-white py-4 text-4xl font-bold uppercase tracking-wide border-b border-white/10 hover:text-[var(--color-accent)] transition-colors"
                    style={{ fontFamily: 'var(--font-teko)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="mt-8"
              >
                <a
                  href="tel:7049070623"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-white font-bold text-lg"
                  style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-fira-sans)' }}
                  onClick={() => setOpen(false)}
                >
                  <Phone size={20} aria-hidden="true" />
                  (704) 907-0623
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
