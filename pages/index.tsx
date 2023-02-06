import {
  Stack,
  HStack,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Link,
  VStack,
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
              The ID System with Links
            </Text>
          </Heading>
          <VStack spacing={{ base: 6, lg: 10 }} align={'left'}>
            <Text
              color={'black'}
              fontSize={{ base: '16px', md: '18px', lg: '22px' }}
              lineHeight={{ base: '24px', md: '26px', lg: '32px' }}
              paddingRight={{ base: 0, md: 16 }}
            >
              Woolball is the ID system that uses links to create on-chain
              connections between people, dApps, DAOs and platforms in Web3.{' '}
            </Text>
            <VStack spacing={{ base: 4, lg: 4 }} align={'left'}>
              <Text
                color={'black'}
                fontSize={{ base: '16px', md: '18px', lg: '22px' }}
                lineHeight={{ base: '24px', md: '26px', lg: '32px' }}
                paddingRight={{ base: 0, md: 16 }}
              >
                What can you build with Woolball?
              </Text>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 2, lg: 5 }}
                color={'black'}
                fontSize={{ base: '16px', sm: '18px', lg: '22px' }}
                lineHeight={{ base: '24px', sm: '26px', lg: '32px' }}
                fontWeight={'400'}
                verticalAlign={'middle'}
              >
                <UseCase>Reputation systems</UseCase>
                <UseCase>Web3 accounts systems</UseCase>
                <UseCase>On-chain agreements</UseCase>
                <UseCase>Social dApps</UseCase>
                <UseCase>Spam Filters</UseCase>
                <UseCase>Structured DAOs</UseCase>
              </SimpleGrid>
            </VStack>
          </VStack>

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
        columns={1}
        spacing={20}
        mt={{ base: 2, md: 20 }}
        mb={{ base: 2, md: 24 }}
        color={'black'}
      >
        <VStack
          paddingTop="40px"
          spacing="5"
          alignItems="flex-start"
          fontSize={{ base: '24px', md: '32px', lg: '32px' }}
          lineHeight={{ base: '32px', md: '40px', lg: '40px' }}
        >
          <Text fontWeight={'semibold'}>Who is Woolball for?</Text>
          <Text
            as="p"
            fontSize={{ base: '24px', md: '32px', lg: '32px' }}
            lineHeight={{ base: '32px', md: '40px', lg: '40px' }}
          >
            Woolball is built for developers. With Woolball you can easily
            integrate Web3 accounts, SBT tokens, and social connections to your
            project.
          </Text>
        </VStack>
      </SimpleGrid>
      <Roadmap />
    </Layout>
  )
}
