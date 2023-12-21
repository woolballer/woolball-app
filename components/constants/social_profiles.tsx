import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

export interface SocialProfileType {
  image: IconType
  link: string
  label: string
}

export const GITHUB_LINK: string = 'https://github.com/woolballers'

export const SOCIAL_PROFILES: SocialProfileType[] = [
  {
    image: AiFillGithub,
    link: 'https://github.com/woolballers',
    label: 'Woolball Github',
  },
]
