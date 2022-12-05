import { Icon, Link, Wrap } from '@chakra-ui/react'
import { SocialProfileType, SOCIAL_PROFILES } from './constants/social_profiles'

function SocialIcon({ socialProfile }: { socialProfile: SocialProfileType }) {
  return (
    <Link
      isExternal
      aria-label={socialProfile.label}
      href={socialProfile.link}
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
        as={socialProfile.image}
        display="block"
        transition="color 0.2s"
        h="5"
      />
    </Link>
  )
}

export default function SocialIcons(props: any) {
  return (
    <Wrap {...props}>
      {SOCIAL_PROFILES.map((socialProfile: any) => (
        <SocialIcon socialProfile={socialProfile} key={socialProfile.label} />
      ))}
    </Wrap>
  )
}
