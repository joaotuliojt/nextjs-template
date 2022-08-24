import type { NextPage } from 'next'
import { Heading, Flex } from '@chakra-ui/react'
import { ThemeButton } from '../components/ThemeButton'

const Home: NextPage = () => {
  return (
    <Flex
      align="center"
      justify="center"
      flexDir="column"
      h="100vh"
      w="100vw"
      gap={14}
    >
      <Heading>Hello World</Heading>
      <ThemeButton text="Trocar Tema" />
    </Flex>
  )
}

export default Home
