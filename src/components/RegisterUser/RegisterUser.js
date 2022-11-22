import React, { useState } from 'react';
import {
  Button,
  SafeAreaView, Text, TextInput, View,
} from 'react-native';
import { styles } from './RegisterUserStyles';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const handleSubmit = () => {
    console.log(name, email, password);
  };
  return (
    <View style={styles.containerR}>
      <Text style={styles.title}>Ingresa tus Datos</Text>
       <View style={styles.containerInputs}>
          <SafeAreaView>
            <Text>Nombre</Text>
            <TextInput style={styles.input} onChangeText={(val) => setName(val)}/>
            <Text>Email</Text>
            <TextInput keyboardType='email-address' style={styles.input} onChangeText={(val) => setEmail(val)}/>
            <Text>Contraseña</Text>
            <TextInput style={styles.input} onChangeText={(val) => setPassword(val)}/>
            <Text>Repetir contraseña</Text>
            <TextInput style={styles.input} onChangeText={(val) => setPassword2(val)}/>
            <Button title="Adherite" style={styles.buttonE} onPress={handleSubmit} />
          </SafeAreaView>
        </View>
        <View style={styles.divSesion}>
          <Text style={styles.sesion}>¿Ya sos parte del club?
            <Text style={styles.initSesion}>¡iniciar sesión!</Text>
          </Text>
        </View>
    </View>
  );
};

export default RegisterUser;
