import { Box, Text, Flex, SimpleGrid, theme } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import Chart from 'react-apexcharts'
import { Sidebar } from '../../components/Sidebar'

const chartOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    fireColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-01T00:00:00.000Z',
      '2021-03-02T00:00:00.000Z',
      '2021-03-03T00:00:00.000Z',
      '2021-03-04T00:00:00.000Z',
      '2021-03-05T00:00:00.000Z',
      '2021-03-06T00:00:00.000Z',
      '2021-03-07T00:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [{ name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }]

const series2 = [{ name: 'series1', data: [12, 54, 78, 23, 115, 89, 36] }]

export const Dashboard = () => {
  return (
    <Flex direction='column'>
      <Header />

      <Flex w='100%' maxW={1480} m='auto' my='6' px='6'>
        <Sidebar />

        <SimpleGrid flex='1' gap='4' align='flex-start'>
          <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='lg' mb='4'>
              Incritos da semana
            </Text>
            <Chart options={chartOptions} series={series} type='area' height={160} />
          </Box>

          <Box p={['6', '8']} bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>
              Taxa de abertura
            </Text>
            <Chart options={chartOptions} series={series2} type='area' height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
