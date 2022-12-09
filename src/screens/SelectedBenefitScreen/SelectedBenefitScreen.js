import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import {
  Image, ScrollView, Text, View,
} from 'react-native';
import { styles } from './selectedBenefitScreenStyles';

const SelectedBenefitScreen = ({ navigation }) => {
  const { benefit } = useSelector((state) => state);

  const [randomCodeBenefit, setRandomCodeBenefit] = useState('');

  useEffect(() => {
    const generateRandomString = (num) => {
      const result = Math.random().toString(36).substring(0, num);
      return result;
    };
    setRandomCodeBenefit(
      generateRandomString(13).slice(2, 13).toLocaleUpperCase(),
    );
  }, [benefit]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `${benefit.value?.url}` }}
        style={styles.benefitImage}
        resizeMode={'cover'}
      />
      <View style={styles.textContainer}>
        <Text style={styles.benefitTitle}>{benefit.value?.title}</Text>
        {benefit.value?.title && <View style={styles.lineBreaker} />}
        <Text style={styles.benefitLongDescription}>
          {benefit.value?.longDescription}
        </Text>
        <View style={styles.codeContainer}>
          {benefit.value?.title && (
            <Text style={styles.codeTitle}>Tu código es:</Text>
          )}
          {benefit.value?.title && (
            <Text style={styles.code}>{randomCodeBenefit}</Text>
          )}
          <View style={styles.goBackButtonContainer}>
            <Button
              mode='contained'
              buttonColor='#C83C45'
              style={styles.button}
              onPress={() => navigation.navigate('BenefitsList')}
            >
              Volver a mis beneficios
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SelectedBenefitScreen;
