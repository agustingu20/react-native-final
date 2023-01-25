import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 3,
  },
  input: {
    width: width / 1.2,
    marginTop: 20,
  },
  text: {
    color: '#C83C45',
    fontSize: 25,
    marginVertical: 7,
  },
  button: {
    backgroundColor: '#C83C45',
    padding: 7,
    marginVertical: 8,
  },
});
