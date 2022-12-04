import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { styles } from './googleLogInStyle';
import app from '../../../firebase';
import { setToken } from '../../store/tokenSlice';
import { setUser } from '../../store/userSlice';
import GoogleButton from 'react-google-button';

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
    <TouchableHighlight onPress={googleAuth}>
      <View style={styles.googleButtonContainer}>
        <GoogleButton type='light' style={styles.googleButton} />
      </View>
    </TouchableHighlight>
  );
};

export default GoogleLogIn;
