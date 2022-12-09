import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginTop: 20,
    alignSelf: 'center',
  },
  logInText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#C83C45',
    marginTop: 22,
    alignSelf: 'center',
  },
  inputContainer: {
    marginVertical: 20,
    width: '85%',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#C83C45',
    padding: 7,
    marginHorizontal: 60,
    marginVertical: 5,
  },
  errorMsg: {
    color: '#C83C45',
  },
});
