import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"


const fetchMovieDetail = (movieId) => {
  return api.get(`movie/${movieId}`)
}

export const useMovieDetailQuery = (movieId) => {
  return useQuery({
    queryKey: ['movie-dtail', movieId],
    queryFn: () => fetchMovieDetail(movieId),
  })
}