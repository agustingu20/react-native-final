import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import app, { db } from '../../../firebase';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterUser = ({ navigation }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      if (values.password === values.password2) {
        setIsLoading(true);
        setIsError(false);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password,
        );
        const { user } = userCredential;
        const userRegisterInfo = [
          {
            displayName: values.name,
            email: user.email,
            photoURL:
              'https://cdn.discordapp.com/attachments/1040409257620799541/1049713538647724154/Logo1.png',
            phoneNumber: user.phoneNumber,
            isStaff: 'false',
          },
        ];
        await addDoc(collection(db, 'users'), userRegisterInfo[0]);
        Alert.alert('Registro exitoso', 'Se registró con éxito el usuario', [
          {
            text: 'Aceptar',
            onPress: () => {
              setIsLoading(false);
              navigation.navigate('LogIn');
            },
          },
        ]);
      } else {
        setIsError(true);
      }
    } catch (error) {
      Alert.alert(
        'Ups! Hubo un error',
        'El usuario ya se encuentra registrado.',
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
    <ScrollView>
      <RegisterForm
        control={control}
        handleSubmit={handleSubmit}
        errors={errors}
        defaultValues={defaultValues}
        submit={submit}
        isError={isError}
        isLoading={isLoading}
      />
    </ScrollView>
  );
};

export default RegisterUser;
