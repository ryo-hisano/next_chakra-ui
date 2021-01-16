import { NextPage } from 'next'
import Link from 'next/link'
import { Box, Text, SimpleGrid, Center } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout title="TOPページ" description="TOPページの説明文です。" slug="">
      <SimpleGrid columns={[1, 2]} spacing={4}>
        <Link href="/1">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Center>
              <Image
                src="/img/nigaoe_miyazawa_kenji.png"
                width={250}
                height={250}
                objectFit="cover"
                alt="宮澤 賢治"
              />
            </Center>
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              〔雨ニモマケズ〕
            </Text>
            <Text mt={2}>宮澤 賢治</Text>
          </Box>
        </Link>
        <Link href="/2">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Center>
              <Image
                src="/img/nigaoe_koizumi_yakumo.png"
                width={250}
                height={250}
                objectFit="cover"
                alt="小泉 八雲"
              />
            </Center>
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              雪女
            </Text>
            <Text mt={2}>小泉 八雲</Text>
          </Box>
        </Link>
        <Link href="/3">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Center>
              <Image
                src="/img/akutagawa_ryunosuke.png"
                width={250}
                height={250}
                objectFit="cover"
                alt="芥川 竜之介"
              />
            </Center>
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              羅生門
            </Text>
            <Text mt={2}>芥川 竜之介</Text>
          </Box>
        </Link>
        <Link href="/4">
          <Box p={4} borderWidth="1px" cursor="pointer">
            <Center>
              <Image
                src="/img/dazai_osamu.png"
                width={250}
                height={250}
                objectFit="cover"
                alt="太宰 治"
              />
            </Center>
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              走れメロス
            </Text>
            <Text mt={2}>太宰 治</Text>
          </Box>
        </Link>
      </SimpleGrid>
    </Layout>
  )
}

export default Home
