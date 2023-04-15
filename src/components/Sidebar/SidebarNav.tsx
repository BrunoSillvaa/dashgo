import { Stack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title='GERAL'>
        <NavLink
          linkTitle='Dashboard'
          linkIcon={RiDashboardLine}
          linkURL='/dashboard'
        />
        <NavLink
          linkTitle='Usuários'
          linkIcon={RiContactsLine}
          linkURL='/users'
        />
      </NavSection>

      <NavSection title='AUTOMAÇÃO'>
        <NavLink
          linkTitle='Formulários'
          linkIcon={RiInputMethodLine}
          // linkURL='/'
        />

        <NavLink
          linkTitle='Automação'
          linkIcon={RiGitMergeLine}
          // linkURL='/'
        />
      </NavSection>
    </Stack>
  )
}
