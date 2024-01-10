import React, { useEffect } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

interface Game {
  id: string
  name: string
}

interface FetchGamesResponse {
  count: number
  results: Game[]
}

const GameGrid = () => {
  const [games, setGames] = React.useState<Game[]>([])
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    setLoading(true)
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((response) => {
        // console.log(response)
        setGames(response.data.results)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid
