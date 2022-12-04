import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#F2ECE4',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    marginBottom: 10,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 20,
    color: '#A64F03',
  },
  profileText: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 10,
  },
  closeSessionButton: {
    marginTop: 40,
  },
});
