import React, { useEffect, useState } from "react";
import {IonContent,  IonRow, IonGrid,  IonPage,  IonCard, IonList, IonImg,} from "@ionic/react";
import PageHeader from "../../components/headers";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

import "./player.css";
import PlayerCard from "../../components/cards/playerCard";

const PlayerListPage = () => {
  const [players, setPlayers] = useState([0]);
  const [teamId, setTeamId]= useState("")
  const { currentUser } = useAuth();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
  
      const userDoc = { id: doc.id, ...doc.data() };

      setTeamId(userDoc?.teamId)
      //grab users profiles where teamId is equal to the current manager team ID
      const ref = firestore
      .collection("users").where("teamId", '==', "1kK33jibmLZ2RAEb7lF4u9g9STf2")

      //snapshot of doc 
      ref.get().then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlayers(docs);
    });
  })

  }, [currentUser?.uid]);

  return (
    <IonPage>
      <PageHeader title="Players"></PageHeader>
      <IonContent>
        <IonList id="bg-col">
          {players.map((myProfile) => (
          <PlayerCard key={myProfile.id} myProfile={myProfile}></PlayerCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PlayerListPage;
