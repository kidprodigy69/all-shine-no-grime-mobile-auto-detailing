import type { Metadata } from 'next'
import { Teko, Fira_Sans } from 'next/font/google'
import { MotionConfig } from 'framer-motion'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const teko = Teko({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-teko',
  display: 'swap',
})

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'All Shine No Grime | Mobile Auto Detailing in Charlotte NC',
  description:
    'Charlotte\'s highest-rated mobile auto detailing service. 4.9★ across 241+ Google reviews. We come to you — schedule service today at (704) 907-0623.',
  keywords: 'mobile auto detailing Charlotte NC, car detailing Charlotte, mobile car wash Charlotte',
  openGraph: {
    title: 'All Shine No Grime | Mobile Auto Detailing Charlotte NC',
    description: '4.9★ across 241+ Google reviews. Charlotte\'s most-trusted mobile auto detailing. We come to you.',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'All Shine No Grime Mobile Auto Detailing',
  description: 'Charlotte\'s highest-rated mobile auto detailing service. We come to you.',
  telephone: '+17049070623',
  url: 'https://allshinenogrime.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    postalCode: '28273',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Charlotte',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '241',
    bestRating: '5',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://m.facebook.com/allshinenogrimemobileautodetailingcharlotte',
    'https://www.instagram.com/allshinenogrimemobileautodetailing/',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${firaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: 'var(--font-fira-sans)' }}
      >
        <MotionConfig reducedMotion="user">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  )
}
