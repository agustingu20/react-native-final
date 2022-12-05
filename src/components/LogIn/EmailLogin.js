import { View, TouchableHighlight, Text } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import app, { db } from '../../../firebase';
// import { styles } from './logInStyles';
import { setToken } from '../../store/tokenSlice';
import { setUser } from '../../store/userSlice';

const EmailLogin = ({ navigation }) => {
  const auth = getAuth(app);

  const dispatch = useDispatch();

  const loginAuthWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, 'agustin_gu2@hotmail.com', 'Agustin123')
      .then(async (userCredential) => {
        const { user } = userCredential;
        console.log('user', user);
        dispatch(setToken(user.accessToken));
        const { docs } = await getDocs(collection(db, 'users'));
        console.log('usuarios', docs);
        const userData = docs
          .filter((usuario) => user.email === usuario.data().email)
          .map((usuario) => {
            return { ...usuario.data() };
          });
        dispatch(setUser(userData));
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <TouchableHighlight>
        <View>
          <Text>Crear nuevo usuario</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={loginAuthWithEmailAndPassword}>
        <View>
          <Text>Iniciar sesión</Text>
        </View>
      </TouchableHighlight>
    </>
  );
};

export default EmailLogin;
