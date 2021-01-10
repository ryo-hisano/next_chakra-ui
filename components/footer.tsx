import { Center, Text } from '@chakra-ui/react'

export default function Footer(): JSX.Element {
  return (
    <>
      <Center bg="gray.800" p={[2, 4]}>
        <Text fontSize={{ base: '10px', lg: '12px' }} color="white">
          © 2021 青空文庫読むくん
        </Text>
      </Center>
    </>
  )
}
