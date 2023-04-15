import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { UserTableItem } from '../../components/Users/UserTableItem'
import { Pagination } from '../../components/Pagination'

export function Users() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  
  return (
    <Flex direction='column'>
      <Header />

      <Flex w='100%' maxW={1480} m='auto' my={['0', '6']} px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuarios
            </Heading>

            <Button
              as='a'
              size='sm'
              fontSize='m'
              colorScheme='blue'
              cursor='pointer'
              leftIcon={<Icon as={RiAddLine} />}
            >
              <Link to='/users/create'>Criar novo</Link>
            </Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['0', '6']} color='gray.300'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuario</Th>
                <Th>Data de cadastro</Th>
                {isWideVersion && <Th/>}
              </Tr>
            </Thead>

            <Tbody>
              <UserTableItem />
              <UserTableItem />
              <UserTableItem />
              <UserTableItem />
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Flex>
  )
}
