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
  homeTitle: {
    color: 'black',
    fontSize: 20,
    paddingVertical: 50,
    marginTop: -45,
    fontWeight: 900,
    marginBottom: 30,
  },
  benefitButton: {
    marginTop: -90,
    marginBottom: 50,
    padding: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#C83C45',
    padding: 7,
    marginHorizontal: 60,
    marginVertical: 5,
  },
});
