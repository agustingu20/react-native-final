import React from 'react';
import { View } from 'react-native';
import ResetPsw from '../../components/ResetPsw/ResetPsw';

const ResetPswScreen = ({ navigation }) => {
  const handleNavigationSubmit = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View>
      <ResetPsw handleNavigationSubmit={handleNavigationSubmit} />
    </View>
  );
};

export default ResetPswScreen;
