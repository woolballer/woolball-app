import { Stack, Image, Text, Flex, Show } from '@chakra-ui/react'
import React from 'react'

export function CheckmarkIcon({ variant }: { variant?: 'homepage' | 'other' }) {
  const imageWidth: any =
    variant === 'other'
      ? { base: '20px' }
      : { lg: '56px', md: '36px', base: '20px' }
  const imageHeight: any =
    variant === 'other'
      ? { base: '26px' }
      : { lg: '77px', md: '50px', base: '26px' }
  return (
    <Image
      src={'/images/checkmark.png'}
      alt={'Checkmark'}
      width={imageWidth}
      height={imageHeight}
    />
  )
}

export default function UseCase({
  children,
  variant,
}: {
  children: React.ReactNode
  variant?: 'homepage' | 'other'
}) {
  return (
    <Stack direction={'row'}>
      <Text fontWeight={'bold'} color={'orange.400'}>
        #
      </Text>
      <Flex flexDirection={'row'} alignItems={'center'}>
        <Text fontWeight={'bold'}>{children}</Text>
      </Flex>
    </Stack>
  )
}
