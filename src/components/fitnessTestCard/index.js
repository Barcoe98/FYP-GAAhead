import React from "react";
import { IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard } from '@ionic/react';
import { flame, calendar, time } from "ionicons/icons";
import "../../components/fitnessTestCard/fitnessTestCard.css"


const FitnessTestCard = ({fTest}) => {
  return (
    <IonCard id="ftGridCards" key={fTest.id} routerLink={'/manager/fitness/test/{$'}>
      <IonGrid>
        <IonRow id="fTitle">
            {fTest.title}
        </IonRow>
        <IonRow>
            <IonCol size="2"><IonIcon icon={calendar}></IonIcon></IonCol>
            <IonCol id="fDate" size="10">{fTest.date}</IonCol>
        </IonRow>
        <IonRow>
            <IonCol size="2"><IonIcon icon={time}></IonIcon></IonCol>
            <IonCol id="fTime" size="10">{fTest.time}</IonCol>
        </IonRow>
        <IonRow>
            <IonCol size="2"><IonIcon icon={flame}></IonIcon></IonCol>
            <IonCol id="fDifficulty" size="10">{fTest.difficulty}</IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default FitnessTestCard;