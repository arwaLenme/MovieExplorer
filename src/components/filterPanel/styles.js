import {StyleSheet} from 'react-native';
import {calcDesignSize} from '../../themes/styles/responsive-helper.service';
import colors from '../../themes/colors/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: calcDesignSize(16),
  },
  title: {
    fontSize: calcDesignSize(16),
    fontFamily: 'Inter-Bold',
    color: colors.textPrimary,
    marginBottom: calcDesignSize(12),
  },
  genresContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genreButton: {
    paddingHorizontal: calcDesignSize(12),
    paddingVertical: calcDesignSize(8),
    borderRadius: calcDesignSize(20),
    marginRight: calcDesignSize(8),
  },
  selectedGenreButton: {
    backgroundColor: colors.accent,
  },
  genreText: {
    fontSize: calcDesignSize(14),
    fontFamily: 'Inter-Regular',
    color: colors.textPrimary,
  },
  selectedGenreText: {
    color: colors.white,
  },
});

export default styles;
