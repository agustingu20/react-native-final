import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  benefitImage: {
    width,
    height: height / 2.5,
    backgroundColor: 'white',
  },
  textContainer: {
    padding: 20,
    marginLeft: 10,
  },
  benefitTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#C83C45',
  },
  lineBreaker: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  benefitLongDescription: {
    fontSize: 16,
  },
  codeContainer: {
    marginTop: 30,
    height: height / 3.5,
  },
  codeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  code: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    letterSpacing: 10,
  },
  goBackButtonContainer: {
    marginTop: 'auto',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#C83C45',
    padding: 7,
    marginHorizontal: 60,
    marginVertical: 5,
  },
});
