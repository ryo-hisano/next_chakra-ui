import Head from 'next/head'
import { NextPage } from 'next'
import { Badge, Image, Heading, Text } from '@chakra-ui/react'

const Post: NextPage = () => {
  return (
    <>
      <Head>
        <title>〔雨ニモマケズ〕</title>
        <meta name="description" content="〔雨ニモマケズ〕宮澤 賢治" />
        <meta property="og:title" content="〔雨ニモマケズ〕" />
        <meta property="og:description" content="〔雨ニモマケズ〕宮澤 賢治" />
        <meta property="og:url" content="https://nontan-next-chakra.vercel.app/1/" />
      </Head>
      <Image borderRadius="md" src="/img/nigaoe_miyazawa_kenji.png" />
      <Heading as="h2" size="lg" mt={4}>
        〔雨ニモマケズ〕
        <Badge ml={4} fontSize={{ base: '14px', lg: '16px' }}>
          宮澤 賢治
        </Badge>
      </Heading>
      <Text mt={4}>
        雨ニモマケズ
        <br />
        風ニモマケズ
        <br />
        雪ニモ夏ノ暑サニモマケヌ
        <br />
        丈夫ナカラダヲモチ
        <br />
        慾ハナク
        <br />
        決シテ瞋ラズ
        <br />
        イツモシヅカニワラッテヰル
        <br />
        一日ニ玄米四合ト
        <br />
        味噌ト少シノ野菜ヲタベ
        <br />
        アラユルコトヲ
        <br />
        ジブンヲカンジョウニ入レズニ
        <br />
        ヨクミキキシワカリ
        <br />
        ソシテワスレズ
        <br />
        野原ノ松ノ林ノ蔭ノ
        <br />
        小サナ萓ブキノ小屋ニヰテ
        <br />
        東ニ病気ノコドモアレバ
        <br />
        行ッテ看病シテヤリ
        <br />
        西ニツカレタ母アレバ
        <br />
        行ッテソノ稲ノ朿ヲ負ヒ
        <br />
        南ニ死ニサウナ人アレバ
        <br />
        行ッテコハガラナクテモイヽトイヒ
        <br />
        北ニケンクヮヤソショウガアレバ
        <br />
        ツマラナイカラヤメロトイヒ
        <br />
        ヒドリノトキハナミダヲナガシ
        <br />
        サムサノナツハオロオロアルキ
        <br />
        ミンナニデクノボートヨバレ
        <br />
        ホメラレモセズ
        <br />
        クニモサレズ
        <br />
        サウイフモノニ
        <br />
        ワタシハナリタイ
      </Text>
      <Text mt={4}>
        南無無辺行菩薩
        <br />
        南無上行菩薩
        <br />
        南無多宝如来
        <br />
        南無妙法蓮華経
        <br />
        南無釈迦牟尼仏
        <br />
        南無浄行菩薩
        <br />
        南無安立行菩薩
      </Text>
    </>
  )
}

export default Post
