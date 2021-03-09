import React from "react";
import { IonIcon, IonCol, IonRow, IonGrid, IonCard, IonCardTitle} from '@ionic/react';
import { calendar } from "ionicons/icons";
import "./diaryCard.css"


const DiaryEntryCard = ({diaryEntry}) => {
  return (
  <IonCard id="deGridCards"  key={diaryEntry.id} routerLink={'/player/diary-entries/' , diaryEntry.id}>
    <IonGrid>
      <IonRow>
        <IonCardTitle id="title" size="12">{diaryEntry.title}</IonCardTitle>
      </IonRow>
      <IonRow>
        <IonCol size="2"><IonIcon icon={calendar}></IonIcon></IonCol>
        <IonCol id="dDate"size="10">{diaryEntry.date}</IonCol>
      </IonRow>
    </IonGrid>
  </IonCard>
  );
};

export default DiaryEntryCard;