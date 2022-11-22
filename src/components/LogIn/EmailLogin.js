import { View, TouchableHighlight, Text } from 'react-native';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from 'firebase/auth';
import { styles } from './logInOptionsStyles';
import app from '../../../firebase';

const EmailLogin = () => {
  const auth = getAuth(app);

  const createAuthWithEmailAndPassword = () => {
    createUserWithEmailAndPassword(auth, 'usuario123@gmail.com', '123458s')
      .then((userCredential) => {
        // eslint-disable-next-line prefer-destructuring
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginAuthWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, 'usuario123@gmail.com', '123458s')
      .then((userCredential) => {
        // eslint-disable-next-line prefer-destructuring
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <TouchableHighlight onPress={createAuthWithEmailAndPassword}>
        <View style={styles.button}>
        <Text>Crear nuevo usuario</Text>
        </View>
    </TouchableHighlight>

    <TouchableHighlight onPress={loginAuthWithEmailAndPassword}>
        <View style={styles.button}>
        <Text>Iniciar sesión</Text>
        </View>
    </TouchableHighlight>
    </>
  );
};

export default EmailLogin;
