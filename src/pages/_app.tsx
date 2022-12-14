import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
