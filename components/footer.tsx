import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  HStack,
  Flex,
} from '@chakra-ui/react'
import SocialIcons from '../components/social_icons'
import NextLink from 'next/link'

import LogoReverse from './svgs/logo_reverse'

export default function Footer() {
  return (
    <Box
      bg={'transparent'}
      color={useColorModeValue('gray.700', 'gray.200')}
      my={{ base: 2, sm: 4 }}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={{ base: 2, md: 6 }}
        direction={{ base: 'column', sm: 'row' }}
        spacing={4}
        justify={{ base: 'center', sm: 'space-between' }}
        align={'center'}
        color={'woolball.400'}
      >
        <Stack
          direction={'row'}
          display={{ base: 'none', md: 'flex' }}
          spacing={5}
          fontWeight={'bold'}
        >
          <NextLink href="/what-is-woolball" legacyBehavior passHref>
            <Link
              color={'woolball.400'}
              _hover={{ color: 'woolball.300', textDecoration: 'none' }}
            >
              What&apos;s Woolball?
            </Link>
          </NextLink>
          {process.env.SHOW_DOCS_LINK === '1' && (
            <Link
              href="/"
              color={'woolball.400'}
              _hover={{ color: 'woolball.300', textDecoration: 'none' }}
            >
              Docs
            </Link>
          )}
        </Stack>
        <Stack direction={'row'}>
          <SocialIcons spacing={{ base: 6, sm: 5 }} />
        </Stack>
        <Flex direction={'row'} align={'end'}>
          <HStack h={'full'}>
            <Stack>
              <LogoReverse width="184px" height="31px" />
            </Stack>

            <Flex h={'full'} align={'end'} justify={'end'}>
              <Text fontSize={'12px'} color={'black'}>
                ©2022
              </Text>
            </Flex>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
