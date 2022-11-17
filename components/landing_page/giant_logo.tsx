import {
    Flex,
    Image,
    chakra,
    useColorModeValue,
  } from '@chakra-ui/react'


export default function GiantLogo(){
    return (<Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
      >
        <HashBg
          align={'center'}
          zIndex={-1}
          color={useColorModeValue('red.50', 'red.400')}
        />

        <Image
          alt={'Hash Logo'}
          position={'absolute'}
          maxW={'none'}
          align={'center'}
          w={'661px'}
          h={'800x'}
          ml={'30px'}
          src={'/images/giant-hash-sign.png'}
        />
      </Flex>)
}

export const HashBg = (props: any) => {
    return (
      <chakra.div
        width={'531px'}
        height={'531px'}
        rounded={'50%'}
        bg={'#B1F1FF'}
        {...props}
      />
    )
  }
  