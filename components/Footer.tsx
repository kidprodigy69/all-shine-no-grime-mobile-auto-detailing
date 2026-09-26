import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 5:00 PM' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
]

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: 'var(--color-dark)', color: 'rgba(255,255,255,0.7)' }}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full" style={{ background: 'var(--color-accent)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group" aria-label="All Shine No Grime home">
              <span
                className="block w-0.5 h-9 rounded-full"
                style={{ background: 'var(--color-accent)' }}
                aria-hidden="true"
              />
              <span
                className="text-white font-bold tracking-widest uppercase leading-tight"
                style={{ fontFamily: 'var(--font-teko)', fontSize: '1.1rem' }}
              >
                All Shine<br />
                <span style={{ color: 'var(--color-accent)' }}>No Grime</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-fira-sans)' }}>
              Charlotte&apos;s most-trusted mobile auto detailing service.
              We come to you — 4.9★ across 241 Google reviews.
            </p>
            <div className="flex gap-3">
              <a
                href="https://m.facebook.com/allshinenogrimemobileautodetailingcharlotte"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/allshinenogrimemobileautodetailing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-white font-bold text-xl mb-4 tracking-wide"
              style={{ fontFamily: 'var(--font-teko)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-fira-sans)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white font-bold text-xl mb-4 tracking-wide"
              style={{ fontFamily: 'var(--font-teko)' }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:7049070623"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-fira-sans)' }}
                >
                  <Phone size={14} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  (704) 907-0623
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?cid=578533406517346998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-fira-sans)' }}
                >
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  Charlotte, NC Metro Area
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="text-white font-bold text-xl mb-4 tracking-wide"
              style={{ fontFamily: 'var(--font-teko)' }}
            >
              Hours
            </h3>
            <ul className="space-y-2.5" style={{ fontFamily: 'var(--font-fira-sans)' }}>
              {hours.map((h) => (
                <li key={h.day} className="flex flex-col text-sm">
                  <span className="text-white/90 font-medium">{h.day}</span>
                  <span
                    className="text-xs"
                    style={{ color: h.time === 'Closed' ? 'var(--color-secondary)' : 'var(--color-accent)' }}
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span style={{ fontFamily: 'var(--font-fira-sans)' }}>
            © {new Date().getFullYear()} All Shine No Grime Mobile Auto Detailing. All rights reserved.
          </span>
          <span style={{ fontFamily: 'var(--font-fira-sans)' }}>
            Built by{' '}
            <a
              href="https://www.onyxmediagroup.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Onyx Media Group
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
