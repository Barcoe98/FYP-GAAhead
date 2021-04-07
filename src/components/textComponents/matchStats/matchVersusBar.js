import React from "react";
import { IonRow, IonCol, IonGrid, IonImg } from "@ionic/react";

import "./matchStats.css";

const VersusBar = ({ hTeam, hGoals, hPoints, aTeam, aGoals, aPoints, competition, date }) => {
  return (
    <IonGrid id="bg-col">
      
      <IonRow size="3" id="vsBarHeader">
        <IonCol size="6">{competition}</IonCol>
        <IonCol size="6">{date}</IonCol>
      </IonRow>

      <IonRow size="12">
        <IonCol id="centerStat" size="4">
          <IonRow id="teamName">{hTeam}</IonRow>
          <IonRow id="logo">
            <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
          </IonRow>
          <IonRow id="teamScore">{hGoals}-{hPoints}</IonRow>
        </IonCol>

        <IonCol id="vsText" size="4">
          <IonRow id="vsText">VS</IonRow>
        </IonCol>

        <IonCol id="centerStat" size="4">
          <IonRow id="teamName">{aTeam}</IonRow>
          <IonRow id="logo">
            <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
          </IonRow>

          <IonRow id="teamScore">{aGoals}-{aPoints}</IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default VersusBar;
