import { useEffect, useState } from "react"
import { CanceledError } from "axios"
import apiClient from "../services/api-client"

interface FetchResponse<T> {
    count: number
    results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, seterror] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<FetchResponse<T>>(`${endpoint}`, { signal: controller.signal })
      .then((response) => {
        console.log("response from genres", response)
        setData(response.data.results)
        console.log("response.data", response.data)
        setLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        seterror(error.message)
        setLoading(false)
      })
    return () => {
      controller.abort()
    }
  }, [endpoint])
  return { data, setData, error, seterror, loading, setLoading }
}

export default useData
