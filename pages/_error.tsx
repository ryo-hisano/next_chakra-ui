import Head from 'next/head'
import { NextPage } from 'next'

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>ページがありません。</title>
        <meta name="description" content="ページがありません。" />
        <meta property="og:title" content="ページがありません。" />
        <meta property="og:description" content="ページがありません。" />
        <meta property="og:url" content="" />
      </Head>
      <p>ページがありません。</p>
    </>
  )
}

export default Custom404
