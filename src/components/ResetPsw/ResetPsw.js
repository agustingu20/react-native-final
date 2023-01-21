import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { styles } from './ResetPswStyles';
import app from '../../../firebase';

const ResetPsw = () => {
  const [email, setEmail] = useState('');
  const [sendMsg, setSendMsg] = useState(false);
  const [buttonSend, setButtonSend] = useState(false);
  const auth = getAuth(app);
  const resetPsw = async () => {
    try {
      setButtonSend(true);
      await sendPasswordResetEmail(auth, email);
      setSendMsg(true);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => setSendMsg(false), 5000);
    setButtonSend(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cambiar Contraseña</Text>
      <TextInput onChangeText={(val) => setEmail(val)} label="Email" underlineColor="#fff" activeUnderlineColor="#C83C45"/>
      <Button onPress={resetPsw} style={styles.button} mode="contained" textColor="#fff">{buttonSend ? 'enviando...' : 'Enviar'}</Button>
      { sendMsg && <Text style={styles.successMsg}>hemos enviado un email a tu correo</Text>}
    </View>
  );
};

export default ResetPsw;
