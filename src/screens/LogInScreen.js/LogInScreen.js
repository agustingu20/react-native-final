import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { setToken } from '../../store/tokenSlice';
import { setUser } from '../../store/userSlice';
import GoogleLogIn from '../../components/GoogleLogIn/GoogleLogIn';
import app, { db } from '../../../firebase';
import { LoginForm } from '../../components/LoginForm';
import { styles } from './logInScreenStyle';

const LogInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const defaultValues = {
    email: '',
    password: '',
  };
  const submit = async (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        const userRegisterInfo = [
          {
            displayName: 'usuario',
            email: user.email,
            photoURL:
              'https://cdn.discordapp.com/attachments/1040409257620799541/1049713538647724154/Logo1.png',
            phoneNumber: user.phoneNumber,
            isStaff: 'false',
          },
        ];
        dispatch(setToken(user.accessToken));
        const { docs } = await getDocs(collection(db, 'users'));
        const userData = docs
          .filter((usuario) => user.email === usuario.data().email)
          .map((usuario) => {
            return { ...usuario.data() };
          });
        if (user.email && userData.length === 0) {
          await addDoc(collection(db, 'users'), userRegisterInfo[0]);
          dispatch(setUser(userRegisterInfo));
          navigation.navigate('Home');
        } else {
          dispatch(setUser(userData));
          navigation.navigate('Home');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleBenefitNavigate = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <View>
        <LoginForm
          handleBenefitNavigate={handleBenefitNavigate}
          submit={submit}
          handleSubmit={handleSubmit}
          defaultValues={defaultValues}
          control={control}
          errors={errors}
        />
      </View>
      <View>
        <GoogleLogIn />
      </View>
      </View>
    </ScrollView>
  );
};

export default LogInScreen;
