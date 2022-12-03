import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
  },
  imageContainer: {
    width: width / 1.05,
    height: height / 3.5,
    borderRadius: 20,
  },
});
