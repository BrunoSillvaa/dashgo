import { Button, Flex, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Form/Input'

export const SignIn = () => {
  return (
    <Flex w='100%' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        w='100%'
        maxW={360}
        p='8'
        bg='gray.800'
        borderRadius={8}
        flexDir='column'
      >
        <Stack spacing='4'>
          <Input name='email' type='email' label='E-mail' />
          <Input name='password' type='password' label='Password' />
        </Stack>

        <Button type='submit' mt='6' colorScheme='blue' size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
