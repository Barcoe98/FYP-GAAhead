import React, {useEffect, useState} from "react";
import { IonContent,  IonPage, IonList } from '@ionic/react';
import PageHeaderAdd from '../../components/headers/addHeader/index'
import FitnessTestCard from '../../components/cards/fitnessTestCard/index'

import {firestore} from'../../firebase'
import { useAuth} from '../../contexts/authContext'
 import '../pages.css'

const FitnessTestPage = () => {
  const [fitnessTests, setFitnessTests ] = useState([])
  const { currentUser } = useAuth()

  useEffect(() => {
    const fTestsRef = firestore.collection('users').doc(currentUser?.uid).collection('fitness_tests')
    console.log(currentUser?.uid)
    fTestsRef.get().then((snapshot) => {
      const tests = snapshot.docs.map((doc) => ({ 
        id:doc.id,
        ...doc.data(),
      }))
      setFitnessTests(tests)
    })
   },[currentUser]);

  return (
    <IonPage>
    <PageHeaderAdd title=" Add Fitness Test" href="/manager/fitness/test/add"></PageHeaderAdd>
      <IonContent>
          <IonList id="bg-col">
            {fitnessTests.map((fTest) => <FitnessTestCard fTest={fTest}></FitnessTestCard>)}
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default FitnessTestPage;