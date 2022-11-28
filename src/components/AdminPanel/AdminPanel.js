import React from 'react'
import { collection, getDocs } from "firebase/firestore";

const AdminPanel =  async () =>  {

    const querySnapshot = await getDocs(collection(db, 'benefits'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

  return (
    <div>AdminPanel</div>
  )
}

export default AdminPanel