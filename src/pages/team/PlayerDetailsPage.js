import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonList,
  IonPage,
  IonText,
  IonIcon,
} from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import Stat from "../../components/textComponents/index";
import StatContent from "../../components/textComponents/statContent";
import PanelPlayerProfileDetails from "../../components/topicDetails/team/index";


import "./player.css";

const PlayerDetailsPage = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [injuries, setInjuries] = useState([]);

  const { currentUser } = useAuth();
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const [delAlert, setDelAlert] = useState(false);
  var [teamId, setTeamId] = useState();

  useEffect(() => {
    const ref2 = firestore.collection("users").doc(id).collection("injuries")
    //snapshot of doc 
    ref2.get().then((snapshot) => {
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setInjuries(docs);
    });

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
        .doc(id)
  
        ref.get(id).then((doc) => {
          const data = { id: doc.id, ...doc.data() };
          setPlayer(data);
        });
      }
    });
  }, [currentUser?.uid, id]);

  return (
    <IonPage>
      <IonContent>
        <PanelPlayerProfileDetails injuries={injuries} profileDetails={player}></PanelPlayerProfileDetails>
      </IonContent>
    </IonPage>
  );
};

export default PlayerDetailsPage;
