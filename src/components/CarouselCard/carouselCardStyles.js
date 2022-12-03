import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width,
    height: height / 3,
    marginBottom: height / 6,
  },
  cards: {
    marginTop: 20,
    alignItems: 'center',
    width,
    height: height / 3.5,
  },
});
