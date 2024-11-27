import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const WIDTH = 390;

function calcDesignSize(size) {
  const scale = width / WIDTH;
  return size * scale;
}

export { calcDesignSize };
