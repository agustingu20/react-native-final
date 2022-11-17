import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './benefitsCardStyles';

const BenefitsCard = () => {
  return (
    <View style={styles.containerCard}>
      <Text style={styles.titleCard}>10% de descuento</Text>
      <Image
        source={{ uri: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/050/300/themes/common/ogimage-1363177326-1646402915-a1ab5d4fc53341bf3895a4429d645cc31646402915.png?0' }}
        style={styles.cardImage}
      />
      <Text>Descripción del beneficio</Text>
      <Text>Lunes a Viernes</Text>
    </View>
  );
};

export default BenefitsCard;
