import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
  }}

  // gridTemplateRows={'50px 1fr'}
  // gridTemplateColumns={'150px 1fr'}
  // h='70vw'
  // gap='1'
  // color='blackAlpha.700'
  // fontWeight='bold'
  >
    
    <GridItem gridArea="nav" bg="red.300"><NavBar /></GridItem>
    <Show above="lg"><GridItem gridArea="aside" bg="blue.300">aside</GridItem> </Show>
    <GridItem gridArea="main" bg="green.300">main</GridItem>
  </Grid>
}

export default App
