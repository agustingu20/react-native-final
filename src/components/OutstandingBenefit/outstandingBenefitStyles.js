import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerCard: {
    marginTop: -40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F4F6F7',
    width: '95%',
    backgroundColor: '#F4F6F7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  benefitText: {
    fontSize: 16,
    fontWeight: 500,
    paddingLeft: 10,
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#F2D3AC',
    marginBottom: 10,
  },
});
