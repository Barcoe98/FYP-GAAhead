import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeaderDelete from "../../components/headers/deleteHeader/index";
import FixtureDetails from "../../components/topicDetails/match/fixture/index";
import AlertDelete from "../../components/alerts/deleteAlert";

import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import AlertError from "../../components/alerts/errorAlert";

import '../pages.css'

const FixtureDetailsPage = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();
  const history = useHistory();

  const [fixture, setFixture] = useState(null);
  const [delAlert, setDelAlert] = useState(false);

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  var [teamId, setTeamId] = useState();


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
        .collection("fixtures")
        .doc(id);
  
        ref.get(id).then((doc) => {
          const data = { id: doc.id, ...doc.data() };
          setFixture(data);
        });
      }
    });
  }, [currentUser?.uid, id]);

  const handleDelete = async () => {
    const fixture = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("fixtures")
      .doc(id);

    await fixture.delete();
    console.log("Confirm Okay");
    history.goBack();
  };

  return (
    <IonPage>
      <PageHeaderDelete
        title=""
        action={() => setDelAlert(true)}
      ></PageHeaderDelete>
      <FixtureDetails fixture={fixture}></FixtureDetails>

      <AlertDelete
        delAlert={delAlert}
        setDelAlert={() => setDelAlert(false)}
        handleDelete={handleDelete}
      ></AlertDelete>

      <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='No Fixtures Found'
        showAlert={showAlert} 
        msg={errorMessage}>
        </AlertError>
    </IonPage>
  );
};

export default FixtureDetailsPage;
