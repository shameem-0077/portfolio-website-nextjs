import { Inter } from 'next/font/google'
import localFont from '@next/font/local'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { StyledEngineProvider } from '@mui/material'
const JosefinSans = localFont({
  src: [
    {
      path: '../assets/fonts/JosefinSans-Regular.ttf',
      weight: '400'
    },
  ],
  variable: '--font-JosefinSans'
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shameem abdulkareem',
  description: 'A personal website of fullstack-dev shameem',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${JosefinSans.variable} font-sans text-white`}>
      <body className={inter.className}>
        <StyledEngineProvider injectFirst>
          {children}
          <Analytics />
        </StyledEngineProvider>
      </body>
    </html>
  )
}
