import React, {useEffect, useState} from "react";
import { IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard, IonList, IonImg, IonCardSubtitle } from '@ionic/react';
import PageHeader from '../../components/headers'
import { barbell, calendar, time } from "ionicons/icons";
import {firestore} from'../../firebase'
import "./player.css"


const PlayerListPage = () => {
  const [players, setPlayers ] = useState([])

  useEffect(() => {
    const playerRef = firestore.collection('players')
    playerRef.get().then((snapshot) => {
      const players = snapshot.docs.map((doc) => ({ 
        id:doc.id,
        ...doc.data(),
      }))
      setPlayers(players)
    })
   },[]);

  return (
    <IonPage>
      <PageHeader title='Panel'></PageHeader>
        <IonContent>
        <IonList>
        {players.map((player) => 
       
            <IonCard id="grid-cards" key={player.id} routerLink={'/manager/team/panel/' , player.id}>
            <IonGrid>
            <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1614630566/FYP-GAAhead/profilePic_boakip.jpg"></IonImg>
                <IonRow>
                    <IonCol id="pTitle" size="12">
                    <IonCardSubtitle>{player.name}</IonCardSubtitle>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol id="pAge" size="12">{player.age}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol id="pPosition" size="12">{player.position}</IonCol>
                   
                </IonRow>
            </IonGrid>
        </IonCard>
        
        )}
        
        </IonList>
        
        </IonContent>
    </IonPage>
  );
};

export default PlayerListPage;