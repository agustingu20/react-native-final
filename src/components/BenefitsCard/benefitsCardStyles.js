import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerCard: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F4F6F7',
    padding: 16,
    width: '90%',
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 10,
  },
  titleCard: {
    backgroundColor: '#fff',
    borderRadius: 4,
    width: 300,
    fontSize: 22,
    color: '#172026',
    textAlign: 'center',
    marginBottom: 10,
  },
  textCard: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#C83C45',
    padding: 7,
    marginHorizontal: 60,
    marginVertical: 5,
  },
});
