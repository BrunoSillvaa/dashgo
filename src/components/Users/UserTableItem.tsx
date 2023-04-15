import { Box, Text, Button, Checkbox, Icon, Td, Tr, useBreakpointValue } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

export function UserTableItem() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Tr>
      <Td px={['0', '6']} >
        <Checkbox colorScheme='pink' />
      </Td>
      <Td>
        <Box>
          <Text fontWeight='bold' fontSize={['sm', 'medium']}>Bruno Silva</Text>
          <Text fontSize={['x-small', 'sm']} color='gray.300'>
            brunosilva@gmail.com
          </Text>
        </Box>
      </Td>
      <Td fontSize={['sm', 'medium']}>04 de Abril, 2023</Td>
      { isWideVersion &&
        <Td textAlign='end'>
          <Button
            as='a'
            size='sm'
            fontSize='sm'
            colorScheme='green'
            leftIcon={<Icon as={RiPencilLine} />}
          >
            Editar
          </Button>
        </Td>
      }
    </Tr>
  )
}
