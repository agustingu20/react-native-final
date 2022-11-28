import React from 'react';
import { View, Animated } from 'react-native';
import {
  benefitsArrayStaff,
  benefitsArrayUser,
} from '../../helpers/benefitsArray';
import BenefitsCard from '../BenefitsCard/BenefitsCard';
import { styles } from './carouselCardStyles';

const CarouselCard = ({ isStaff }) => {
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={isStaff ? benefitsArrayStaff : benefitsArrayUser}
        keyExtractor={(item) => item.index}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View style={styles.cards}>
              <BenefitsCard {...item} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CarouselCard;
