import React, { useCallback } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import MovieCard from '../../components/movieCard/MovieCard';
import SearchBar from '../../components/searchBar/SearchBar';
import FilterPanel from '../../components/filterPanel/FilterPanel';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import styles from './stylels';
import useMovieList from '../../hooks/useMovieList';
import colors from '../../themes/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const MovieList = () => {
    const {
        selectedMovie,
        isFilterVisible,
        searchText,
        setSelectedMovie,
        clearSelectedMovie,
        toggleFilterPanel,
        setSearchText,
        setSelectedGenres,
        genres,
        movies,
        isLoading,
    } = useMovieList();

    const renderEmptyList = useCallback(
        () => (
            <View style={styles.emptyListContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={colors.textPrimary} />
                ) : (
                    <Text style={styles.emptyListText}>
                        No movies found.{'\n'}Try a different search or filter.
                    </Text>
                )}
            </View>
        ),
        [isLoading],
    );

    return (
        <SafeAreaView style={styles.screen}>
            {!selectedMovie && (
                <>
                    <SearchBar
                        value={searchText}
                        onChangeText={setSearchText}
                        onFilterPress={toggleFilterPanel}
                    />

                    {isFilterVisible && (
                        <FilterPanel genres={genres} onGenreSelect={setSelectedGenres} />
                    )}

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={movies}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <MovieCard
                                poster={item.poster_path}
                                title={item.title}
                                genres={item.genres}
                                onPress={() => setSelectedMovie(item)}
                            />
                        )}
                        contentContainerStyle={[
                            styles.listContainer,
                            movies.length === 0 && { flex: 1 },
                        ]}
                        ListEmptyComponent={renderEmptyList}
                    />
                </>
            )}

            {selectedMovie && (
                <MovieDetails movie={selectedMovie} onClose={clearSelectedMovie} />
            )}
        </SafeAreaView>
    );
};

export default MovieList;
