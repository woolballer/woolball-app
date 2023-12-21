import Layout from '../components/layout'
import {
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Show,
  Link,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import { GITHUB_LINK } from '../components/constants/social_profiles'

export const getStaticProps: GetStaticProps = async (_context) => {
  return {
    props: {},
  }
}

const WhatIsWoolballPage: NextPage = ({}) => {
  return (
    <Layout>
      <Stack
        pt={{ base: 6, sm: 8, md: 16, lg: 24, xl: 28 }}
        mb={{ base: 1 }}
        direction={'column'}
        alignItems="stretch"
        align="flex-start"
        maxW="4xl"
        spacing={{ base: 6, lg: 10 }}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '5xl', sm: '6xl', lg: '7xl' }}
        >
          <Text
            fontSize={{ base: '32px', sm: '48px', lg: '80px' }}
            lineHeight={{ base: '40px', sm: '56px', lg: '80px' }}
            as={'span'}
            position={'relative'}
          >
            What&apos;s Woolball?
          </Text>
        </Heading>
        <Text
          fontSize={{ base: '16px', sm: '24px', md: '32px', lg: '40px' }}
          lineHeight={{ base: '24px', sm: '30px', md: '40px', lg: '48px' }}
        >
          Woolball is a social ID system, deriving reliability of various 
          statements about an ID ("is it human? is it reliable?") 
          based on its social connection.
        </Text>
        <Show above={'lg'}>
          <Flex
            justify={'center'}
            align={'start'}
            position={'relative'}
            h={'10px'}
          >
            <Image
              align={'start'}
              maxWidth={'max-content'}
              position={'absolute'}
              top={-400}
              left={700}
              zIndex={-1}
              src={'/images/what-is-woolball-bg-2.png'}
              alt={'what is woolball logo'}
            />
          </Flex>
        </Show>
        <Stack
          direction={'column'}
          alignItems="stretch"
          align="flex-start"
          maxW="3xl"
          spacing={{ base: 8, lg: 10 }}
          fontSize={{ base: '14px', sm: '18px' }}
          lineHeight={{ base: '22px', sm: '28px' }}
        >
          <p>
            Woolball is work in progress. 
            This version was lunched in order for  
            <Link href='https://citadef.xyz'> Citadef</Link> users
            to already be able to register names since Citadef 
            is built on top of Woolball social functions.  
          </p>

          <p>
            This version of Woolball is deployed on Optimism Goerli.
            Use it for fun, don't count on anything to stay static 
            since, well, it's on testnet and development still goes on.
          </p>

          <p>
            <Link href={GITHUB_LINK}>Follow Woolball on Github</Link>!
          </p>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default WhatIsWoolballPage
