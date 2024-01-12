import { useEffect, useState } from "react"
import { CanceledError } from "axios"
import apiClient from "../services/api-client"

interface Genre {
    id: number
    name: string
    slug: string
}

interface FetchGenresResponse {
    count: number
    results: Genre[]
}


const useGenres = () => {
  const [genres, setGenres] = useState<FetchGenresResponse>()
  const [errorGenres, seterrorGenres] = useState(false)
  const [loadingGenres, setLoadingGenres] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoadingGenres(true)
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((response) => {
        console.log("response from genres", response)
        setGenres(response.data)
        console.log("response.data", response.data)
        setLoadingGenres(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        seterrorGenres(error.message)
        setLoadingGenres(false)
      })
    return () => {
      controller.abort()
    }
  }, [])
  return { genres, setGenres, errorGenres, seterrorGenres, loadingGenres, setLoadingGenres }
}

export default useGenres
