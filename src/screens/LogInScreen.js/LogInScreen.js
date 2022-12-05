import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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

const LogInScreen = ({ navigation }) => {
  const auth = getAuth(app);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }, []);

  const passInput = (e) => {
    setPassword(e.target.value);
  };

  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  const handleBenefitNavigate = () => {
    navigation.navigate('Register');
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
      <View style={styles.container}>
        <TextInput
          onChange={emailInput}
          label="Email"
          style={styles.input}
          underlineColor="#fff"
          activeUnderlineColor="#C83C45"
        />
        <TextInput
          onChange={passInput}
          label="Contraseña"
          style={styles.input}
          secureTextEntry={true}
          underlineColor="#fff"
          activeUnderlineColor="#C83C45"
        />
      </View>
      <Button mode="Text" textColor="#C83C45">
        Olvidaste tu contraseña? Toca aquí!
      </Button>
      <View>
        <Button
          mode="contained"
          onPress={loginAuthWithEmailAndPassword}
          style={styles.button}>
          Iniciar sesión
        </Button>
      </View>
      <Button mode="Text" textColor="#C83C45" onPress={handleBenefitNavigate}>
        No tienes cuenta? Registrate!
      </Button>
      <View>
        <GoogleLogIn />
      </View>
    </ScrollView>
  );
};

export default LogInScreen;
