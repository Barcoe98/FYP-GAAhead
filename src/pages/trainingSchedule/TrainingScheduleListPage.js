import React, {useEffect, useState} from "react";
import { IonContent, IonPage, IonList } from '@ionic/react';
import PageHeaderAdd from '../../components/headers/addHeader/index'
import TrainingScheduleCard from '../../components/cards/trainingScheduleCard/index'
import {firestore} from'../../firebase'
import { useAuth} from '../../contexts/authContext'

const TrainingSchedulePage = () => {

  const [trainingSchedules, setTrainingSchedules ] = useState([])
  const { currentUser } = useAuth()

  useEffect(() => {
    const scheduleRef = firestore.collection('users').doc(currentUser?.uid).collection('training_schedules')
    scheduleRef.get().then((snapshot) => {
      const schedules = snapshot.docs.map((doc) => ({ 
        id:doc.id,
        ...doc.data(),
      }))
      setTrainingSchedules(schedules)
    })
   },[currentUser?.uid]);

  return (
    <IonPage>
      <PageHeaderAdd title='Training Schedules' href="/manager/trainingschedule/add"></PageHeaderAdd>
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