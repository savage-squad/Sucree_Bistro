import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"



import ProductPage from "./pages/Prouct"

export const App = () => (
  <ChakraProvider theme={theme}>

    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <ProductPage />
      </Grid>
    </Box>
  </ChakraProvider>
)
