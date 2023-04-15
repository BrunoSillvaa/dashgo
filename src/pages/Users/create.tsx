import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Form/Input';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w='100%' maxW={1480} m='auto' my={['0', '6']} px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Heading size={['md', 'lg']} fontWeight='normal'>Criar usuario</Heading>

          <Divider my='6' borderColor='gray.700'/>

          <VStack spacing={['2', '8']}>
            <SimpleGrid minChildWidth='240px' spacing={['2', '8']} w='100%'>
              <Input name='name' label='Nome completo' size='md'/>
              <Input name='email' type='email' label='E-mail' size='md'/>
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['2', '8']} w='100%'>
              <Input name='password' type='password' label='Senha' size='md'/>
              <Input name='password-confirmation' type='password' label='Confirmação de senha' size='md'/>
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Button colorScheme='whiteAlpha' size='sm'>
                <Link to='/users'>Cancelar</Link>
              </Button>
              <Button colorScheme='blue' size='sm'>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}