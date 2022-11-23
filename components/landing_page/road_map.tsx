import { Flex, Image, Show } from '@chakra-ui/react'

export default function Roadmap() {
  return (
    <Flex my={28} w={'100%'} h={'100%'}>
      <Show above={'md'}>
        <Image
          alt={'Road Map'}
          w={'100%'}
          h={'100%'}
          src={'/images/roadmap.png'}
        />
      </Show>
      <Show below={'md'}>
        <Image
          alt={'Road Map'}
          w={'100%'}
          h={'100%'}
          src={'/images/roadmap-mobile.png'}
        />
      </Show>
    </Flex>
  )
}
