import Layout from '../components/layout'
import { Flex, Heading, Stack, Text, Image, SimpleGrid } from '@chakra-ui/react'
import UseCase from '../components/landing_page/use_case'

export default function WhatsWoolball() {
  return (
    <Layout>
      <Stack
        pt={{ base: 6, sm: 8, md: 16, lg: 24, xl: 28 }}
        // pb={{ base: 16, sm: 12, md: 16, lg: 24, xl: 28 }}
        mb={{ base: 1 }}
        direction={'column'}
        alignItems="stretch"
        align="flex-start"
        maxW="3xl"
        spacing={{ base: 6, lg: 10 }}
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
          lineHeight={{ base: '24px', sm: '48px' }}
        >
          We introduce Woolball, a flat name system that uses links between
          names instead of subdomains.
        </Text>

        <Image
          align={'start'}
          w={'1633px'}
          h={'974x'}
          top={0}
          zIndex={100}
          src={'/images/what-is-woolball-bg.png'}
          alt={'what is woolball'}
        />

        <Text
          fontSize={{ base: '14px', sm: '18px' }}
          lineHeight={{ base: '22px', sm: '28px' }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
          <br />
          <br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
          <br />
          <br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </Text>
        <SimpleGrid
          columns={{ base: 1 }}
          spacing={{ base: 2, lg: 8 }}
          color={'black'}
          fontSize={{ base: '16px', sm: '18px', lg: '22px' }}
          lineHeight={{ base: '24px', sm: '26px', lg: '32px' }}
          fontWeight={'400'}
          verticalAlign={'middle'}
        >
          <UseCase variant="other">Structured DAOs</UseCase>
          <UseCase variant="other">Web3 accounts</UseCase>
          <UseCase variant="other">Reputation score for names</UseCase>
        </SimpleGrid>
        <Text
          fontSize={{ base: '14px', sm: '18px' }}
          lineHeight={{ base: '22px', sm: '28px' }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Text>
        <Text
          fontSize={{ base: '14px', sm: '18px' }}
          lineHeight={{ base: '22px', sm: '28px' }}
          fontWeight={'semibold'}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Text>
        <Text
          fontSize={{ base: '14px', sm: '18px' }}
          lineHeight={{ base: '22px', sm: '28px' }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Text>
      </Stack>
    </Layout>
  )
}
