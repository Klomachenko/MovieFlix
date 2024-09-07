import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovies = () => {
  return api.get(`/movie/popular`);
};

const fetchTopRatedMovies = () => {
  return api.get(`/movie/top_rated`)
}

const fetchUpComingMovies = () => {
  return api.get(`/movie/upcoming`)
}

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-popular'],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-topRated'],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data,
  });
};

export const useUpComingMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-upComing'],
    queryFn: fetchUpComingMovies,
    select: (result) => result.data,
  });
};