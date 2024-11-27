import {StyleSheet} from 'react-native';
import {calcDesignSize} from '../../themes/styles/responsive-helper.service';
import colors from '../../themes/colors/colors';
import JSPropsUpdaterWeb from '../../../node_modules/react-native-reanimated/lib/typescript/createAnimatedComponent/JSPropsUpdater.web.d';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: calcDesignSize(16),
  },

  closeButton: {
    position: 'absolute',
    top: calcDesignSize(5),
    right: calcDesignSize(20),
    paddingHorizontal: calcDesignSize(5),
    paddingVertical: calcDesignSize(5),
    height: calcDesignSize(30),
    width: calcDesignSize(25),
    justifyContent: 'center',
  },
  largePoster: {
    width: calcDesignSize(300),
    aspectRatio: 2 / 3,
    borderRadius: calcDesignSize(12),
  },

  detailsTitle: {
    fontSize: calcDesignSize(20),
    fontFamily: 'Inter-Bold',
    color: colors.textPrimary,
    marginTop: calcDesignSize(16),
    textAlign: 'center',
  },
  detailsDescription: {
    fontSize: calcDesignSize(14),
    fontFamily: 'Inter-Regular',
    color: colors.greish,
    marginTop: calcDesignSize(8),
    textAlign: 'center',
  },
});

export default styles;
