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
import Header from '../components/header'
import Footer from '../components/footer'
import localFont from '@next/font/local'
import GiantLogo from '../components/landing_page/giant_logo'
import Roadmap from '../components/landing_page/road_map'

const AspektaFont = localFont({ src: '../public/fonts/AspektaVF.woff2' })


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
                fontWeight={700}
                fontSize={{ base: '5xl', sm: '6xl', lg: '7xl' }}
              >
                <Text fontSize={'80px'} lineHeight={'80px'} as={'span'} position={'relative'} fontStyle={"italic"} >
                  A name system <br />
                  with links
                </Text>
              </Heading>
              <Text color={'black'} fontSize={'22px'} lineHeight={'32px'} paddingRight={3}>
                Woolball is a Name System where names can link to each other.
                Woolball is an extension to the subdomain system, everything you
                can do with subdomains, you can do with links.
              </Text>
              <SimpleGrid columns={3} spacing={10} color={'black'} fontSize={'22px'} lineHeight={'32px'} fontWeight={'400'}>
                <VStack>
                  <Image src={'/images/checkmark.png'} alt={'Checkmark'} />
                  <Text >Structured DAOs</Text>
                  
                </VStack>
                <VStack>
                  <Image src={'/images/checkmark.png'} alt={'Checkmark'} />
                  <Text >Web3 accounts</Text>
                  
                </VStack>
                <VStack>
                  <Image src={'/images/checkmark.png'} alt={'Checkmark'} />
                  <Text >Reputation score for names</Text>
                  
                </VStack>
              </SimpleGrid>
              <Flex
                flex={1}
                justify={'center'}
                w={'100%'}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'bold'}
                  px={6}
                  colorScheme={'red'}
                  bg={'woolball.400'}
                  _hover={{ bg: 'woolball.500' }}
                  mx={{ base: 0, sm: 8 }}
                >
                  JOIN PRESALE
                </Button>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  bg={'transparent'}
                  color={'woolball.300'}
                  fontWeight={'bold'}
                  px={6}
                  mx={{ base: 0, sm: 8 }}
                  border='1px' borderColor='woolball.300'
                >
                  JOIN DISCORD
                </Button>
              </Flex>
            </Stack>
            <GiantLogo />
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} my={20}>
            <Flex>
              <Text color={'black'} fontSize={'40px'} lineHeight={'48px'}>
                We introduce Woolball, a flat name system that uses links
                between names instead of subdomains.
              </Text>
            </Flex>
            <Flex w={'100%'} align={'center'} flex={1} justify={'center'}>
              <Link
                isExternal
                aria-label="Woolball Twitter"
                href="#"
                p="1"
                color={'woolball.400'}
                _hover={{
                  color: 'woolball.300',
                  borderColor: 'woolball.400',
                  bg: 'woolball.50',
                }}
              >
                <HStack>
                  <Text fontSize={'16px'}>
                    read whole article about woolball
                  </Text>
                  <svg
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.8423 7.78509C22.9673 7.66007 23.0376 7.49051 23.0376 7.31371C23.0376 7.13691 22.9673 6.96735 22.8423 6.84233L17.1858 1.18577C17.0608 1.06075 16.8912 0.990521 16.7144 0.990521C16.5376 0.990521 16.368 1.06075 16.243 1.18577C16.118 1.31079 16.0478 1.48035 16.0478 1.65715C16.0478 1.83395 16.118 2.00351 16.243 2.12853L20.7617 6.64718L1.63024 6.64623C1.54259 6.64623 1.45579 6.6635 1.37481 6.69704C1.29383 6.73059 1.22025 6.77975 1.15827 6.84173C1.09629 6.90371 1.04712 6.9773 1.01358 7.05828C0.980033 7.13926 0.962768 7.22605 0.962768 7.31371C0.962768 7.40136 0.980033 7.48816 1.01358 7.56914C1.04712 7.65012 1.09629 7.7237 1.15827 7.78568C1.22025 7.84766 1.29383 7.89683 1.37481 7.93037C1.45579 7.96392 1.54259 7.98118 1.63024 7.98118L20.7617 7.98024L16.243 12.4989C16.118 12.6239 16.0478 12.7935 16.0478 12.9703C16.0478 13.1471 16.118 13.3166 16.243 13.4416C16.368 13.5667 16.5376 13.6369 16.7144 13.6369C16.8912 13.6369 17.0608 13.5667 17.1858 13.4416L22.8423 7.78509Z"
                      fill="#CD2D5D"
                    />
                  </svg>
                </HStack>
              </Link>
            </Flex>
          </SimpleGrid>
          <Roadmap />
        </Container>
        <Footer />
      </main>
    </chakra.div>
  )
}

