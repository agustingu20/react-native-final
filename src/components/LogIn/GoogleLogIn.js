import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import {
  GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult,
} from 'firebase/auth';
import { styles } from './logInStyles';
import app from '../../../firebase';

const GoogleLogIn = () => {
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
        console.log(token, user);
      }).catch((error) => {
        console.log(error);
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
