import React, {useEffect, useState} from "react";
import { IonContent, IonPage, IonList } from '@ionic/react';
import PageHeaderAdd from '../../components/headers/addHeader/index'
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
      <PageHeaderAdd title='Training Schedules'></PageHeaderAdd>
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