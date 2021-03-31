import React from "react";
import { IonIcon, IonCol, IonRow, IonGrid, IonCard } from '@ionic/react';
import { flame, calendar, time } from "ionicons/icons";
import "./matchCard.css"


const MatchCard = ({match}) => {
  return (
    <IonCard key={match.id} routerLink={'/manager/match/', match.id}>
      <IonGrid>
        <IonRow id="mTitle">
            {match.title}
        </IonRow>
        <IonRow>
            <IonCol size="2"><IonIcon icon={calendar}></IonIcon></IonCol>
            <IonCol id="fDate" size="10">{match.date}</IonCol>
        </IonRow>
        <IonRow>
            <IonCol size="2"><IonIcon icon={time}></IonIcon></IonCol>
            <IonCol id="fTime" size="10">{match.time}</IonCol>
        </IonRow>
        <IonRow>
            <IonCol size="2"><IonIcon icon={flame}></IonIcon></IonCol>
            <IonCol id="fDifficulty" size="10">{match.difficulty}</IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default MatchCard;