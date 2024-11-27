import { useQuery } from 'react-query';
import {
  getGenres,
  getMovieDetails,
  getPopularMovies,
} from '../../services/movies-api';

export const useGetPopularMovies = ({
  onSuccessHandler,
  onErrorHandler,
  enabled = true,
} = {}) => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    'popular-movies',
    getPopularMovies,
    {
      onSuccess: data => {
        onSuccessHandler && onSuccessHandler(data);
      },
      onError: error => {
        onErrorHandler && onErrorHandler(error);
      },
      enabled,
      retry: false,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  );

  return {
    data: data?.results ?? [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  };
};

export const useGetGenres = ({
  onSuccessHandler,
  onErrorHandler,
  enabled = true,
} = {}) => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    'genres',
    getGenres,
    {
      onSuccess: data => {
        onSuccessHandler && onSuccessHandler(data);
      },
      onError: error => {
        onErrorHandler && onErrorHandler(error);
      },
      enabled,
      retry: false,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  );

  return {
    data: data ?? [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  };
};
