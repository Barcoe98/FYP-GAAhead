import React, {useEffect, useState} from "react";
import { IonContent,  IonPage, IonList } from '@ionic/react';
import PageHeaderAdd from '../../components/headers/addHeader/index'
import FitnessTestCard from '../../components/cards/fitnessTestCard/index'
import {firestore} from'../../firebase'

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
    <PageHeaderAdd title=" Add Fitness Test" href="/manager/fitness/test/add"></PageHeaderAdd>
      <IonContent>
          <IonList>
            {fitnessTests.map((fTest) => 
              <FitnessTestCard fTest={fTest}></FitnessTestCard>
            )}
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default FitnessTestPage;