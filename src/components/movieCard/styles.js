import {StyleSheet} from 'react-native';
import {calcDesignSize} from '../../themes/styles/responsive-helper.service';
import colors from '../../themes/colors/colors';

const styles = StyleSheet.create({
  cardContainer: {
    width: calcDesignSize(160),
    margin: calcDesignSize(8),
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: calcDesignSize(12),
    overflow: 'hidden',
  },
  poster: {
    width: '100%',
    height: calcDesignSize(200),
    borderTopLeftRadius: calcDesignSize(12),
    borderTopRightRadius: calcDesignSize(12),
  },
  title: {
    fontSize: calcDesignSize(14),
    fontFamily: 'Inter-Bold',
    color: colors.textPrimary,
    marginTop: calcDesignSize(8),
    textAlign: 'center',
  },
  genres: {
    fontSize: calcDesignSize(12),
    fontFamily: 'Inter-Regular',
    color: colors.accent,
    marginTop: calcDesignSize(4),
    textAlign: 'center',
    marginBottom: calcDesignSize(8),
  },
});

export default styles;
