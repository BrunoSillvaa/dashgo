import { Box, Button, Stack } from '@chakra-ui/react'
import { PaginationButton } from './PaginationButton'

export function Pagination() {
  return (
    <Stack direction='row' mt='8' justify='space-between' align='center' spacing='6'>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        <PaginationButton number='1' isActive={true}/>
        <PaginationButton number='2'/>
        <PaginationButton number='3'/>
        <PaginationButton number='4'/>
      </Stack>
    </Stack>
  )
}
