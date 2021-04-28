import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeaderDelete from "../../components/headers/deleteHeader/index";
import FitnessTestDetails from "../../components/topicDetails/fitnessTests/index";
import AlertDelete from "../../components/alerts/deleteAlert";
import AlertError from "../../components/alerts/errorAlert";
import PageHeaderResults from "../../components/headers/resultsHeader";

import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import "../pages.css";

const FitnessTestDetailsPage = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const [fitnessTest, setFitnessTest] = useState(null);
  const [delAlert, setDelAlert] = useState(false);
  var [teamId, setTeamId] = useState();


  useEffect(() => {

    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
    
        const userDoc = { id: doc.id, ...doc.data() };

        //set ManagerId Attributes to matching in DB
        setTeamId(userDoc?.teamId)

        const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
        .collection("fitness_tests")
        .doc(id);
  
        ref.get(id).then((doc) => {
          const data = { id: doc.id, ...doc.data() };
          setFitnessTest(data);
        });
    });
  }, [currentUser?.uid, id]);


  const handleDelete = async () => {
    const fTestRef = firestore
    .collection("users")
    .doc(teamId)
    .collection("fitness_tests")
    .doc(id);
    
    await fTestRef.delete();
    console.log("Confirm Okay");
    history.goBack();
  };

  return (
    <IonPage>
      <PageHeaderResults title="" href="" listHref={"http://localhost:3000/manager/fitness/test/results/list/" + id} action={() => setDelAlert(true)}></PageHeaderResults>

      <FitnessTestDetails fitnessTest={fitnessTest}></FitnessTestDetails>
      
      <AlertDelete
        delAlert={delAlert}
        setDelAlert={() => setDelAlert(false)}
        handleDelete={handleDelete}
      ></AlertDelete>

      <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='No Fitness Tests Found'
        showAlert={showAlert} 
        msg={errorMessage}>
        </AlertError>

    </IonPage>
  );
};

export default FitnessTestDetailsPage;
