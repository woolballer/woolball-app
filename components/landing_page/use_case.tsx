import { Stack, Image, Text, Flex, Show } from '@chakra-ui/react'
import React from 'react'

export function CheckmarkIcon() {
  return (
    <Image
      src={'/images/checkmark.png'}
      alt={'Checkmark'}
      width={{ lg: '56px', md: '36px', base: '20px' }}
      height={{ lg: '77px', md: '50px', base: '26px' }}
    />
  )
}

export default function UseCase({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction={{ base: 'row', md: 'column' }}>
      <CheckmarkIcon />
      <Flex flexDirection={'row'} alignItems={'center'}>
        <Text>{children}</Text>
      </Flex>
    </Stack>
  )
}
