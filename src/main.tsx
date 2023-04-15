import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <SidebarDrawerProvider>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </ChakraProvider>
    </SidebarDrawerProvider>
  </BrowserRouter>
)
