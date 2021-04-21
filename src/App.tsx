import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from './styles/theme'
import { Search } from "./pages/Search"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Search />
  </ChakraProvider>
)
