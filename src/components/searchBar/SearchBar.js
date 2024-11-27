import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import colors from '../../themes/colors/colors';

const SearchBar = ({
  value,
  onChangeText,
  placeholder = 'Search movies...',
  onFilterPress,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={20}
        color={colors.greish}
        style={styles.icon}
      />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.silver}
      />

      <TouchableOpacity onPress={onFilterPress}>
        <Ionicons
          name="filter"
          size={20}
          color={colors.greish}
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
