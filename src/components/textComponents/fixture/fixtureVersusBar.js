import React from "react";
import { IonRow, IonCol, IonGrid, IonImg } from "@ionic/react";

import "../matchStats/matchStats.css";

const VersusBar = ({ hCrest, aCrest, hTeam, aTeam }) => {
  return (
    <IonGrid id="bg-col">

      <IonRow size="12">

        <IonCol id="centerStat" size="4">
          <IonRow id="logo">
            <IonImg src={hCrest}></IonImg>
          </IonRow>
          <IonRow id="teamName">{hTeam}</IonRow>
        </IonCol>
        
        <IonCol id="vsText" size="4">
          <IonRow id="vsText">VS</IonRow>
        </IonCol>

        <IonCol id="centerStat" size="4">
          <IonRow id="logo">
            <IonImg src={aCrest}></IonImg>
          </IonRow>
          <IonRow id="teamName">{aTeam}</IonRow>
        </IonCol>

      </IonRow>
    </IonGrid>
  );
};

export default VersusBar;
