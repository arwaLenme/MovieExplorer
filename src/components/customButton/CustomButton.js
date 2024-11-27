import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const CustomButton = ({
  title,
  onPress,
  iconName,
  iconSize = 24,
  iconColor = 'white',
  style = {},
  contentStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <View style={[styles.content, contentStyle]}>
        {iconName && (
          <Ionicons name={iconName} size={iconSize} color={iconColor} />
        )}
        {title ? (
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
