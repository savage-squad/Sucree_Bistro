import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
//import SignInPage from "./pages/Login/SignIn"
import FooterComponents from "./components/_ui/Footer"
import HeaderViewComponent from "./components/_ui/Header/navbar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        {/* <SignInPage/> */}
        <HeaderViewComponent colorScheme={""} size={"sm"} variant={""} />
        <FooterComponents />
      </Grid>
    </Box>
  </ChakraProvider>
)
