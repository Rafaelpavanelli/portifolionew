import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import * as React from "react";

export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'portifolio ',
}
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', ] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="pt-br" className={roboto.className}>
      <body className={"bg-primary"}>
        {children}
        </body>
    </html>
  )
}
