import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import useHome from '../../hooks/useHome';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/customButton/CustomButton';
import colors from '../../themes/colors/colors';

const Home = () => {
  const [showButtons, setShowButtons] = useState(false);
  const navigation = useNavigation();

  const { animatedStyle } = useHome(() => setShowButtons(true));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/theme.png')}
        style={[styles.image, animatedStyle]}
        resizeMode="contain"
      />

      {showButtons && (
        <>
          <TouchableOpacity
            style={styles.drawerIcon}
            onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={35} color={colors.white} />
          </TouchableOpacity>

          <CustomButton
            title="Go to Movie List"
            iconName="film"
            onPress={() => navigation.navigate('MovieList')}
            style={styles.button}
          />
        </>
      )}
    </View>
  );
};

export default Home;
