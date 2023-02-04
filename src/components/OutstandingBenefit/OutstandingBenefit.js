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
  navigation,
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
    navigation.navigate('Benefits', { screen: 'SelectedBenefit' });
  };

  return (
    <TouchableHighlight
      onPress={onPressSelectedBenefit}
      activeOpacity={0.6}
      underlayColor="#fff"
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
