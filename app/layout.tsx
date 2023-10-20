import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import ModalProvider from '@/provider/ModalProvider'
import ToastProvider from '@/provider/ToastProvider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
