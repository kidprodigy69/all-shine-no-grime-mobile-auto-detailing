import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | All Shine No Grime Mobile Auto Detailing Charlotte NC',
  description:
    'Charlotte\'s highest-rated mobile auto detailing service. Thorough, clean, and beautiful work — 4.9★ across 241+ Google reviews. We come to you.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
