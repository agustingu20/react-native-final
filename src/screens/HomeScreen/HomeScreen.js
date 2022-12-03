import React from 'react';
import {
  Image, ScrollView, Text, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import CarouselCard from '../../components/CarouselCard/CarouselCard';
import OutstandingBenefit from '../../components/OutstandingBenefit/OutstandingBenefit';
import { styles } from './homeScreenStyles';
import { outstandingBenefit } from '../../helpers/outstandingBenefit';

const HomeScreen = ({ isStaff, navigation }) => {
  const handleBenefitNavigate = () => {
    navigation.navigate('Benefits');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={isStaff ? styles.homeStaffHeader : styles.homeUserHeader}>
          <Image
            source={{
              uri: 'https://media.discordapp.net/attachments/1040409257620799541/1048049382953603132/Logo.png',
            }}
            style={styles.homeImage}
            resizeMode={'contain'}
          />
        </View>

        <CarouselCard isStaff={isStaff} />

        <View style={styles.homeTitleContainer}>
          <Text style={styles.homeTitle}>BENEFICIO DESTACADO DEL MES: </Text>
        </View>

        <OutstandingBenefit {...outstandingBenefit} />

        <View style={styles.benefitButton}>
          <Button
            icon="gift"
            mode="contained"
            onPress={handleBenefitNavigate}
            buttonColor="#C83C45"
          >
            Conocé todos tus beneficios
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
