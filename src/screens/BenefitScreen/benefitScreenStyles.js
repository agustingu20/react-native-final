import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  benefitImage: {
    width,
    height: height / 2.5,
  },
  textContainer: {
    padding: 20,
    marginLeft: 10,
  },
  benefitTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A64F03',
  },
  lineBreaker: {
    borderBottomColor: '#F2C12E',
    borderBottomWidth: 1,
    width: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  benefitLongDescription: {
    fontSize: 16,
  },
  codeContainer: {
    marginTop: 10,
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
});
