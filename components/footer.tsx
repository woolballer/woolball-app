import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
  Flex,
  VStack,
  HStack,
} from '@chakra-ui/react'
import SocialIcons from '../components/social_icons'
import { ReactNode } from 'react'
import Logo from './svgs/logo'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box bg={'transparent'} color={useColorModeValue('gray.700', 'gray.200')} my={15}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        color={'woolball.400'}
      >
        <Stack direction={'row'} display={{ base: 'none', md: 'flex' }} spacing={5} fontWeight={"bold"} >
            <Link href="/" color={"woolball.400"}  _hover={{ color: 'woolball.300', textDecoration: "none" }}>
                What&apos;s Woolball?
            </Link>
            <Link href="/" color={"woolball.400"}  _hover={{ color: 'woolball.300', textDecoration: "none" }}>
                
                Docs
            
            </Link>
            </Stack>
        <Stack direction={'row'} spacing={6}>
          <SocialIcons />
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <HStack h={'full'}>
            <Stack>
              <Logo width="184px" height="31px" />
            </Stack>
            
            <VStack  h={"100%"} alignSelf="stretch">
              <Text fontSize={'12px'} color={'black'} >
                  ©2022
              </Text>
            </VStack >
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}
