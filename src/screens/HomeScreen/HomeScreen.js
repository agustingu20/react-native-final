import React from 'react';
import {
  Image, ScrollView, Text, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import CarouselCard from '../../components/CarouselCard/CarouselCard';
import OutstandingBenefit from '../../components/OutstandingBenefit/OutstandingBenefit';
import { styles } from './homeScreenStyles';
import { outstandingBenefit } from '../../helpers/outstandingBenefit';

const HomeScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state);

  const handleBenefitNavigate = () => {
    navigation.navigate('Benefits');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={user?.value?.[0].isStaff ? styles.homeStaffHeader : styles.homeUserHeader}>
          <Image
            source={user?.value?.[0].isStaff === 'true' ? {
              uri: 'https://cdn.discordapp.com/attachments/1040409257620799541/1048391510799949844/LogoStaff.png',
            } : {
              uri: 'https://media.discordapp.net/attachments/1040409257620799541/1048049382953603132/Logo.png',
            } }
            style={styles.homeImage}
            resizeMode={'contain'}
          />
        </View>

        <CarouselCard isStaff={user?.value?.[0].isStaff} />

        <View style={styles.homeTitleContainer}>
          <Text style={styles.homeTitle}>BENEFICIO DESTACADO DEL MES: </Text>
        </View>

        <OutstandingBenefit {...outstandingBenefit} navigation={navigation}/>

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
