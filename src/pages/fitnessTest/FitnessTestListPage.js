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
       
            <IonCard id="grid-cards" key={fTest.id} routerLink={'/manager/fitness/test/' , fTest.id}>
            <IonGrid>
                <IonRow>
                    <IonCol id="title" size="12">{fTest.title}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="2"><IonIcon icon={calendar}></IonIcon></IonCol>
                    <IonCol id="fDifficulty" size="10">{fTest.date}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="2"><IonIcon icon={time}></IonIcon></IonCol>
                    <IonCol id="fDifficulty" size="10">{fTest.time}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol id="fDifficulty" size="2"><IonIcon icon={barbell}></IonIcon></IonCol>
                    <IonCol id="fDifficulty" size="10">{fTest.difficulty}</IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
        
        )}
        
        </IonList>
        
        </IonContent>
    </IonPage>
  );
};

export default FitnessTestPage;