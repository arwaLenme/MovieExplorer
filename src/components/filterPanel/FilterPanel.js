import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';

const FilterPanel = ({genres = [], onGenreSelect}) => {
  const [selectedGenres, setSelectedGenres] = useState(['All']);

  const handleGenrePress = genre => {
    let updatedGenres;

    if (genre === 'All') {
      updatedGenres = ['All'];
    } else {
      const isSelected = selectedGenres.includes(genre);

      updatedGenres = isSelected
        ? selectedGenres.filter(g => g !== genre)
        : [...selectedGenres.filter(g => g !== 'All'), genre];

      if (updatedGenres.length === 0) {
        updatedGenres = ['All'];
      }
    }

    setSelectedGenres(updatedGenres);
    onGenreSelect && onGenreSelect(updatedGenres);
  };

  const renderGenre = ({item: genre}) => {
    const isSelected = selectedGenres.includes(genre);

    return (
      <TouchableOpacity
        style={[styles.genreButton, isSelected && styles.selectedGenreButton]}
        onPress={() => handleGenrePress(genre)}>
        <Text
          style={[styles.genreText, isSelected && styles.selectedGenreText]}>
          {genre}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Genre</Text>
      <FlatList
        data={['All', ...genres]}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderGenre}
        contentContainerStyle={styles.genresContainer}
      />
    </View>
  );
};

export default FilterPanel;
