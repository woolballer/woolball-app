import { Container, chakra } from '@chakra-ui/react'

import localFont from '@next/font/local'
import Navbar from './navbar'
import Footer from './footer'
import Header from './head/header'
const AspektaFont = localFont({ src: '../public/fonts/AspektaVF.woff2' })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <chakra.div className="container">
      <Header />

      <main className={AspektaFont.className}>
        <Navbar />
        <Container maxW={'7xl'}>{children}</Container>
      </main>
    </chakra.div>
  )
}
