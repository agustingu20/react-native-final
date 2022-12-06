import React, { useState } from 'react';
import {
  SafeAreaView, Text, View,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { styles } from './RegisterUserStyles';
import app from '../../../firebase';

const RegisterUser = () => {
  const [isError, setIsError] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const auth = getAuth(app);
  const defaultValues = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };
  const submit = async (values) => {
    try {
      if (values.password !== values.password2) {
        setIsError(true);
      } else {
        setIsError(false);
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      const { user } = userCredential;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Ingresa tus Datos</Text>
      <View>
        <SafeAreaView>
          <Controller
            control={control}
            rules={{ required: true, maxLength: 25 }}
            render={({ field: { onChange, value } }) => (
              <>
                <Text>Nombre</Text>
                <TextInput
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
            name="name"
            defaultValue={defaultValues.name}
          />
          {errors.name?.type === 'required' && (
            <Text>No olvides colocar tu nombre!</Text>
          )}
          {errors.name?.type === 'maxLength' && (
            <Text>nombre maximo 25 caracteres</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text>Email</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
            name="email"
            defaultValue={defaultValues.email}
          />
          {errors.email?.type === 'pattern' && (
            <Text>Ingresa un mail válido</Text>
          )}
          {errors.email?.type === 'required' && (
            <Text>No olvides colocar tu email!</Text>
          )}
          <Controller
            control={control}
            rules={{ required: true, maxLength: 25, minLength: 8 }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text>Contraseña</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={true}
                />
              </>
            )}
            name="password"
            defaultValue={defaultValues.password}
          />
          {errors.password?.type === 'required' && (
            <Text>
              No olvides colocar tu contraseña!
            </Text>
          )}
          {errors.password?.type === 'minLength' && (
            <Text >Contraseña minimo 8 caracteres</Text>
          )}
          {errors.password?.type === 'maxLength' && (
            <Text>Contraseña maximo 25 caracteres</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text>Repetir Contraseña</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={true}
                />
              </>
            )}
            name="password2"
            defaultValue={defaultValues.password2}
          />
          {isError && (
            <Text>Las contraseñas no coinciden</Text>
          )}
        </SafeAreaView>
        <Button
          title="Adherite"
          onPress={handleSubmit(submit)}
        />
      </View>
      <View>
        <Text>
          ¿Ya sos parte del club?
          <Text>¡iniciar sesión!</Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterUser;
