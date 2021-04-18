import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonRow,
  IonGrid,
  IonPage,
  IonCard,
  IonList,
  IonImg,
} from "@ionic/react";
import PageHeader from "../../components/headers";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

import "./player.css";

//https://www.youtube.com/watch?v=fQ4u1J717ys

const PlayerListPage = () => {
  const [players, setPlayers] = useState([]);

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
        .collection("users").where("teamId", '==', userDoc?.teamId)

        //snapshot of doc 
        ref.get().then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlayers(docs);
      });
      }
    })

  }, [currentUser?.uid]);

  return (
    <IonPage>
      <PageHeader title="Players"></PageHeader>
      <IonContent>
        <IonList id="bg-col">
          {players.map((myProfile) => (
            <IonCard
              id="playerGridCards"
              key={myProfile.id}
              routerLink={("/manager/team/panel/", myProfile.id)}
            >
              <IonImg
                id="pImage"
                src="https://res.cloudinary.com/dmikx06rt/image/upload/v1614630566/FYP-GAAhead/profilePic_boakip.jpg"
              ></IonImg>
              <IonGrid>
                <IonRow id="pName">{myProfile.teamName}</IonRow>
                <IonRow id="pAge">{myProfile.email}</IonRow>
                <IonRow id="pPosition">{myProfile.userType}</IonRow>
              </IonGrid>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PlayerListPage;
