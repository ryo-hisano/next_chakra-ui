import Link from 'next/link'
import { Heading, Link as ChakraLink } from '@chakra-ui/react'

export default function Header(): JSX.Element {
  return (
    <>
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
    </>
  )
}
