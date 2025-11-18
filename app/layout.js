import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Adedotun Ayodimeji - Portfolio',
  description: 'UX/UI Designer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/vercel/geist-font@main/packages/geist-sans/dist/geist-sans.css"
          crossOrigin="anonymous"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

