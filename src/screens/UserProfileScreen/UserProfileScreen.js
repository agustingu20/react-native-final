import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './userScreenStyles';

const UserProfileScreen = () => {
  const { user } = useSelector((state) => state);
  console.log(user?.value?.user);
  return (
    <View style={styles.container}>
      <Image
      source={`${user?.value?.user.photoURL}`}
      style={styles.profileImage}
      />
      <Text>{user?.value?.user.displayName}</Text>
      <Text>{user?.value?.user.email}</Text>
    </View>
  );
};

export default UserProfileScreen;
