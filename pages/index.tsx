import { NextPage } from 'next'
import Link from 'next/link'
import { Box, Text, Image, SimpleGrid } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        <Link href="/1">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Image
              borderRadius="md"
              src="/img/nigaoe_miyazawa_kenji.png"
              boxSize="250px"
              objectFit="cover"
              alt="宮澤 賢治"
            />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              〔雨ニモマケズ〕
            </Text>
            <Text mt={2}>宮澤 賢治</Text>
          </Box>
        </Link>
        <Link href="/2">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Image
              borderRadius="md"
              src="/img/nigaoe_koizumi_yakumo.png"
              boxSize="250px"
              objectFit="cover"
              alt="小泉 八雲"
            />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              雪女
            </Text>
            <Text mt={2}>小泉 八雲</Text>
          </Box>
        </Link>
        <Link href="/3">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Image
              borderRadius="md"
              src="/img/akutagawa_ryunosuke.png"
              boxSize="250px"
              objectFit="cover"
              alt="芥川 竜之介"
            />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              羅生門
            </Text>
            <Text mt={2}>芥川 竜之介</Text>
          </Box>
        </Link>
        <Link href="/4">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Image
              borderRadius="md"
              src="/img/dazai_osamu.png"
              boxSize="250px"
              objectFit="cover"
              alt="太宰 治"
            />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              走れメロス
            </Text>
            <Text mt={2}>太宰 治</Text>
          </Box>
        </Link>
      </SimpleGrid>
    </>
  )
}

export default Home
