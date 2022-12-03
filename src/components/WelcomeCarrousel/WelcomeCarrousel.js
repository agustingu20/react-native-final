import React from 'react';
// import { Carrousel1 } from '../../../assets/Carrousel1'
import { View, Image } from 'react-native';
import { styles } from './welcomeCarrouselStyles';

const WelcomeCarrousel = ({ url, index }) => {
  return (
    <View style={styles.container} key={`images-${index}`}>
      <Image
        style={styles.imageContainer}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

export default WelcomeCarrousel;
