import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './benefitsCardStyles';

const BenefitsCard = ({
  title, url, shortDescription, days,
}) => {
  return (
    <View style={styles.containerCard}>
      <Text style={styles.titleCard}>{title}</Text>
      <Image
        source={{ uri: `${url}` }}
        style={styles.cardImage}
      />
      <Text>{shortDescription}</Text>
      <Text>{days}</Text>
    </View>
  );
};

export default BenefitsCard;
