import React from 'react';
import { Image, ScrollView, Text, View, Button } from 'react-native';
import CarouselCard from '../../components/CarouselCard/CarouselCard';
import OutstandingBenefit from '../../components/OutstandingBenefit/OutstandingBenefit';
import { styles } from './homeScreenStyles';
import { outstandingBenefit } from '../../helpers/outstandingBenefit';
import { store } from '../../store/store'
import { Provider } from 'react-redux';

const HomeScreen = ({ isStaff, navigation }) => {

  const handleBenefitNavigate = () => {
    navigation.navigate('Benefits')
  }

  const handleProfileNavigate = () => {
    navigation.navigate('Profile')
  }

  return (
    <Provider store={store}>
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

          <CarouselCard isStaff={isStaff}/>

          <View style={styles.homeTitleContainer}>
            <Text style={styles.homeTitle}>BENEFICIO DESTACADO DEL MES: </Text>
          </View>
          
          <OutstandingBenefit {...outstandingBenefit} />

          <View>
            <Button
            onPress={handleBenefitNavigate}
            title="Conocé tus beneficios:"
            color="#C83C45"
            /> 
          </View>


        </View>

      </ScrollView>
    </Provider>
  );
};

export default HomeScreen;
