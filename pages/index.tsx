import {
  Stack,
  HStack,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Link,
} from '@chakra-ui/react'
import GiantLogo from '../components/landing_page/giant_logo'
import Roadmap from '../components/landing_page/road_map'
import ActionButtons from '../components/landing_page/action_buttons'
import ArrowIcon from '../components/svgs/arrow'
import UseCase from '../components/landing_page/use_case'
import Layout from '../components/layout'
import NextLink from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Flex
        pt={{ base: 6, sm: 8, md: 16, lg: 24, xl: 28 }}
        mb={{ base: 1 }}
        direction={{ base: 'column', md: 'row' }}
        alignItems="stretch"
        align="flex-start"
      >
        <Stack
          flex={0.5}
          spacing={{ base: 6, lg: 10 }}
          minH={{
            base: 'calc(100vh - 96px)',
            sm: 'calc(100vh - 104px)',
            md: 'calc(100vh - 142px)',
            lg: 'calc(100vh - 168px)',
            xl: 'calc(100vh - 184px)',
          }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: '5xl', sm: '6xl', lg: '7xl' }}
          >
            <Text
              fontSize={{ base: '32px', sm: '48px', lg: '80px' }}
              lineHeight={{ base: '40px', sm: '56px', lg: '80px' }}
              as={'span'}
              position={'relative'}
            >
              A Global Link System
            </Text>
          </Heading>
          <Text
            color={'black'}
            fontSize={{ base: '16px', md: '18px', lg: '22px' }}
            lineHeight={{ base: '24px', md: '26px', lg: '32px' }}
            paddingRight={{ base: 0, md: 16 }}
          >
            Woolball is global link systems that creates
            connections between people, dApps, DAOs and platforms in Web3.
            With Woolball you can easily build stuff like:
          </Text>
          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: 2, lg: 8 }}
            color={'black'}
            fontSize={{ base: '16px', sm: '18px', lg: '22px' }}
            lineHeight={{ base: '24px', sm: '26px', lg: '32px' }}
            fontWeight={'400'}
            verticalAlign={'middle'}
          >
            <UseCase>Reputation systems</UseCase>
            <UseCase>Web3 accounts systems</UseCase>
            <UseCase>On-chain contract</UseCase>
          </SimpleGrid>
          <ActionButtons />
        </Stack>
        <GiantLogo
          minH={{
            base: 'calc(100vh - 96px)',
            sm: 'calc(100vh - 104px)',
            md: 'calc(100vh - 142px)',
            lg: 'calc(100vh - 168px)',
            xl: 'calc(100vh - 184px)',
          }}
        />
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={20}
        my={{ base: 2, md: 20 }}
      >
        <Flex>
          <Text
            color={'black'}
            fontSize={{ base: '24px', md: '32px', lg: '32px' }}
            lineHeight={{ base: '32px', md: '40px', lg: '40px' }}
          >
            Woolball links are made between Woolball names.
            A presale of Woolball names to fund development is coming soon.
          </Text>
        </Flex>
        <Flex w={'100%'} align={'center'} flex={1} justify={'center'}>
          <NextLink href="/what-is-woolball" legacyBehavior passHref>
            <Link
              aria-label="Woolball Twitter"
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
                  read a whole article about woolball
                </Text>

                <ArrowIcon />
              </HStack>
            </Link>
          </NextLink>
        </Flex>
      </SimpleGrid>
      <Roadmap />
    </Layout>
  )
}
