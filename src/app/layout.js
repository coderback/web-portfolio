import { League_Spartan, Montserrat } from 'next/font/google';
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import MotionProvider from '../components/MotionProvider';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../lib/site';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });
const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-spartan', display: 'swap' });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: 'Timothy Ojebiyi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// Runs before first paint so a saved or system dark theme doesn't flash light.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${leagueSpartan.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[1100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-forest-dark focus:text-white"
      >
        Skip to main content
      </a>
      <MotionProvider>{children}</MotionProvider>
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}
