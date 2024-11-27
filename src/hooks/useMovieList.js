import { useMemo } from 'react';
import useMovieStore from '../config/zustand/useMovieStore';
import { useGetPopularMovies, useGetGenres } from './api/useMoviesApi';
import { getImageUrl } from '../helpers/getImageUrl';
const useMovieList = () => {
  const {
    selectedMovie,
    isFilterVisible,
    searchText,
    selectedGenres,
    setSelectedMovie,
    clearSelectedMovie,
    toggleFilterPanel,
    setSearchText,
    setSelectedGenres,
  } = useMovieStore();

  const { data: movies, isLoading: moviesLoading } = useGetPopularMovies();
  const { data: genres, isLoading: genresLoading } = useGetGenres();

  const movieGenres = useMemo(() => {
    const mapping = {};
    genres.forEach((genre) => (mapping[genre.id] = genre.name));
    return mapping;
  }, [genres]);


  const extractGenres = (genreIds) =>
    genreIds.map((id) => movieGenres?.[id]).filter(Boolean);

  const filteredMovies = useMemo(() =>
    movies
      .filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchText.toLowerCase()) &&
          (selectedGenres.includes('All') || selectedGenres.some((genre) => extractGenres(movie.genre_ids).includes(genre)))
      )
      .slice(0, 10)
      .map((movie) => ({
        ...movie,
        poster_path: getImageUrl(movie.poster_path),
        genres: extractGenres(movie.genre_ids).join(', '),
      })),
    [movies, searchText, selectedGenres, movieGenres]
  );

  return {
    selectedMovie,
    isFilterVisible,
    searchText,
    selectedGenres,
    setSelectedMovie,
    clearSelectedMovie,
    toggleFilterPanel,
    setSearchText,
    setSelectedGenres,
    genres: genres.map((genre) => genre.name),
    movies: filteredMovies,
    isLoading: moviesLoading || genresLoading,
  };
};

export default useMovieList;
