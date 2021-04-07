import React from "react";
import { IonRow, IonCol, IonGrid, IonImg } from "@ionic/react";

import "../matchStats/matchStats.css";

const VersusBar = ({ hTeam, aTeam, competition }) => {
  return (
    <IonGrid id="bg-col">
      
      <IonRow size="3" id="fixtureVsBarHeader">
        <IonCol size="12">{competition}</IonCol>
      </IonRow>

      <IonRow size="12">

        <IonCol id="centerStat" size="4">
          <IonRow id="logo">
            <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
          </IonRow>
          <IonRow id="teamName">{hTeam}</IonRow>
        </IonCol>
        
        <IonCol id="vsText" size="4">
          <IonRow id="vsText">VS</IonRow>
        </IonCol>

        <IonCol id="centerStat" size="4">
          <IonRow id="logo">
            <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
          </IonRow>
          <IonRow id="teamName">{aTeam}</IonRow>
        </IonCol>

      </IonRow>
    </IonGrid>
  );
};

export default VersusBar;
