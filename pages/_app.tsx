// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Web3 } from '../contexts/web3/index.js'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3>
  )
}

export default MyApp
