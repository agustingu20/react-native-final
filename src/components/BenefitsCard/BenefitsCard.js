import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, Title, Paragraph, Button,
} from 'react-native-paper';
import { styles } from './benefitsCardStyles';
import { setSelectedBenefit } from '../../store/selectedBenefitSlice';

const BenefitsCard = ({ benefit, navigation }) => {
  const dispatch = useDispatch();

  const onPressSelectedBenefit = () => {
    dispatch(setSelectedBenefit({
      url: benefit.url,
      shortDescription: benefit.shortDescription,
      longDescription: benefit.longDescription,
      title: benefit.title,
    }));
    navigation.navigate('SelectedBenefit');
  };

  return (
    <Card style={styles.containerCard}>
      <Card.Cover source={benefit.url} style={styles.cardImage} />
      <Card.Content>
        <Title style={styles.titleCard}>{benefit.title}</Title>
        <Paragraph style={styles.textCard}>Válido: {benefit.days}</Paragraph>
        <Button
          mode='contained'
          buttonColor='#C83C45'
          onPress={onPressSelectedBenefit}
          style={styles.button}
        >
          Lo quiero!
        </Button>
      </Card.Content>
    </Card>
  );
};

export default BenefitsCard;
