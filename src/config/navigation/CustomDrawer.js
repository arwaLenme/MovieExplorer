import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import colors from '../../themes/colors/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const DrawerItem = ({label, iconName, isActive, onPress, IconComponent}) => (
  <TouchableOpacity
    style={[styles.drawerItem, isActive && styles.activeItem]}
    onPress={onPress}>
    <IconComponent
      name={iconName}
      size={24}
      color={isActive ? colors.accent : colors.greish}
    />
    <Text style={[styles.drawerText, isActive && styles.activeText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const CustomDrawerContent = props => {
  const {state, navigation} = props;
  const activeRoute = state?.routes[state.index]?.name;

  return (
    <SafeAreaView style={styles.drawerContainer}>
      <DrawerItem
        label="Home"
        iconName="home"
        isActive={activeRoute === 'Home'}
        onPress={() => navigation.navigate('Home')}
        IconComponent={MaterialIcons}
      />
      <DrawerItem
        label="Movie List"
        iconName="movie"
        isActive={activeRoute === 'MovieList'}
        onPress={() => navigation.navigate('MovieList')}
        IconComponent={MaterialCommunityIcons}
      />
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
