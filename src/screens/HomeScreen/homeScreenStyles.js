import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  homeStaffHeader: {
    backgroundColor: '#ffff',
  },
  homeUserHeader: {
    backgroundColor: '#ffff',
  },
  homeImage: {
    width,
    height: height / 4,
  },
  // homeTitleContainer: {
  //   marginStart: -25,
  // },
  homeTitle: {
    color: '#C83C45',
    fontSize: 20,
    fontWeight: 900,
    marginTop: -100,
    marginBottom: 10,
  }
});
