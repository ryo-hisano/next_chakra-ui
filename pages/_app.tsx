// ページ間で共通のレイアウトをもたせたり、共通のStateをもたせたりすることができます。
// クライアントサイドでも実行されます。
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import { ChakraProvider, Container, Box, Button } from '@chakra-ui/react'
//import '../styles/Home.module.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ChakraProvider resetCSS>
        <Header />
        <Box bg="gray.100">
          <Container bg="gray.100" px={[4, 8]} centerContent>
            <Box bg="white" width={['100%', '640px']} px={[4, 8]} pt={[4, 8]} pb={[8, 16]}>
              <Component {...pageProps} />
              <Link href="/">
                <Button colorScheme="teal" size="lg" width="100%" mt={8}>
                  青空文庫読むくん
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default MyApp
