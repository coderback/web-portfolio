import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Timothy Ojebiyi Portfolio',
  description: 'Computer Science student portfolio',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}
