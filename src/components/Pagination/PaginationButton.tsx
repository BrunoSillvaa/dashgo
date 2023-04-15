import { Button } from '@chakra-ui/react';

interface PaginationButtonProps {
  number: string
  isActive?: boolean
}

export function PaginationButton({ number, isActive = false }: PaginationButtonProps) {
  return (
    <Button
      size='sm'
      font-size='xs'
      isActive={isActive}
      width='4'
      bg='gray.700'
      _hover={{
        bg: 'gray.500'
      }}
      _active={{
        bgColor: 'blue.500',
        cursor: 'default'
      }}
    >
      { number }
    </Button>
  )
}
