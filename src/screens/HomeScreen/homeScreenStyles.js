import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F2ECE4',
  },
  homeStaffHeader: {
    backgroundColor: '#A65D56',
  },
  homeUserHeader: {
    backgroundColor: '#1C66A6',
  },
  homeImage: {
    width,
    height: height / 4,
  },
  homeTitleContainer: {
    marginStart: -150,
  },
  homeTitle: {
    fontSize: 32,
    fontWeight: 600,
    marginTop: 40,
    marginBottom: 10,
  }
});
