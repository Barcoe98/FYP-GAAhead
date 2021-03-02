import React, {useEffect, useState} from "react";
import { IonInfiniteScrollContent , IonInfiniteScroll, IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard, IonList, IonImg, IonCardSubtitle } from '@ionic/react';
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
      <PageHeader title='Players'></PageHeader>
        <IonContent>
        <IonList>
          {players.map((player) => 
            <IonCard id="playerGridCards" key={player.id} routerLink={'/manager/team/panel/' , player.id}>
            <IonImg id="pImage" src="https://res.cloudinary.com/dmikx06rt/image/upload/v1614630566/FYP-GAAhead/profilePic_boakip.jpg"></IonImg>
              <IonGrid>
                <IonRow id="pName">
                  {player.name}
                </IonRow>
                <IonRow id="pAge">
                  {player.age}
                </IonRow>
                <IonRow id="pPosition">
                  {player.position}
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