import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeaderDelete from "../../components/headers/deleteHeader/index";
import FitnessTestDetails from "../../components/topicDetails/fitnessTests/index";
import AlertDelete from "../../components/alerts/deleteAlert";

import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import "../pages.css";

const FitnessTestDetailsPage = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();
  const history = useHistory();

  const [fitnessTest, setFitnessTest] = useState(null);
  const [delAlert, setDelAlert] = useState(false);
  //const managerId = '1kK33jibmLZ2RAEb7lF4u9g9STf2'
  var [managerId, setManagerId] = useState();


  useEffect(() => {

    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
      if (!doc.exists) {
        console.log('No such document');
        //history.goBack();
      } else {
        const userDoc = { id: doc.id, ...doc.data() };

        //set ManagerId Attributes to matching in DB
        setManagerId(userDoc?.managerId)

        const ref = firestore
        .collection("users")
        .doc(userDoc?.managerId)
        .collection("fitness_tests");

        const fTestRef = firestore
        .collection("users")
        .doc(userDoc?.managerId)
        .collection("fitness_tests")
        .doc(id);
  
        fTestRef.get(id).then((doc) => {
          const fitnessTest = { id: doc.id, ...doc.data() };
          setFitnessTest(fitnessTest);
        });
      }
    });
  }, [currentUser?.uid, id]);

  const handleDelete = async () => {
    const fTestRef = firestore
    .collection("users")
    .doc(managerId)
    .collection("fitness_tests")
    .doc(id);
    
    await fTestRef.delete();
    console.log("Confirm Okay");
    history.goBack();
  };

  return (
    <IonPage>
      <PageHeaderDelete
        title=""
        action={() => setDelAlert(true)}
      ></PageHeaderDelete>
      <FitnessTestDetails fitnessTest={fitnessTest}></FitnessTestDetails>
      <AlertDelete
        delAlert={delAlert}
        setDelAlert={() => setDelAlert(false)}
        handleDelete={handleDelete}
      ></AlertDelete>
    </IonPage>
  );
};

export default FitnessTestDetailsPage;
