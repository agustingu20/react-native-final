import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 70,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginBottom: 5,
    alignSelf: 'center',
  },
  profileTitle: {
    fontSize: 24,
    marginTop: 20,
    marginStart: 20,
    color: '#C83C45',
  },
  profileText: {
    fontSize: 20,
    marginTop: 10,
    marginStart: 20,
  },
  closeSessionButton: {
    alignItems: 'center',
    backgroundColor: '#C83C45',
    marginVertical: 40,
    padding: 7,
    marginHorizontal: 60,
  },
});
