import React from 'react';
import { View, Animated } from 'react-native';
import { homeScreenImages } from '../../helpers/homeImages';
import { WelcomeCarrousel } from '../WelcomeCarrousel';
import { styles } from './carouselCardStyles';

const CarouselCard = () => {
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={homeScreenImages}
        keyExtractor={(item) => item.index}
        horizontal
        showsHorizontalScrollIndicator={true}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View style={styles.cards}>
              <WelcomeCarrousel {...item}/>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CarouselCard;
