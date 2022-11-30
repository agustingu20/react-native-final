import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Image, Text, View } from 'react-native';
import { styles } from './benefitScreenStyles';

const BenefitScreen = () => {
  // const { benefit } = useSelector((state) => state);
  // const [randomCodeBenefit, setRandomCodeBenefit] = useState('');

  // useEffect(() => {
  //   const generateRandomString = (num) => {
  //     const result = Math.random().toString(36).substring(0, num);
  //     return result;
  //   };
  //   setRandomCodeBenefit(generateRandomString(13).slice(2, 13).toLocaleUpperCase());
  // }, [benefit]);

  return (
    // <View style={styles.container}>
    <View>
      <Text>Benefits Screen: map de array de beneficios en cards</Text>
    </View>
    //   <Image
    //     source={{ uri: `${benefit.value?.url}` }}
    //     style={styles.benefitImage}
    //     resizeMode={'contain'}
    //   />
    //   <View style={styles.textContainer}>
    //     <Text style={styles.benefitTitle}>{benefit.value?.title}</Text>
    //     {benefit.value?.title && <View style={styles.lineBreaker} />}
    //     <Text style={styles.benefitLongDescription}>
    //       {benefit.value?.longDescription}
    //     </Text>
    //       <View style={styles.codeContainer}>
    //         {benefit.value?.title && <Text style={styles.codeTitle}>Tu código es:</Text>}
    //        {benefit.value?.title && <Text style={styles.code}>{randomCodeBenefit}</Text>}
    //       </View>
    //   </View>
    // </View>
  );
};

export default BenefitScreen;
