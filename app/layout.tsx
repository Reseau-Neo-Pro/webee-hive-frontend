"use client"

import './globals.css'
import { Bebas_Neue } from 'next/font/google'

import { darkTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from './components/Navbar';

const font = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin']
})

export const metadata = {
  title: 'WeBee Hive',
  description: 'Réseau social pour néo-pro du web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <ThemeProvider theme={darkTheme} >
        <CssBaseline />
        <body className={font.className}>
          <Navbar />
          {/*Layout Ici */}
          {/* Navbar */}
          {children}
          {/* Footer */}
        </body>
      </ThemeProvider>
    </html >
  )
}
