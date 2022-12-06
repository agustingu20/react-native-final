import React, { useEffect } from 'react';
import { View } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { Button } from 'react-native-paper';
import { styles } from './googleLogInStyle';
import app, { db } from '../../../firebase';
import { setUser } from '../../store/userSlice';
import { setToken } from '../../store/tokenSlice';

const GoogleLogIn = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const dispatch = useDispatch();

  const googleAuth = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const getGoogleLogInInfo = () => {
    getRedirectResult(auth)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const { user } = result;
        const infoUser = [
          {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            isStaff: 'false',
          },
        ];
        dispatch(setUser(infoUser));
        dispatch(setToken(token));
        const data = await addDoc(collection(db, 'users'), infoUser[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getGoogleLogInInfo();
  }, []);

  return (
    <Button onPress={googleAuth}>
      <View style={styles.googleButtonContainer}>
        <GoogleButton label='Iniciar Sesión con Google' type="light" style={styles.googleButton} />
      </View>
    </Button>
  );
};

export default GoogleLogIn;
