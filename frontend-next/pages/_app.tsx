import { extendTheme } from '@chakra-ui/react'
import { SaasProvider, theme as baseTheme } from '@saas-ui/react'
import type { AppProps } from 'next/app'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors }, baseTheme)

function MyApp({ Component, pageProps }: AppProps) {
  return <SaasProvider theme={theme}>
    <Component {...pageProps} />
  </SaasProvider>
}

export default MyApp
