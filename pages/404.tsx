import React from 'react'
import { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import Layout from '../components/layout'

const Error: NextPage = () => {
  return (
    <Layout title="ページがありません。" description="ページがありません。">
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        ページがありません。
      </Text>
    </Layout>
  )
}

export default Error
