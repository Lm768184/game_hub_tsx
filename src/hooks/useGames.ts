import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

export interface Platform {
  id: number
  name: string
  slug: string
}
export interface Game {
  id: string
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

export interface FetchGamesResponse {
  count: number
  results: Game[]
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then((response) => {
        // console.log(response)
        setGames(response.data.results)
        setLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError(error.message)
        setLoading(false)
      })
    return () => {
      controller.abort()
    }
  }, [])
  return { games, setGames, error, setError, loading, setLoading }
}

export default useGames
