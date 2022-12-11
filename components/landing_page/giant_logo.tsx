import { Flex, Image, useColorModeValue } from '@chakra-ui/react'

export default function GiantLogo(props: any) {
  return (
    <Flex
      flex={0.5}
      justify={'center'}
      align={'start'}
      position={'relative'}
      {...props}
    >
      <HashBg
        justify={'center'}
        align={'start'}
        color={useColorModeValue('red.50', 'red.400')}
        mt={'5%'}
      />

      <Image
        alt={'Hash Logo'}
        position={'absolute'}
        align={'start'}
        w={'526px'}
        h={'700x'}
        src={'/images/giant-hash-sign.png'}
      />
    </Flex>
  )
}

export const HashBg = (props: any) => {
  return (
    <Flex width={'90%'} paddingTop={'90%'} position={'relative'} {...props}>
      <Flex
        width={'90%'}
        position={'absolute'}
        top={'5%'}
        left={'5%'}
        paddingTop={'90%'}
        rounded={'50%'}
        bg={'#B1F1FF'}
        zIndex={-1}
        {...props}
      />
    </Flex>
  )
}
