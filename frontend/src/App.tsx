import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import RoutesNavegationPage from "../router/index"
import SignInPage from "./pages/Login/SignIn"
import SignOutPage from "./pages/Login/SigOut"




export const App = () => (
  <ChakraProvider theme={theme}>
    
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        {/* <SignInPage/> */}
        <SignOutPage/>
        {/* <RoutesNavegationPage /> */}
  
      </Grid>
    </Box>
  </ChakraProvider>
)
