import Head from 'next/head'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  chakra,
  IconButton,
  createIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import Header from '../components/header';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Woolball a name system with links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
          <Container maxW={'7xl'}>
            <Stack
              align={'center'}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '5xl', sm: '6xl', lg: '7xl' }}>
                  <Text
                    as={'span'}
                    position={'relative'}
                   >
                    A name system <br />
                    with link
                  </Text>
                  
 
                </Heading>
                <Text color={'black'}
                      fontSize={'48px'}
                      lineHeight={'56px'}>
                Woolball is a Name System where names can link to each other. 
                Woolball is an extension to the subdomain system, 
                everything you can do with subdomains, you can do with links. 
                </Text>
                <Flex
                   flex={1}
                   justify={'center'}
                  w={'100%'}
                  direction={{ base: 'column', sm: 'row' }}>
                  <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'red'}
                    bg={'#77D89E'}
                    _hover={{ bg: 'red.500' }}>
                    JOIN PRESALE
                  </Button>
                  <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
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
                  
                    alt={'Hero Image'}
                    position={'absolute'}
                  left={0}
                    align={'center'}
                    w={'883px'}
                    h={'884px'}
                    src={
                      '/images/giant-hash-sign.png'
                    }
                  />
              </Flex>
            </Stack>
          </Container>
      </main>
    </div>
  );
}





export const HashBg = (props) => {
  return (
    <chakra.div
      width={'633px'}
      height={'684px'}
      rounded={'3xl'}
      bg={'#FFAB48'}
      {...props} />
  
  
  );
};

