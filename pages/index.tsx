import { NextPage } from 'next'
import Link from 'next/link'
import { Box, Text, Image, SimpleGrid } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        <Link href="/1">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Image borderRadius="md" src="/img/nigaoe_miyazawa_kenji.png" />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              〔雨ニモマケズ〕
            </Text>
            <Text mt={2}>宮澤賢治</Text>
          </Box>
        </Link>
        <Link href="/1">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Image borderRadius="md" src="/img/nigaoe_miyazawa_kenji.png" />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              〔雨ニモマケズ〕
            </Text>
            <Text mt={2}>宮澤賢治</Text>
          </Box>
        </Link>
        <Link href="/1">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Image borderRadius="md" src="/img/nigaoe_miyazawa_kenji.png" />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              〔雨ニモマケズ〕
            </Text>
            <Text mt={2}>宮澤賢治</Text>
          </Box>
        </Link>
      </SimpleGrid>
    </>
  )
}

export default Home
