import {create} from 'zustand';

const useMovieStore = create(set => ({
  selectedMovie: null,
  isFilterVisible: false,
  searchText: '',
  selectedGenres: ['All'],

  setSelectedMovie: movie => set({selectedMovie: movie}),
  clearSelectedMovie: () => set({selectedMovie: null}),

  toggleFilterPanel: () =>
    set(state => ({isFilterVisible: !state.isFilterVisible})),
  setSearchText: text => set({searchText: text}),
  setSelectedGenres: genres => set({selectedGenres: genres}),
}));

export default useMovieStore;
