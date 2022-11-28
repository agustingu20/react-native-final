import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerCard: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F4F6F7',
    padding: 16,
    width: '90%',
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
  titleCard: {
    backgroundColor: '#F2C230',
    borderRadius: 4,
    width: 150,
    fontSize: 15,
    fontWeight: 600,
    color: '#172026',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 4,
    backgroundColor: '#F2ECE4',
    marginBottom: 10,
  },
  textCard: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 10,
  },
});
