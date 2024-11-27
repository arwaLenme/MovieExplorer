import {StyleSheet} from 'react-native';
import {calcDesignSize} from '../../themes/styles/responsive-helper.service';
import colors from '../../themes/colors/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  listContainer: {
    flexGrow: 1,
    padding: calcDesignSize(16),
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: calcDesignSize(16),
    color: colors.accent,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
});

export default styles;
