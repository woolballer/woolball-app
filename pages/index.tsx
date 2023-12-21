import {
  Stack,
  HStack,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Link,
  VStack,
  Input,
} from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useState } from "react";
import GiantLogo from '../components/landing_page/giant_logo'
import Roadmap from '../components/landing_page/road_map'
import ActionButtons from '../components/landing_page/action_buttons'
import UseCase from '../components/landing_page/use_case'
import Layout from '../components/layout'

export default function Home() {
  const [name, setName] = useState('');

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
            xl: 'calc(100vh - 194px)',
          }}
        >

          <Alert status='info'>
            <AlertIcon />
              This early Woolball version was shipped to enable 
              using Citadef. It's incomplete, dirty and lives on 
              Optimism Goerli Testnet.
          </Alert>

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
              A social name system
            </Text>
          </Heading>
          <VStack spacing={{ base: 6, lg: 10 }} align={'left'}>
            <Text
              color={'black'}
              fontSize={{ base: '16px', md: '18px', lg: '22px' }}
              lineHeight={{ base: '24px', md: '26px', lg: '32px' }}
              paddingRight={{ base: 0, md: 16 }}
            >
              Woolball IDs gets their power from what other IDs say about them{' '}
            </Text>
            <VStack spacing={{ base: 4, lg: 4 }} align={'left'}>
              <Input placeholder='Choose your ID' value={name} onInput={e => setName(e.target.value)}/>
              <ActionButtons name={name} />
              
            </VStack>
          </VStack>

        </Stack>
        <GiantLogo
          minH={{
            base: 'calc(100vh - 96px)',
            sm: 'calc(100vh - 104px)',
            md: 'calc(100vh - 142px)',
            lg: 'calc(100vh - 168px)',
            xl: 'calc(100vh - 194px)',
          }}
        />
      </Flex>
    </Layout>
  )
}
