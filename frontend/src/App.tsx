import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import RoutesNavegationPage from "../router/index"
import SignInPage from "./pages/Login/SignIn"




export const App = () => (
  <ChakraProvider theme={theme}>
    
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <SignInPage/>
        {/* <RoutesNavegationPage /> */}
  
      </Grid>
    </Box>
  </ChakraProvider>
)
