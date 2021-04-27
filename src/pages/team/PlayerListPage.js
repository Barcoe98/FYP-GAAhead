import React, { useEffect, useState } from "react";
import {IonContent,  IonRow, IonGrid,  IonPage,  IonCard, IonList, IonImg,} from "@ionic/react";
import PageHeader from "../../components/headers";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

import "./player.css";

const PlayerListPage = () => {
  const [players, setPlayers] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
  
      const userDoc = { id: doc.id, ...doc.data() };

      //grab users profiles where teamId is equal to the current manager team ID
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
                <IonRow id="pName">{myProfile.name}</IonRow>
                <IonRow id="pAge">{myProfile.position}</IonRow>
              </IonGrid>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PlayerListPage;
