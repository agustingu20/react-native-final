import React from 'react';
import { View } from 'react-native';
import CarouselCard from '../../components/CarouselCard/CarouselCard';
import OutstandingBenefit from '../../components/OustandingBenefit/OutstandingBenefit';
import { styles } from './homeScreenStyles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <OutstandingBenefit />
        <CarouselCard />
    </View>
  );
};

export default HomeScreen;
