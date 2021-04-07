import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeaderDelete from "../../components/headers/deleteHeader/index";
import FixtureDetails from "../../components/topicDetails/match/fixture/index";
import AlertDelete from "../../components/alerts/deleteAlert";

import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import '../pages.css'

const FixtureDetailsPage = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const [fixture, setMatch] = useState(null);
  const [delAlert, setDelAlert] = useState(false);

  useEffect(() => {
    const fixtureRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("fixtures")
      .doc(id);
    fixtureRef.get(id).then((doc) => {
      const fixture = { id: doc.id, ...doc.data() };
      setMatch(fixture);
    });
  }, [id]);

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
    </IonPage>
  );
};

export default FixtureDetailsPage;
