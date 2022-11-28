import { Icon, Link, Wrap } from '@chakra-ui/react'
import { FaDiscord } from 'react-icons/fa'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'

export default function SocialIcons(props: any) {
  return (
    <Wrap {...props}>
      <Link
        isExternal
        aria-label="Woolball Twitter"
        href="#"
        borderRadius="full"
        border="1px solid"
        p="1"
        color={'woolball.400'}
        _hover={{
          color: 'woolball.300',
          borderColor: 'woolball.400',
          bg: 'woolball.50',
        }}
      >
        <Icon
          as={AiOutlineTwitter}
          display="block"
          transition="color 0.2s"
          w="5"
          h="5"
        />
      </Link>
      <Link
        isExternal
        aria-label="Woolball Github"
        href="https://github.com/WoolBall-names"
        borderRadius="full"
        border="1px solid"
        p="1"
        color={'woolball.400'}
        _hover={{
          color: 'woolball.300',
          borderColor: 'woolball.400',
          bg: 'woolball.50',
        }}
      >
        <Icon
          as={AiFillGithub}
          display="block"
          transition="color 0.2s"
          w="5"
          h="5"
        />
      </Link>
      <Link
        isExternal
        aria-label="Woolball Discord"
        href="#"
        borderRadius="full"
        border="1px solid"
        p="1"
        color={'woolball.400'}
        _hover={{
          color: 'woolball.300',
          borderColor: 'woolball.400',
          bg: 'woolball.50',
        }}
      >
        <Icon
          as={FaDiscord}
          display="block"
          transition="color 0.2s"
          w="5"
          h="5"
        />
      </Link>
    </Wrap>
  )
}
