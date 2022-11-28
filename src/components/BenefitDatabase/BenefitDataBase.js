import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import app from '../../../firebase';

const BenefitDataBase = () => {
  const db = getFirestore(app);

  const createDataCollection = async () => {
    const infoBenefit = {
      name: 'La Argentina',
      type: '10% descuento',
      shortDescription: 'Descuento aniversario',
      longDescription: 'Cumplimos 100 años y decidimos ferjarlo creando un Centro de Experiancias Virtual donde puedas conocer lo que hacemos, de una forma divertida. Juga en familia y aprendé más sobre nuestra compañía.',
      days: 'Lunes a Viernes',
    };
    try {
      const data = await addDoc(collection(db, 'benefits'), infoBenefit);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TouchableHighlight onPress={ createDataCollection }>
    <View>
      <Text>
        Create data collection
      </Text>
    </View>
  </TouchableHighlight>
  );
};

export default BenefitDataBase;
