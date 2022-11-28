import Head from 'next/head'
import {
  Container,
  Stack,
  HStack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  chakra,
  SimpleGrid,
  useColorModeValue,
  Link,
  VStack,
} from '@chakra-ui/react'

import localFont from '@next/font/local'
import Header from './header'
import Footer from './footer'
const AspektaFont = localFont({ src: '../public/fonts/AspektaVF.woff2' })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <chakra.div className="container">
      <Head>
        <title>Woolball a name system with links</title>
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <main className={AspektaFont.className}>
        <Header />
        <Container maxW={'7xl'}>{children}</Container>
        <Footer />
      </main>
    </chakra.div>
  )
}
