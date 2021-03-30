import React, {useEffect, useState } from "react";
import { IonPage } from '@ionic/react';
import PageHeaderDelete from '../../components/headers/deleteHeader/index'
import WorkoutDetails from '../../components/topicDetails/workoutRoutines/index'

import { useParams, useHistory } from "react-router-dom";
import { firestore } from '../../firebase'
import AlertDelete from "../../components/alerts/deleteAlert";


const WorkoutDetailsPage = () => {

  const {id} = useParams()
  const history = useHistory();
  const  [workout, setWorkout] =  useState(null)
  const  [delAlert, setDelAlert] = useState(false);

  useEffect(() => {
    const workoutRef = firestore.collection('workouts').doc(id)
    workoutRef.get(id).then(doc => {
      const workout = { id: doc.id, ...doc.data()}
      setWorkout(workout);
    });
  }, [id]);

  const handleDelete = async () => {
    const workoutRef = firestore.collection('workouts').doc(id)
    await workoutRef.delete()
    console.log('Confirm Okay');
    history.goBack();
  }

  return (
    <IonPage>
      <PageHeaderDelete title="" action={()=>setDelAlert(true)}></PageHeaderDelete>
      <WorkoutDetails workoutRoutine={workout}></WorkoutDetails>
      <AlertDelete delAlert={delAlert} setDelAlert={() => setDelAlert(false)} handleDelete={handleDelete}></AlertDelete>
    </IonPage>
  );
};

export default WorkoutDetailsPage;