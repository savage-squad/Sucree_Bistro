import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"


import FocusOnSelect from "./components/_ui/Slide"
import HomePage from "./pages/Home"




export const App = () => (
  <ChakraProvider theme={theme}>
    
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
       <HomePage/>
      </Grid>
    </Box>
  </ChakraProvider>
)
