import React, { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';

const AdminPanel = () => {
  const prueba = async () => {
    const querySnapshot = await getDocs(collection(db, 'benefits'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
    });
  };

  useEffect(() => {
    prueba();
  }, []);

  return <div>AdminPanel</div>;
};

export default AdminPanel