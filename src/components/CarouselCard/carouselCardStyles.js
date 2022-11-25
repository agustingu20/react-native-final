import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height / 2,
  },
  cards: {
    marginTop: 20,
    alignItems: 'center',
    width,
    height: height / 3.5,
  },
});
