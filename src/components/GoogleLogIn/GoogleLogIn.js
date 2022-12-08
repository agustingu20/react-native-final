import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { addDoc, collection, getDocs } from 'firebase/firestore';
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
        const firstRegistUser = [
          {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            isStaff: 'false',
          },
        ];
        const { docs } = await getDocs(collection(db, 'users'));
        const userCollectionInfo = docs
          .filter((usuario) => usuario.data().email === user.email)
          .map((usuario) => {
            return usuario.data();
          });
        const loginUserInfo = [
          {
            displayName: userCollectionInfo[0].displayName,
            email: userCollectionInfo[0].email,
            phoneNumber: userCollectionInfo[0].phoneNumber,
            photoURL: userCollectionInfo[0].photoURL,
            isStaff: userCollectionInfo[0].isStaff,
          },
        ];
        if (userCollectionInfo.length === 0 || user.email !== userCollectionInfo[0].email) {
          const data = await addDoc(
            collection(db, 'users'),
            firstRegistUser[0],
          );
        }
        if (user.email === userCollectionInfo[0].email) {
          dispatch(setUser(loginUserInfo));
          dispatch(setToken(token));
        }
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
        <GoogleButton
          label="Iniciar Sesión con Google"
          type="light"
          style={styles.googleButton}
        />
      </View>
    </Button>
  );
};

export default GoogleLogIn;
