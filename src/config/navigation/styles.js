import {StyleSheet} from 'react-native';
import colors from '../../themes/colors/colors';
import {calcDesignSize} from '../../themes/styles/responsive-helper.service';

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: calcDesignSize(16),
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: calcDesignSize(12),
    paddingHorizontal: calcDesignSize(16),
    borderRadius: calcDesignSize(12),
    marginBottom: calcDesignSize(12),
  },
  activeItem: {
    backgroundColor: colors.lightPrimary,
  },
  drawerText: {
    fontSize: calcDesignSize(14),
    fontFamily: 'Inter-Regular',
    color: colors.greish,
    marginLeft: calcDesignSize(8),
  },
  activeText: {
    color: colors.accent,
    fontFamily: 'Inter-Bold',
  },
});

export default styles;
