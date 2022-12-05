import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { setToken } from '../../store/tokenSlice';
import { setUser } from '../../store/userSlice';
import GoogleLogIn from '../../components/GoogleLogIn/GoogleLogIn';
import { styles } from './logInScreenStyles';
import app, { db } from '../../../firebase';

const LogInScreen = () => {
  const auth = getAuth(app);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const passInput = (e) => {
    setPassword(e.target.value);
  };

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const loginAuthWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
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
        console.error(error);
      });
  };

  return (
    <ScrollView>
        <View>
            <TextInput onChange={emailInput} placeholder='email@ejemplo.com' style={styles.input}/>
            <TextInput onChange={passInput} placeholder='Escribe tu contraseña' style={styles.input}/>
        </View>
        <Text>Olvidaste tu contraseña? Toca aquí!</Text>
        {/* <TouchableHighlight style={styles.button} onPress={loginAuthWithEmailAndPassword}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </View>
      </TouchableHighlight> */}
      <View>
        <Button mode="contained" onPress={loginAuthWithEmailAndPassword} style={styles.button}>
            Iniciar sesión
        </Button>
      </View>
      <Text>No tienes cuenta? Registrate</Text>
        <View>
            <GoogleLogIn/>
        </View>
    </ScrollView>
  );
};

export default LogInScreen;
