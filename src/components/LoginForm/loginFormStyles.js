import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 180,
    marginTop: 20,
    alignSelf: 'center',
  },
  logInText: {
    fontSize: 30,
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
