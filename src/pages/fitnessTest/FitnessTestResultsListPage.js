import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList, IonGrid, IonText } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import ContentDivider from "../../components/textComponents/dividers/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import { useParams } from "react-router-dom";


import "../pages.css";
import PageHeader from "../../components/headers";
import FitnessTestResult from "../../components/textComponents/fitnessTestResults";
import { easelOutline } from "ionicons/icons";

const FitnessTestResultsPage = () => {
  const [testResults, setTestResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const { currentUser } = useAuth();
  const { id } = useParams();


  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {

      const userDoc = { id: doc.id, ...doc.data() };

      if (userDoc.teamId === "") {
        console.log('No Team Data Available');
        setErrorMessage('Join a Team')
        setShowAlert(true)
      } 
      else {
        const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
        .collection("fitness_tests_results")
        .doc(id)
        .collection("players_results")
  
        //snapshot of doc 
        ref.get().then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestResults(docs);
      });
      }
    })

  }, [currentUser?.uid, id]);

  return (
    <IonPage>
    <PageHeader title="Fitness Test Results"></PageHeader>
      <IonContent>
        <IonList id="bg-col">
        <ContentDivider></ContentDivider>
          {testResults.map((result) => (
            <FitnessTestResult key={result.name} playerName={result.name} playerTime={result.time}></FitnessTestResult>
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

export default FitnessTestResultsPage;
