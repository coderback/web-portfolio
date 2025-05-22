import './globals.css'

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
      <body>{children}</body>
    </html>
  );
}
