import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import GoogleButton from 'react-google-button';
import { Button } from 'react-native-paper';
import { styles } from './googleLogInStyle';
import app from '../../../firebase';
import { setToken } from '../../store/tokenSlice';
import { setUser } from '../../store/userSlice';

const GoogleLogIn = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const googleAuth = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const getGoogleLogInInfo = async () => {
    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const { user } = result;
        dispatch(setUser({
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
        }));
        dispatch(setToken(token));
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
        <GoogleButton type='light' style={styles.googleButton} />
      </View>
    </Button>
  );
};

export default GoogleLogIn;
