import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import {
  GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { styles } from './logInStyles';
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

  const getGoogleLogInInfo = () => {
    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result;
        dispatch(setUser(user));
        dispatch(setToken(token));
      }).catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getGoogleLogInInfo();
  }, []);

  return (
    <TouchableHighlight onPress={googleAuth}>
        <View style={styles.button}>
          <Text>Iniciar con Google</Text>
        </View>
      </TouchableHighlight>
  );
};

export default GoogleLogIn;
