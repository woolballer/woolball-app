import Head from 'next/head'
import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  chakra,
  SimpleGrid,
  useColorModeValue,
  Spacer,
} from '@chakra-ui/react'
import Header from '../components/header'
import Footer from '../components/footer'
import localFont from '@next/font/local'

const AspektaFont = localFont({ src: '../fonts/AspektaVF.woff2' })

function Roadmap() {
  return (
    <Flex my={8} w={'100%'} h={'100%'}>
      <Image
        alt={'Road Map'}
        w={'100%'}
        h={'100%'}
        src={'/images/roadmap.png'}
        my={4}
      />
    </Flex>
  )
}

export default function Home() {
  return (
    <chakra.div className="container">
      <Head>
        <title>Woolball a name system with links</title>
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <main className={AspektaFont.className}>
        <Header />
        <Container maxW={'7xl'}>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '5xl', sm: '6xl', lg: '7xl' }}
              >
                <Text as={'span'} position={'relative'}>
                  A name system <br />
                  with link
                </Text>
              </Heading>
              <Text color={'black'} fontSize={'48px'} lineHeight={'56px'}>
                Woolball is a Name System where names can link to each other.
                Woolball is an extension to the subdomain system, everything you
                can do with subdomains, you can do with links.
              </Text>
              <Flex
                flex={1}
                justify={'center'}
                w={'100%'}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'red'}
                  bg={'green.300'}
                  _hover={{ bg: 'green.400' }}
                  mx={{ base: 0, sm: 8 }}
                >
                  JOIN PRESALE
                </Button>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  mx={{ base: 0, sm: 8 }}
                >
                  JOIN DISCORD
                </Button>
              </Flex>
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
            >
              <HashBg
                position={'absolute'}
                left={0}
                zIndex={-1}
                color={useColorModeValue('red.50', 'red.400')}
              />

              <Image
                alt={'Hash Logo'}
                position={'absolute'}
                left={0}
                align={'center'}
                w={'883px'}
                h={'884px'}
                src={'/images/giant-hash-sign.png'}
              />
            </Flex>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} my={2}>
            <Flex>
              <Text color={'black'} fontSize={'32px'} lineHeight={'40px'}>
                We introduce Woolball, a flat name system that uses links
                between names instead of subdomains.
              </Text>
            </Flex>
            <Flex w={'100%'} align={'center'} flex={1} justify={'center'}>
              <Text color={'woolball.400'} fontSize={'16px'}>
                read whole article about woolball
              </Text>
            </Flex>
          </SimpleGrid>
          <Roadmap />
        </Container>
        <Footer />
      </main>
    </chakra.div>
  )
}

export const HashBg = (props: any) => {
  return (
    <chakra.div
      width={'633px'}
      height={'684px'}
      rounded={'3xl'}
      bg={'#FFAB48'}
      {...props}
    />
  )
}
