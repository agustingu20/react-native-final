import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './userScreenStyles';

const UserProfileScreen = () => {
  // const { user } = useSelector((state) => state);
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
    // <View style={styles.container}>
    //   <Image source={`${user?.value?.photoURL}`} style={styles.profileImage} />
    //   {user.value && <Text style={styles.profileTitle}>Nombre</Text>}
    //   <Text style={styles.profileText}>{user?.value?.displayName}</Text>
    //   {user.value && <Text style={styles.profileTitle}>Email</Text>}
    //   <Text style={styles.profileText}>{user?.value?.email}</Text>
    //   {user.value && <Text style={styles.profileTitle}>Tipo de usuario</Text>}
    //   {user.value && <Text style={styles.profileText}>Staff</Text>}
    // </View>
  );
};

export default UserProfileScreen;
