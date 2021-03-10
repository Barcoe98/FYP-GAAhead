import React, {useEffect, useState } from "react";
import { IonPage, IonButton, IonAlert } from '@ionic/react';
import PageHeaderDelete from '../../components/headers/deleteHeader/index'
import FitnessTestDetails from '../../components/topicDetails/fitnessTests/index'

import { useParams, useHistory } from "react-router-dom";
import { firestore } from '../../firebase'


const FitnessTestDetailsPage = () => {

  const {id} = useParams()
  const history = useHistory();

  const  [fitnessTest, setFitnessTest] =  useState(null)
  const  [delAlert, setDelAlert] = useState(false);


  useEffect(() => {
    const fTestRef = firestore.collection('fitness_tests').doc(id)
    fTestRef.get(id).then(doc => {
      const fitnessTest = { id: doc.id, ...doc.data()}
      setFitnessTest(fitnessTest);
    });
  }, [id]);

  const handleDelete = async () => {
   
  }

  return (
    <IonPage>
      <PageHeaderDelete title="" action={()=>setDelAlert(true)}></PageHeaderDelete>
      <FitnessTestDetails fitnessTest={fitnessTest}></FitnessTestDetails>

      <IonAlert 
          isOpen={delAlert}
          onDidDismiss={() => setDelAlert(false)}
          message={'Are You sure you want to delete'}
          buttons={[
            {
              text: 'Cancel',
              handler: async () => {
                console.log('Confirm Cancel');
                setDelAlert(false)
              }
            },
            {
              text: 'Confirm',
              handler: async () => {
                const fTestRef = firestore.collection('fitness_tests').doc(id)
                await fTestRef.delete()
                console.log('Confirm Okay');
                history.goBack();
              }
            }
          ]}
        />
    </IonPage>
  );
};

export default FitnessTestDetailsPage;