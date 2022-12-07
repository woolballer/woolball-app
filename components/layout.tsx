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
        <meta name="title" content="Woolball a name system with links" />
        <meta
          name="description"
          content="Woolball is a Name System where names can link to each other.  Woolball is an extension to the subdomain system, everything you can do with subdomains, you can do with links."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://woolball.xyz/" />
        <meta property="og:title" content="Woolball a name system with links" />
        <meta
          property="og:description"
          content="Woolball is a Name System where names can link to each other.  Woolball is an extension to the subdomain system, everything you can do with subdomains, you can do with links."
        />
        <meta
          property="og:image"
          content="https://woolball.xyz/images/screenshot.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://woolball.xyz/" />
        <meta
          property="twitter:title"
          content="Woolball a name system with links"
        />
        <meta
          property="twitter:description"
          content="Woolball is a Name System where names can link to each other.  Woolball is an extension to the subdomain system, everything you can do with subdomains, you can do with links."
        />
        <meta
          property="twitter:image"
          content="https://woolball.xyz/images/screenshot.jpg"
        ></meta>
      </Head>

      <main className={AspektaFont.className}>
        <Header />
        <Container maxW={'7xl'}>{children}</Container>
        <Footer />
      </main>
    </chakra.div>
  )
}
