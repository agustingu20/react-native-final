import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import BenefitsCard from '../../components/BenefitsCard/BenefitsCard';
import { db } from '../../../firebase';

const BenefitsScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state);
  const [benefitData, setBenefitData] = useState([]);

  const getBenefits = async () => {
    const { docs } = await getDocs(collection(db, 'benefits'));
    const benefitMap = docs.map((benefit) => {
      return { ...benefit.data(), id: benefit.id };
    });
    setBenefitData(benefitMap);
  };

  useEffect(() => {
    getBenefits();
  }, []);

  return (
    <ScrollView>
      {benefitData
        ?.filter(
          user?.value?.[0].isStaff === 'true'
            ? (benefit) => benefit.isStaff === 'true'
            : (benefit) => benefit.isStaff === 'false',
        )
        .map((benefit) => (
          <BenefitsCard benefit={benefit} key={benefit.id} navigation={navigation} />
        ))}
    </ScrollView>
  );
};

export default BenefitsScreen;
