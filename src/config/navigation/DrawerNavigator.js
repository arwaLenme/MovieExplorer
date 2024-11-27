import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MovieList from '../../screens/movieList/MovieList';
import Home from '../../screens/home/Home';
import CustomDrawerContent from './CustomDrawer';
import colors from '../../themes/colors/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.primary,
          },
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="MovieList" component={MovieList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
