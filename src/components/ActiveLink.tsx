import { cloneElement, ReactElement } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { pathname } = useLocation()
  let isActive = false

  if (pathname === rest.to) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'blue.500' : 'gray.50'
      })}
    </Link>
  )
}