import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import FitnessTestCard from "../../components/cards/fitnessTestCard/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import "../pages.css";


const FitnessTestPage = () => {
  const [fitnessTests, setFitnessTests] = useState([]);
  var [teamId, setTeamId] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const { currentUser } = useAuth();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
      if (!doc.exists) {
        console.log('No such document');
        setErrorMessage('No Team Data Available, Join a Team')
        setShowAlert(true)

        //history.goBack();
      } else {
        const userDoc = { id: doc.id, ...doc.data() };

        //set ManagerId Attributes to matching in DB
        setTeamId(userDoc?.teamId)

        const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
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
    })

  }, [currentUser?.uid]);

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
