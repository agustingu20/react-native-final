import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import CarouselCard from '../../components/CarouselCard/CarouselCard';
import OutstandingBenefit from '../../components/OutstandingBenefit/OutstandingBenefit';
import { styles } from './homeScreenStyles';
import { outstandingBenefit } from '../../helpers/outstandingBenefit';

const HomeScreen = ({ isStaff }) => {
  return (
    <View style={styles.container}>
      <View style={isStaff ? styles.homeStaffHeader : styles.homeUserHeader}>
        <Image
          source={{
            uri: 'https://campus.rollingcodeschool.com/pluginfile.php/1/core_admin/logo/0x150/1633815474/logo2.png',
          }}
          style={styles.homeImage}
          resizeMode={'contain'}
        />
      </View>
      <OutstandingBenefit {...outstandingBenefit} />
      <View style={styles.homeTitleContainer}>
        <Text style={styles.homeTitle}>Tus beneficios: </Text>
      </View>
      <CarouselCard isStaff={isStaff}/>
    </View>
  );
};

export default HomeScreen;
