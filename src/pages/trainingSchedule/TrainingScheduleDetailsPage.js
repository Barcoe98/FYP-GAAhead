import React, {useEffect, useState } from "react";
import { IonPage } from '@ionic/react';
import PageHeader from '../../components/headers'
import TrainingScheduleDetails from '../../components/topicDetails/trainingSchedule/index'


import { useParams } from "react-router-dom";
import { firestore } from '../../firebase'
import './Training.css';


const TrainingScheduleDetailsPage = () => {

  const {id} = useParams()
  const  [trainingSchedule, setTrainingSchedule] =  useState(null)

  useEffect(() => {
    const tScheduleRef = firestore.collection('training_schedules').doc(id)
    tScheduleRef.get(id).then(doc => {
      const trainingSchedules = { id: doc.id, ...doc.data()}
      setTrainingSchedule(trainingSchedules);
    });
  }, [id]);

  return (
    <IonPage>
      <PageHeader title=""></PageHeader>
      <TrainingScheduleDetails trainingSchedule={trainingSchedule}></TrainingScheduleDetails>
    </IonPage>
  );
};

export default TrainingScheduleDetailsPage;