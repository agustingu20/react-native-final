import React from 'react';
import { View, Animated } from 'react-native';
import { benefitsArray } from '../../helpers/benefitsArray';
import BenefitsCard from '../BenefitsCard/BenefitsCard';
import { styles } from './carouselCardStyles';

const CarouselCard = () => {
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={benefitsArray}
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
