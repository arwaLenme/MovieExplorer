import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import { useEffect } from 'react';

const { width, height } = Dimensions.get('window');

const useHome = onAnimationComplete => {
  const scale = useSharedValue(0.2);

  useEffect(() => {
    const targetScale = Math.max(width / 300, height / 300);

    scale.value = withTiming(
      targetScale,
      { duration: 2000 },
      isFinished => {
        if (isFinished && onAnimationComplete) {
          runOnJS(onAnimationComplete)();
        }
      },
    );
  }, [scale, onAnimationComplete]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return {
    animatedStyle,
  };
};

export default useHome;
