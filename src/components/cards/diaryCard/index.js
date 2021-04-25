import React from "react";
import { IonCard, IonImg, IonCardTitle,IonCardSubtitle} from "@ionic/react";

import "./diaryCard.css";


const DiaryEntryCard = ({ diaryEntry }) => {
  return (
    <IonCard key={diaryEntry.id} routerLink={("/player/diary-entries/", diaryEntry.id)}>
      <IonImg alt="me" 
        src={diaryEntry.imgUrl} />
        <IonCardSubtitle>{diaryEntry.date}</IonCardSubtitle>
        <IonCardTitle>{diaryEntry.title}</IonCardTitle>
    </IonCard>
  );
};

export default DiaryEntryCard;
