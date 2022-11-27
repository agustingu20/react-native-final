import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  homeStaffHeader: {
    backgroundColor: 'red',
  },
  homeUserHeader: {
    backgroundColor: '#67A9EB',
  },
  homeImage: {
    width,
    height: height / 4,
  },
  homeTitleContainer: {
    marginStart: -200,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 10,
  }
});
