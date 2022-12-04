import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2ECE4',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
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
    marginTop: 10,
    letterSpacing: 10,
  },
  goBackButtonContainer: {
    marginTop: 'auto',
  },
});
