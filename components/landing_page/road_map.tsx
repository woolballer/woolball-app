import {
  Flex,
  Image,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Roadmap() {
    return (
      <Flex my={28} w={'100%'} h={'100%'}>
        <Image
          alt={'Road Map'}
          w={'100%'}
          h={'100%'}
          src={'/images/roadmap.png'}
         
        />
      </Flex>
    )
  }
  