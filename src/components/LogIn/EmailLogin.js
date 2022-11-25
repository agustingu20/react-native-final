import { View, TouchableHighlight, Text } from 'react-native';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { styles } from './logInStyles';
import app from '../../../firebase';
import { setUser } from '../../store/userSlice';
import { setToken } from '../../store/tokenSlice';

const EmailLogin = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const createAuthWithEmailAndPassword = () => {
    createUserWithEmailAndPassword(auth, 'usuario123455@gmail.com', '123458s')
      .then((userCredential) => {
        const { user } = userCredential;
        dispatch(setUser(user));
        dispatch(setToken(user.accessToken));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loginAuthWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, 'usuario123@gmail.com', '123458s')
      .then((userCredential) => {
        const { user } = userCredential;
        dispatch(setUser(user));
        dispatch(setToken(user.accessToken));
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
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
