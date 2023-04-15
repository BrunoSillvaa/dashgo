import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useContext, useEffect, createContext, ReactNode } from 'react'
import { useLocation } from 'react-router-dom';

type SidebarDrawerContextData = UseDisclosureReturn

interface SidebarDrawerProviderProps {
  children: ReactNode
}

export const SidebarDrawerContext = createContext(
  {} as SidebarDrawerContextData
)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const location = useLocation()
  
  useEffect(() => {
    disclosure.onClose();
  }, [location.pathname])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
