import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import app, { db } from '../../../firebase';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterUser = ({ navigation }) => {
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

  const registerAlert = () => {
    navigation.navigate('LogIn');
    return (
      window.alert('Usuario creado con éxito!')
    );
  };

  const submit = async (values) => {
    try {
      if (values.password !== values.password2) {
        setIsError(true);
      } else {
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
        registerAlert();
      }
    } catch (error) {
      console.error(error);
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
      />
    </ScrollView>
  );
};

export default RegisterUser;
