import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Image, Text, View, TouchableHighlight,
} from 'react-native';
import { styles } from './outstandingBenefitStyles';
import { setSelectedBenefit } from '../../store/selectedBenefitSlice';

const OutstandingBenefit = ({
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
        <Image source={{ uri: `${url}` }} style={styles.cardImage} />
        <Text style={styles.benefitText}>{shortDescription}</Text>
        <Text style={styles.benefitText}>{days}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default OutstandingBenefit;
