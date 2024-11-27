import React from 'react';
import { View, Text, Image } from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import styles from './styles';
import { getImageUrl } from '../../helpers/getImageUrl';
import FastImage from 'react-native-fast-image';

const MovieDetails = ({ movie, onClose }) => {
  return (
    <View style={styles.detailsContainer}>
      <CustomButton
        onPress={onClose}
        iconName="close"
        style={styles.closeButton}
        iconSize={17}
      />

      <FastImage
        source={{ uri: getImageUrl(movie.poster_path) }}
        style={styles.largePoster}
        resizeMode="cover"
      />

      <Text style={styles.detailsTitle}>{movie.title}</Text>

      <Text style={styles.detailsDescription}>{movie.overview}</Text>
    </View>
  );
};

export default MovieDetails;
