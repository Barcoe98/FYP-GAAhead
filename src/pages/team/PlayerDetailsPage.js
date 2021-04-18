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


import "./player.css";

const PlayerDetailsPage = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const { currentUser } = useAuth();
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const [delAlert, setDelAlert] = useState(false);
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
        <IonList id="p-bg-color">
          <div id="p-bg-img"></div>
          <h1 id="sectionTitle">{player?.name}</h1>

          <div id="sectionContent">
            <IonGrid>
              <IonRow>
                <Stat stat={player?.age} statTitle="Age"></Stat>
                <Stat stat={player?.height} statTitle="Height"></Stat>
                <Stat stat={player?.weight} statTitle="Weight"></Stat>
                <Stat stat={player?.position} statTitle="Position"></Stat>
              </IonRow>
            </IonGrid>

            <hr id="contentDivider"></hr>
            
            <IonText id="myContentTitle">Player Stats</IonText>
            <StatContent valueColSize="3" titleColSize="9" statTitle="Speed(100m)" statValue="8.27"></StatContent>
            <StatContent valueColSize="3" titleColSize="9" statTitle="Hooks" statValue="7"></StatContent>
            <StatContent valueColSize="3" titleColSize="9" statTitle="Blocks" statValue="4"></StatContent>
            <StatContent valueColSize="3" titleColSize="9" statTitle="Distance Covered" statValue="12.5"></StatContent>

            <hr id="contentDivider"></hr>
            <h5 id="sectionTitle">Injuries History</h5>
            <StatContent valueColSize="5" titleColSize="7" statTitle="Total Injuries" statValue={player?.totalInjuries}></StatContent>
            <StatContent valueColSize="5" titleColSize="7" statTitle="Most Recent Injury" statValue={player?.mostRecentInjury}></StatContent>
            <StatContent valueColSize="5" titleColSize="7" statTitle="Recover Length" statValue={player?.recoveryLength}></StatContent>


            <hr id="contentDivider"></hr>
            <h5 id="sectionTitle">Contact Details</h5>
            <StatContent valueColSize="5" titleColSize="7" statTitle="Email" statValue={player?.email}></StatContent>
            <StatContent valueColSize="5" titleColSize="7" statTitle="Mobile Number" statValue={player?.mobNumber}></StatContent>

            <hr id="contentDivider"></hr>
            <h5 id="sectionTitle">More</h5>
            <IonText>{player?.More}</IonText>
          </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PlayerDetailsPage;
