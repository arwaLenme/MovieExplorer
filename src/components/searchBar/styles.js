import {StyleSheet} from 'react-native';
import colors from '../../themes/colors/colors';
import {calcDesignSize} from '../../themes/styles/responsive-helper.service';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: calcDesignSize(8),
    paddingHorizontal: calcDesignSize(10),
    height: calcDesignSize(40),
    marginHorizontal: calcDesignSize(16),
    marginTop: calcDesignSize(16),
  },
  icon: {
    marginRight: calcDesignSize(8),
  },
  input: {
    flex: 1,
    fontSize: calcDesignSize(16),
    color: colors.greish,
  },
  filterIcon: {
    marginLeft: calcDesignSize(8),
  },
});

export default styles;
