import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
  ChakraProvider,
  Container,
  Box,
  Button,
  Heading,
  Link as ChakraLink,
  Center,
  Text,
} from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = '青空文庫読むくん',
  description = '青空文庫が読めるみたいです。',
}: Props) => (
  <>
    <Head>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=X-XXXXXXXXXX`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'X-XXXXXXXXXX', {
                    page_path: window.location.pathname,
                  });`,
          }}
        />
      </>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#1a202c" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content="青空文庫読むくん" />
      <meta property="og:title" content={title + ' | 青空文庫読むくん'} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://nontan-next-chakra.vercel.app/" />
      <title>{title + ' | 青空文庫読むくん'}</title>
    </Head>
    <ChakraProvider resetCSS>
      <Heading
        as="h1"
        bg="gray.800"
        fontSize={{ base: '15px', md: '20px', lg: '25px' }}
        color="white"
        textAlign="center"
        p={4}
      >
        <Link href="/" passHref>
          <ChakraLink>青空文庫読むくん</ChakraLink>
        </Link>
      </Heading>
      <Box bg="gray.100">
        <Container bg="gray.100" px={[4, 8]} centerContent>
          <Box bg="white" width={['100%', '640px']} px={[4, 8]} pt={[4, 8]} pb={[8, 16]}>
            {children}
            <Link href="/">
              <Button colorScheme="teal" size="lg" width="100%" mt={8}>
                青空文庫読むくん
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
      <Center bg="gray.800" p={[2, 4]}>
        <Text fontSize={{ base: '10px', lg: '12px' }} color="white">
          © 2021 青空文庫読むくん
        </Text>
      </Center>
    </ChakraProvider>
  </>
)

export default Layout
