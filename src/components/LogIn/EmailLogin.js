import { View, TouchableHighlight, Text } from 'react-native';
import {
  getAuth, signInWithEmailAndPassword,
} from 'firebase/auth';
import { styles } from '../GoogleLogIn/googleLogInStyle';
import app from '../../../firebase';

const EmailLogin = () => {
  const auth = getAuth(app);

  const loginAuthWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, 'usuario123@gmail.com', '123458s')
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <TouchableHighlight >
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
