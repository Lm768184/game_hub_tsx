import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
  }}

  gridTemplateColumns={{
    base: '1fr',
    lg: '200px  1fr'
  }

  }
  // gridTemplateColumns={'150px 1fr'}
  // h='70vw'
  // gap='1'
  // color='blackAlpha.700'
  // fontWeight='bold'
  >
    
    <GridItem area="nav" bg="red.300" ><NavBar /></GridItem>
    <Show above="lg"><GridItem area="aside" bg="blue.300" paddingX={5} ><GenreList /></GridItem> </Show>
    <GridItem area="main" bg="orange.300"overflowX={'hidden'} > <GameGrid />  </GridItem>  
  </Grid>
}

export default App
