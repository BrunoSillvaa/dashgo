import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      { showProfileData && 
        <Box mr='4' textAlign='right'>
          <Text>Bruno Silva</Text>
          <Text color='gray.300' fontSize='small'>
            bruno.silva@gmail.com
          </Text>
        </Box>
      }

      <Avatar
        size={['sm', 'md']}
        name='Bruno Silva'
        src='http://github.com/BrunoSillvaa.png'
      />
    </Flex>
  )
}
