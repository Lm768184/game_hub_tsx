import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'} m={2}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        {/* {game.parent_platforms.map((parent_platform) => (
          <Text key={parent_platform.platform.id}>{parent_platform.platform.name}</Text>
        ))} */}
      </CardBody>
    </Card>
  )
}

export default GameCard
