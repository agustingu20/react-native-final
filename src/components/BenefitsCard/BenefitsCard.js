import React from 'react';
// import { useDispatch } from 'react-redux';
import {
  Image, Text, View, TouchableHighlight, Button
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from './benefitsCardStyles';

// import { styles } from './benefitsCardStyles';
// import { setSelectedBenefit } from '../../store/selectedBenefitSlice';

const BenefitsCard = ({ benefit }) => {
  console.log(benefit)
  // , title,
  // url,
  // shortDescription,
  // days,
  // longDescription, }) => {
  // const dispatch = useDispatch();
  // const onPressSelectedBenefit = () => {
  //   dispatch(
  //     setSelectedBenefit({
  //       title,
  //       url,
  //       shortDescription,
  //       days,
  //       longDescription,
  //     }),
  //   );

  return (
    <Card style={styles.containerCard}>
    <Card.Cover source={benefit.url} style={styles.cardImage}/>
    <Card.Content>
      <Title>{benefit.title}</Title>
      <Paragraph>{benefit.shotDescription}</Paragraph>
    </Card.Content>
  </Card>
);
};

{/* <TouchableHighlight
  onPress={onPressSelectedBenefit}
  style={styles.containerCard}
>
  <View>
    <Text style={styles.titleCard}>{title}</Text>
    <Image source={{ uri: `${url}` }} style={styles.cardImage} />
    <Text style={styles.textCard}>{shortDescription}</Text>
    <Text style={styles.textCard}>{days}</Text>
  </View>
</TouchableHighlight> */}

export default BenefitsCard;
