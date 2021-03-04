import React, {useEffect, useState} from "react";
import { IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard, IonList, IonItem } from '@ionic/react';
import PageHeader from '../../components/headers'
import { barbell, calendar, flame, time } from "ionicons/icons";
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
            <IonCard id="ftGridCards" key={fTest.id} routerLink={'/manager/fitness/test/{$'}>
            <IonGrid>
                <IonRow id="fTitle">
                    {fTest.title}
                </IonRow>
                <IonRow>
                    <IonCol size="2"><IonIcon icon={calendar}></IonIcon></IonCol>
                    <IonCol id="fDate" size="10">{fTest.date}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="2"><IonIcon icon={time}></IonIcon></IonCol>
                    <IonCol id="fTime" size="10">{fTest.time}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="2"><IonIcon icon={flame}></IonIcon></IonCol>
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