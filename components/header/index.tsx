import React from 'react'
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Link,
  VStack,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from 'react-icons/ai'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import Logo from '../svgs/logo'
import ConnectWalletBtn from './connect_wallet_btn'
import SocialIcons from '../social_icons'

export default function Header() {
  const mobileNav = useDisclosure()

  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  const bg = 'transparent'
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [y, setY] = React.useState(0)
  const height = ref.current ? ref.current.getBoundingClientRect() : 0

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  )
  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex justify="space-between"  w="full" h="full" >
              <Flex align="center">
                <Link href="/">
                  <HStack>
                    <Logo width="247px" height="43px" />
                  </HStack>
                </Link>
              </Flex>
              <HStack display={{ base: 'none', md: 'flex' }} spacing={6} fontWeight={"bold"} >
                <Link href="/" color={"woolball.400"}  _hover={{ color: 'woolball.300', textDecoration: "none" }}>
                  What&apos;s Woolball?
                </Link>
                <Link href="/" color={"woolball.400"}  _hover={{ color: 'woolball.300', textDecoration: "none" }}>
                  
                    Docs
                
                </Link>
              </HStack>
            </Flex>
            

            <Flex justify="flex-end" w="full" maxW="824px" align="center">
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
                <SocialIcons />
              </HStack>
             
             
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: 'inherit' }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  )
}
