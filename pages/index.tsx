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

export default function Home() {
  return (
    <Layout>
      <Flex
        pt={{ base: 6, sm: 8, md: 16, lg: 24, xl: 28 }}
        // pb={{ base: 16, sm: 12, md: 16, lg: 24, xl: 28 }}
        mb={{ base: 1 }}
        direction={{ base: 'column', md: 'row' }}
        alignItems="stretch"
        align="flex-start"
      >
        <Stack
          flex={0.5}
          spacing={{ base: 10, md: 10 }}
          // marginBottom={{ base: 20, md: 10 }}
          minH={{
            base: 'calc(100vh - 96px)',
            sm: 'calc(100vh - 104px)',
            md: 'calc(100vh - 136px)',
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
              fontSize={{ base: '32px', sm: '80px' }}
              lineHeight={{ base: '40px', sm: '80px' }}
              as={'span'}
              position={'relative'}
            >
              A name system with links
            </Text>
          </Heading>
          <Text
            color={'black'}
            fontSize={{ base: '16px', md: '22px' }}
            lineHeight={{ base: '24px', md: '32px' }}
            paddingRight={{ base: 0, md: 16 }}
          >
            Woolball is a Name System where names can link to each other.
            Woolball is an extension to the subdomain system, everything you can
            do with subdomains, you can do with links.
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 2, sm: 3, md: 4, lg: 8 }}
            color={'black'}
            fontSize={{ base: '16px', sm: '20px', md: '22px' }}
            lineHeight={'32px'}
            fontWeight={'400'}
            verticalAlign={'middle'}
          >
            <UseCase>Structured DAOs</UseCase>
            <UseCase>Web3 accounts</UseCase>
            <UseCase>Reputation score for names</UseCase>
          </SimpleGrid>
          <ActionButtons />
        </Stack>
        <GiantLogo
          minH={{
            base: 'calc(100vh - 96px)',
            sm: 'calc(100vh - 104px)',
            md: 'calc(100vh - 136px)',
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
            fontSize={{ base: '24px', md: '40px' }}
            lineHeight={{ base: '32px', md: '48px' }}
          >
            We introduce Woolball, a flat name system that uses links between
            names instead of subdomains.
          </Text>
        </Flex>
        <Flex w={'100%'} align={'center'} flex={1} justify={'center'}>
          <Link
            aria-label="Woolball Twitter"
            href="/what-is-woolball"
            p="1"
            color={'woolball.400'}
            _hover={{
              color: 'woolball.300',
              borderColor: 'woolball.400',
              bg: 'woolball.50',
            }}
          >
            <HStack>
              <Text fontSize={'16px'}>read whole article about woolball</Text>

              <ArrowIcon />
            </HStack>
          </Link>
        </Flex>
      </SimpleGrid>
      <Roadmap />
    </Layout>
  )
}
