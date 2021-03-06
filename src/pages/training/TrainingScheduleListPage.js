import React, {useEffect, useState} from "react";
import { IonContent, IonPage, IonList } from '@ionic/react';
import PageHeader from '../../components/headers'
import TrainingScheduleCard from '../../components/cards/trainingScheduleCard/index'
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
            <TrainingScheduleCard tSchedule={tSchedule}></TrainingScheduleCard>
          )}
          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default TrainingSchedulePage;