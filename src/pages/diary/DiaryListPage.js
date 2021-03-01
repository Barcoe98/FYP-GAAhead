import React, {useEffect, useState} from "react";
import { IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard, IonList } from '@ionic/react';
import PageHeader from '../../components/headers'
import { barbell, calendar, time } from "ionicons/icons";
import {firestore} from'../../firebase'


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
       
            <IonCard key={player.id} routerLink={'/manager/team/panel/' , player.id}>
            <IonGrid>
                <IonRow>
                    <IonCol id="title" size="12">{player.name}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={calendar}></IonIcon></IonCol>
                    <IonCol size="11">{player.age}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={time}></IonIcon></IonCol>
                    <IonCol size="11">{player.position}</IonCol>
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