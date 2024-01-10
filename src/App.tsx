import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
  }}

  // gridTemplateRows={'50px 1fr'}
  // gridTemplateColumns={'150px 1fr'}
  // h='70vw'
  // gap='1'
  // color='blackAlpha.700'
  // fontWeight='bold'
  >
    
    <GridItem area="nav" bg="red.300"><NavBar /></GridItem>
    <Show above="lg"><GridItem area="aside" bg="blue.300">aside</GridItem> </Show>
    <GridItem area="main" bg="green.300"> </GridItem>   <GameGrid />

    
  </Grid>
}

export default App
