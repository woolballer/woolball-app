import Layout from '../components/layout'
import {
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Show,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import { DISCORD_LINK } from '../components/constants/social_profiles'

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
          Woolball is an ID system with links. 
          Wollball is onchain, on Ethereum Mainnet and Optimism. 
          Links are tokens, holding the data on the relations between the IDs.
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
          spacing={{ base: 4, lg: 6 }}
          fontSize={{ base: '14px', sm: '18px' }}
          lineHeight={{ base: '22px', sm: '28px' }}
        >
          <p>
            In traditional name systems like DNS and ENS, names serve as
            unique IDs for websites or blockchain addresses.
            Woolball takes this a step further by allowing names to be linked together,
            creating a network of interconnected identities.</p>

          <p>
            One of the key advantages of Woolball is its ability to create
            social dependencies within the Web3 ecosystem.
            When two entities are linked, they are essentially establishing
            a relationship with each other. This allows for the development
            of new applications and use cases that rely on
            evaluating the relationships and reputations of entities
            within the system.
          </p>

          <p>
            For example, a social dApp built on top of Woolball could
            use links to evaluate the trustworthiness of strangers,
            or to filter out potential scams or malicious actors.
          </p>

          <p>
            Unlike traditional name systems, which use hierarchical subdomains
            to organize names, Woolball uses a cyclic, flat structure where
            names (IDs) are linked together with a hash symbol.
          </p>

          <p>
            For example, `alice#` would be the Woolball ID for the entity
             named Alice, and a link from Alice to Bob would be
             written as `alice#bob`.
          </p>

          <p>
            Overall, Woolball offers a unique approach for web3 IDs. 
            By allowing for the creation of links between IDs,
            it enables the development of new applications
            and use cases that rely the relationships
             and reputations of entities within the system.
             This opens up exciting possibilities for the
             future of decentralized identity and reputation management.
          </p>

          <Heading as="h3" size={{ base: 'lg', md: 'xl' }}>
            Use Cases
          </Heading>
          <p>
            Woolball use cases are mostly based on ongoing interactions between
            entities within the Web3 ecosystem.
          </p>

          <p>
            One potential use case is the creation of a reputation system. With
            Woolball, entities can be assigned a reputation score based on the
            number and quality of links they have with other entities. This
            could be used to develop spam filters or social credit systems,
            allowing users to easily evaluate the trustworthiness of others
            within the system.
          </p>

          <p>
            Another use case is the implementation of a Woolball-based contract
            between DAOs or projects. In this scenario, each link represent
            a contractual agreement between two entities, and the link properties
            and functions specify the content of the agreement and its enforcement
            rules.
          </p>

          <p>
            Advanced applications of Woolball could include its use in DeFi
            apps. For example, a DeFi app could use Woolball to create loan
            links collaterized by yield farming links from a different app,
            opening app opportunities for complex DeFi apps.
          </p>

            <p>
             Finally, Woolball could also be used as an easy-to-integrate web3 accounts system. 
             In this case, each account on a platform would be represented as a link between 
             the user&apos;s ID and the platform&apos;s ID. 
             This would allow users to easily log in with their regular Woolball ID, 
             while still enabling the platform to track and manage their usage data.</p>

            <Heading as="h3" size={{ base: 'lg', md: 'xl' }}>
              Current State
            </Heading>
            <p>Woolball is being built as we talk. We are a team of around 10 people working on it hard.</p>

            <p>Currently we are:</p>
            <ul>
              <li>Writing specs, this includes a proposal for an ERC a yellow paper,</li>
              <li>Building a first implementation of Woolball in Solidity,</li>
              <li>Improving the theory of Woolball and make first usecases.</li>
            </ul>

          <p>
            <Link href={DISCORD_LINK}>Join our Discord</Link> to be part of it!
          </p>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default WhatIsWoolballPage
