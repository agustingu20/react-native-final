import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../store/tokenSlice';
import { setUser } from '../../store/userSlice';
import { styles } from './userScreenStyles';

const UserProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const closeSession = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={`${user?.value[0].photoURL}`}
        style={styles.profileImage}
      />
      {user.value && <Text style={styles.profileTitle}>Nombre</Text>}
      <Text style={styles.profileText}>{user?.value[0].displayName}</Text>
      {user.value && <Text style={styles.profileTitle}>Email</Text>}
      <Text style={styles.profileText}>{user?.value[0].email}</Text>
      {user.value && <Text style={styles.profileTitle}>Tipo de usuario</Text>}
      {user.value && (
        <Text style={styles.profileText}>
          {user?.value[0].isStaff === 'true' ? 'Staff' : 'User'}
        </Text>
      )}
      <Button
          mode="contained"
          buttonColor="#C83C45"
          style={styles.closeSessionButton}
          onPress={closeSession}
        >
          Cerrar sesión
        </Button>
    </View>
  );
};

export default UserProfileScreen;
