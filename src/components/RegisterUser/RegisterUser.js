import React from 'react';
import {
  Button, SafeAreaView, Text, TextInput, View,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { styles } from './RegisterUserStyles';
import app, { db } from '../../../firebase';
import EmailLogin from '../LogIn/EmailLogin';

const RegisterUser = ({ navigation }) => {
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
      if (values.password !== values.password2) return alert('las contraseñas no coinciden');
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      const { user } = userCredential;
      const infoUser = {
        displayName: values.name,
        email: values.email,
        phoneNumber: null,
        photoURL: 'https://cdn.discordapp.com/attachments/1040409257620799541/1047986728771801129/unknown.png',
        isStaff: 'false',
      };
      const data = await addDoc(collection(db, 'users'), infoUser);
      console.log(user);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.containerR}>
      <Text style={styles.title}>Ingresa tus Datos</Text>
      <View style={styles.containerInputs}>
        <SafeAreaView>
          <Controller
            control={control}
            rules={{ required: true, maxLength: 25 }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text>Nombre</Text>
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
            name="name"
            defaultValue={defaultValues.name}
          />
          {errors.name?.type === 'required' && (
            <Text style={styles.errorMsg}>nombre requerido</Text>
          )}
          {errors.name?.type === 'maxLength' && (
            <Text style={styles.errorMsg}>nombre maximo 25 caracteres</Text>
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
                  style={styles.input}
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
            <Text style={styles.errorMsg}>ingrese un mail válido</Text>
          )}
          {errors.email?.type === 'required' && (
            <Text style={styles.errorMsg}>campo email requerido</Text>
          )}
          <Controller
            control={control}
            rules={{ required: true, maxLength: 25, minLength: 8 }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text>Contraseña</Text>
                <TextInput
                  style={styles.input}
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
            <Text style={styles.errorMsg}>Contraseña requerida</Text>
          )}
          {errors.password?.type === 'minLength' && (
            <Text style={styles.errorMsg}>Contraseña minimo 8 caracteres</Text>
          )}
          {errors.password?.type === 'maxLength' && (
            <Text style={styles.errorMsg}>Contraseña maximo 25 caracteres</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text>Repetir Contraseña</Text>
                <TextInput
                  style={styles.input}
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
        </SafeAreaView>
        <Button
          title="Adherite"
          style={styles.buttonE}
          onPress={handleSubmit(submit)}
        />
      </View>
      <View style={styles.divSesion}>
        <Text style={styles.sesion}>
          ¿Ya sos parte del club?
          <Text style={styles.initSesion}>¡iniciar sesión!</Text>
        </Text>
      </View>
      <View>
        <EmailLogin navigation={navigation}/>
      </View>
    </View>
  );
};

export default RegisterUser;
