import React, {useEffect, useState } from "react";
import { IonPage } from '@ionic/react';
import PageHeader from '../../components/headers'
import FitnessTestDetails from '../../components/topicDetails/fitnessTests/index'

import { useParams } from "react-router-dom";
import { firestore } from '../../firebase'


const FitnessTestDetailsPage = () => {

  const {id} = useParams()
  const  [fitnessTest, setFitnessTest] =  useState(null)

  useEffect(() => {
    const fTestRef = firestore.collection('fitness_tests').doc(id)
    fTestRef.get(id).then(doc => {
      const fitnessTest = { id: doc.id, ...doc.data()}
      setFitnessTest(fitnessTest);
    });
  }, [id]);

  return (
    <IonPage>
      <PageHeader title=""></PageHeader>
      <FitnessTestDetails fitnessTest={fitnessTest}></FitnessTestDetails>
    </IonPage>
  );
};

export default FitnessTestDetailsPage;