import React, {useEffect, useState} from "react";
import { IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard, IonList } from '@ionic/react';
import PageHeader from '../../components/headers'
import { barbell, calendar, flame, time } from "ionicons/icons";
import {firestore} from'../../firebase'
import "./Training.css"

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
      <PageHeader title='Training Schedules'></PageHeader>
        <IonContent>
        <IonList>
        {trainingSchedules.map((tSchedule) => 
            <IonCard id="tsGridCards" key={tSchedule.id} routerLink={'/manager/planner/trainingschedule/' , tSchedule.id}>
            <IonGrid>
                <IonRow>
                    {tSchedule.title}
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={calendar}></IonIcon></IonCol>
                    <IonCol id="tsDate" size="11">{tSchedule.date}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={time}></IonIcon></IonCol>
                    <IonCol id="tsTime" size="11">{tSchedule.time}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={flame}></IonIcon></IonCol>
                    <IonCol id="tsDifficulty" size="11">{tSchedule.difficulty}</IonCol>
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