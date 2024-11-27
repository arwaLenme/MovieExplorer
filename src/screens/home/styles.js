import {StyleSheet} from 'react-native';
import {calcDesignSize} from '../../themes/styles/responsive-helper.service';
import colors from '../../themes/colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: calcDesignSize(300),
    height: calcDesignSize(300),
  },
  drawerIcon: {
    position: 'absolute',
    top: calcDesignSize(50),
    left: calcDesignSize(20),
    zIndex: 10,
  },
  button: {
    position: 'absolute',
    bottom: calcDesignSize(50),
    alignSelf: 'center',
    zIndex: 10,
  },
});

export default styles;
