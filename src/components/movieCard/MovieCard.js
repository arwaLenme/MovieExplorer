import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const MovieCard = ({ poster, title, genres, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <FastImage
          source={{ uri: poster }}
          style={styles.poster}
          resizeMode="cover"
        />

        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.genres} numberOfLines={2}>
          {genres}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
