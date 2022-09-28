import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

import FooterComponents from "./components/_ui/Footer"
import HomePage from "./pages/Home"



export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        {/* <SignInPage /> */}
        <HomePage/>

        <FooterComponents />
      </Grid>
    </Box>
  </ChakraProvider>
)