import React from 'react';
// import { useDispatch } from 'react-redux';
// import {
//   Image, Text, View, TouchableHighlight, Button
// } from 'react-native';
import {
  Card, Title, Paragraph, Button,
} from 'react-native-paper';
import { styles } from './benefitsCardStyles';

// import { styles } from './benefitsCardStyles';
// import { setSelectedBenefit } from '../../store/selectedBenefitSlice';

const BenefitsCard = ({ benefit }) => {
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
      <Card.Cover source={benefit.url} style={styles.cardImage} />
      <Card.Content>
        <Title style={styles.titleCard}>{benefit.title}</Title>
        <Paragraph style={styles.textCard}>Válido: {benefit.days}</Paragraph>
        <Button mode="contained" buttonColor="#C83C45">
          Lo quiero!
        </Button>
      </Card.Content>
    </Card>
  );
};

export default BenefitsCard;
