import React, {useEffect, useState} from "react";
import { IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard, IonList } from '@ionic/react';
import PageHeader from '../../components/headers'
import { barbell, calendar, time } from "ionicons/icons";
import {firestore} from'../../firebase'


const TrainingSchedulePage = () => {
  const [trainingSchedules, setTrainingSchedules ] = useState([])

  useEffect(() => {
    const scheduleRef = firestore.collection('training_schedules')
    scheduleRef.get().then((snapshot) => {
      const schedules = snapshot.docs.map((doc) => ({ 
        id:doc.id,
        ...doc.data(),
      }))
      setTrainingSchedules(schedules)
    })
   },[]);

  return (
    <IonPage>
      <PageHeader title='Training Schedule Tests'></PageHeader>
        <IonContent>
        <IonList>
        {trainingSchedules.map((tSchedule) => 
       
            <IonCard key={tSchedule.id} routerLink={'/manager/planner/trainingschedule/' , tSchedule.id}>
            <IonGrid>
                <IonRow>
                    <IonCol id="title" size="12">{tSchedule.title}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={calendar}></IonIcon></IonCol>
                    <IonCol size="11">{tSchedule.date}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={time}></IonIcon></IonCol>
                    <IonCol size="11">{tSchedule.time}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={barbell}></IonIcon></IonCol>
                    <IonCol size="11">{tSchedule.difficulty}</IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
        
        )}
        
        </IonList>
        
        </IonContent>
    </IonPage>
  );
};

export default TrainingSchedulePage;