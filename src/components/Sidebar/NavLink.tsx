import { Text, Icon, Link, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
import { Link as RouterLink } from 'react-router-dom'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  linkTitle: string
  linkURL: string
  linkIcon: IconType
}

export function NavLink({ linkTitle, linkIcon, linkURL, ...rest }: NavLinkProps) {
  return (
    <ActiveLink to={linkURL}>
      <Link display='flex' align='center' {...rest}>
        <Icon as={linkIcon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>{linkTitle}</Text>
      </Link>
    </ActiveLink>
  )
}
