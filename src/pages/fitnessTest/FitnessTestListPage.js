import React, {useEffect, useState} from "react";
import { IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard, IonList, IonItem } from '@ionic/react';
import PageHeader from '../../components/headers'
import { barbell, calendar, time } from "ionicons/icons";
import "../../components/fitnessTestCard/fitnessTestCard.css"

import {firestore} from'../../firebase'


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
            <IonItem button key={fTest.id}
            routerLink={'/manager/fitness/test/' , fTest.id}>
            {fTest.title}
            </IonItem>
        )}
        
        </IonList>
        
        </IonContent>
    </IonPage>
  );
};

export default FitnessTestPage;