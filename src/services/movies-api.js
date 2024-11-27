import {apiService} from './api';

export const getPopularMovies = async () => {
  const response = await apiService().get('movie/popular');
  return response?.data;
};

export const getGenres = async () => {
  const response = await apiService().get('genre/movie/list');
  return response?.data?.genres;
};
