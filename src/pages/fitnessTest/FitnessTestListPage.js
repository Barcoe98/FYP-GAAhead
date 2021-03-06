import React, {useEffect, useState} from "react";
import { IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard, IonList, IonItem } from '@ionic/react';
import PageHeader from '../../components/headers'
import { barbell, calendar, flame, time } from "ionicons/icons";
import FitnessTestCard from '../../components/fitnessTestCard/index'
import {firestore} from'../../firebase'
import "./fitnessTest.css"

const FitnessTestPage = () => {
  const [fitnessTests, setFitnessTests ] = useState([])

  useEffect(() => {
    const testRef = firestore.collection('fitness_tests')
    testRef.get().then((snapshot) => {
      const tests = snapshot.docs.map((doc) => ({ 
        id:doc.id,
        ...doc.data(),
      }))
      setFitnessTests(tests)
    })
   },[]);

  return (
    <IonPage>
      <PageHeader title='Fitness Tests'></PageHeader>
        <IonContent>
        <IonList>
        {fitnessTests.map((fTest) => 
            <FitnessTestCard fTest={fTest}></FitnessTestCard>
        )}
        </IonList>
        </IonContent>
    </IonPage>
  );
};

export default FitnessTestPage;