import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import {
  ScrollView, View, Image, Text,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
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
        dispatch(setToken(user.accessToken));
        const { docs } = await getDocs(collection(db, 'users'));
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
        <Image source={{ uri: 'https://media.discordapp.net/attachments/1040409257620799541/1049713538647724154/Logo1.png' }} style={styles.logo}/>
        <Text style={styles.logInText}>Iniciar Sesión</Text>
      <View style={styles.inputContainer}>
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
          style={styles.button}
        >
          Iniciar sesión
        </Button>
      </View>
      <Button mode="Text" textColor="#C83C45" onPress={handleBenefitNavigate}>
        No tienes cuenta? Registrate!
      </Button>
      <View>
        <GoogleLogIn />
      </View>
      </View>
    </ScrollView>
  );
};

export default LogInScreen;
