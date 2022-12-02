import React from 'react';
import { View, Animated } from 'react-native';
import {
  benefitsArrayStaff,
  benefitsArrayUser,
} from '../../helpers/benefitsArray';
import BenefitsCard from '../BenefitsCard/BenefitsCard';
import { WelcomeCarrousel } from '../WelcomeCarrousel';
import { styles } from './carouselCardStyles';

const CarouselCard = ({ isStaff }) => {
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={isStaff ? benefitsArrayStaff : benefitsArrayUser}
        keyExtractor={(item) => item.index}
        horizontal
        showsHorizontalScrollIndicator={true}
        pagingEnabled
        renderItem={() => {
          return (
            <View style={styles.cards}>
              <WelcomeCarrousel/>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CarouselCard;
