import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import FitnessTestCard from "../../components/cards/fitnessTestCard/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import "../pages.css";

const FitnessTestPage = () => {
  const [fitnessTests, setFitnessTests] = useState([]);
  const [managerId, setManagerId] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const myManagerId = '1kK33jibmLZ2RAEb7lF4u9g9STf2'

  useEffect(() => {

    if (myManagerId !== null ) {

      //set Manager ID to user manager ID
      setManagerId(myManagerId)

      //ref for user managers fixtures collection
      const ref = firestore
      .collection("users")
      .doc(managerId)
      .collection("fitness_tests");

      //snapshot of doc 
      ref.get().then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFitnessTests(docs);
    });
    }

    else {
      setManagerId(null)
      setErrorMessage('No Team Data Available, Join a Team')
      setShowAlert(true)
      console.log('error') 
    }
    
  }, [managerId]);

  return (
    <IonPage>
      <PageHeaderAdd
        title="Fitness Tests"
        href="/manager/fitness/test/add"
      ></PageHeaderAdd>
      <IonContent>
        <IonList id="bg-col">
          {fitnessTests.map((fTest) => (
            <FitnessTestCard key={fTest.id} fTest={fTest}></FitnessTestCard>
          ))}
        </IonList>

        <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='No Fitness Tests Found'
        showAlert={showAlert} 
        msg={errorMessage}>
        </AlertError>


      </IonContent>
    </IonPage>
  );
};

export default FitnessTestPage;
