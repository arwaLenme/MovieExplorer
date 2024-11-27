import {StyleSheet} from 'react-native';
import {calcDesignSize} from '../../themes/styles/responsive-helper.service';
import colors from '../../themes/colors/colors';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: calcDesignSize(50),
    backgroundColor: colors.accent,
    paddingHorizontal: calcDesignSize(5),
    paddingVertical: calcDesignSize(10),
    borderRadius: calcDesignSize(10),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: calcDesignSize(14),
    fontFamily: 'Inter-Regular',
    marginHorizontal: calcDesignSize(5),
  },
});

export default styles;
