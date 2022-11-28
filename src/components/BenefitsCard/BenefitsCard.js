import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Image, Text, View, TouchableHighlight,
} from 'react-native';
import { styles } from './benefitsCardStyles';
import { setSelectedBenefit } from '../../store/selectedBenefitSlice';

const BenefitsCard = ({
  title,
  url,
  shortDescription,
  days,
  longDescription,
}) => {
  const dispatch = useDispatch();
  const onPressSelectedBenefit = () => {
    dispatch(
      setSelectedBenefit({
        title,
        url,
        shortDescription,
        days,
        longDescription,
      }),
    );
  };

  return (
    <TouchableHighlight
      onPress={onPressSelectedBenefit}
      style={styles.containerCard}
    >
      <View>
        <Text style={styles.titleCard}>{title}</Text>
        <Image source={{ uri: `${url}` }} style={styles.cardImage} />
        <Text style={styles.textCard}>{shortDescription}</Text>
        <Text style={styles.textCard}>{days}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default BenefitsCard;
