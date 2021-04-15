import React from "react";
import { IonCard,IonCardTitle,IonCardSubtitle} from "@ionic/react";

import "./diaryCard.css";


const DiaryEntryCard = ({ diaryEntry }) => {
  return (
    <IonCard key={diaryEntry.id} routerLink={("/player/diary-entries/", diaryEntry.id)}>
      <img alt="me" 
        src="https://res.cloudinary.com/dmikx06rt/image/upload/v1614708839/FYP-GAAhead/chicken-1199243__340_xlz1io.webp" />
        <IonCardSubtitle>{diaryEntry.date}</IonCardSubtitle>
        <IonCardTitle>{diaryEntry.title}</IonCardTitle>
    </IonCard>
  );
};

export default DiaryEntryCard;
