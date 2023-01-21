import React, { useState } from 'react';
import {
  View, Text, Alert, ActivityIndicator,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { Controller, useForm } from 'react-hook-form';
import { styles } from './ResetPswStyles';
import app from '../../../firebase';

const ResetPsw = ({ handleNavigationSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth(app);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const defaultValues = {
    email: '',
  };

  const submit = async (values) => {
    try {
      setIsLoading(true);
      await sendPasswordResetEmail(auth, values.email);
      Alert.alert(
        'Cambio de contraseña',
        'Se envió un email a tu correo para el cambio de contraseña',
        [
          {
            text: 'Aceptar',
            onPress: () => {
              setIsLoading(false);
              handleNavigationSubmit();
            },
          },
        ],
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'Email no encontrado',
        [
          {
            text: 'Aceptar',
            onPress: () => {
              setIsLoading(false);
            },
          },
        ],
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cambio de Contraseña</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              onChangeText={onChange}
              style={styles.input}
              value={value}
              label="Email"
              underlineColor="#fff"
              activeUnderlineColor="#C83C45"
              keyboardType="email-address"
            />
          </>
        )}
        name="email"
        defaultValue={defaultValues.email}
      />
      {errors.email?.type === 'pattern' && (
        <Text style={styles.errorMsg}>Ingresa un mail válido</Text>
      )}
      {errors.email?.type === 'required' && (
        <Text style={styles.errorMsg}>No olvides colocar tu email!</Text>
      )}
      {isLoading ? (
        <ActivityIndicator size="large" color="#C83C45" />
      ) : (
        <Button
          onPress={handleSubmit(submit)}
          style={styles.button}
          mode="contained"
          textColor="#fff"
        >
          Enviar
        </Button>
      )}
    </View>
  );
};

export default ResetPsw;
