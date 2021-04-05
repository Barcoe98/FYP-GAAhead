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

  useEffect (() => {
    const ref =  firestore.collectionGroup('my_profile')
    .where('club', '==', 'abc123')
    .where('userType', '==', 'player')
    
    ref.get().then((snapshot) => {
      const players = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlayers(players);
    });
  },);

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
                <IonRow id="pName">{myProfile.club}</IonRow>
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
