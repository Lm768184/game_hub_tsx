import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import { HStack } from '@chakra-ui/layout'
import { getCroppedImageUrl } from '../services/image-url'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  {
    console.log('game bg image !!!! ', game.background_image)
  }

  return (
    <Card borderRadius={10} overflow={'hidden'} m={2} width="470px">
      <Image
        src={getCroppedImageUrl(game.background_image, 600, 400)}
        alt={game.name}
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore
            score={game.metacritic}
            background_image={game.background_image}
          />

          {/* {game.parent_platforms.map((parent_platform) => (
          <Text key={parent_platform.platform.id}>{parent_platform.platform.name}</Text>
        ))} */}
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
