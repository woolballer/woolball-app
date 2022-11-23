import Layout from '../components/layout'
import { Flex, Heading, Text } from '@chakra-ui/react'

export default function WhatsWoolball() {
  return (
    <Layout>
      <Flex
        pt={{ base: 6, sm: 8, md: 16, lg: 24, xl: 28 }}
        // pb={{ base: 16, sm: 12, md: 16, lg: 24, xl: 28 }}
        mb={{ base: 1 }}
        direction={'column'}
        alignItems="stretch"
        align="flex-start"
        maxW="3xl"
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '5xl', sm: '6xl', lg: '7xl' }}
        >
          <Text
            fontSize={{ base: '32px', sm: '80px' }}
            lineHeight={{ base: '40px', sm: '80px' }}
            as={'span'}
            position={'relative'}
          >
            What&apos;s Woolball?
          </Text>
        </Heading>
        <Text
          fontSize={{ base: '16px', sm: '30px', md: '40px' }}
          lineHeight={'48px'}
        >
          We introduce Woolball, a flat name system that uses links between
          names instead of subdomains.
        </Text>
      </Flex>
    </Layout>
  )
}
