import React from "react";
import { IonRow, IonCol, IonGrid, IonImg } from "@ionic/react";

import "./matchStats.css";

const VersusBar = ({ hTeam, hTeamCrest,aTeamCrest, hGoals, hPoints, aTeam, aGoals, aPoints, competition, date }) => {
  return (
    <IonGrid id="bg-col">
      
      <IonRow size="3" id="vsBarHeader">
        <IonCol size="12">{competition}</IonCol>
      </IonRow>

      <IonRow size="12">
        <IonCol id="centerStat" size="4">
          <IonRow id="teamName">{hTeam}</IonRow>
          <IonRow id="logo">
            <IonImg src={hTeamCrest}></IonImg>
          </IonRow>
          <IonRow id="teamScore">{hGoals}-{hPoints}</IonRow>
        </IonCol>

        <IonCol id="vsText" size="4">
          <IonRow id="vsText">VS</IonRow>
        </IonCol>

        <IonCol id="centerStat" size="4">
          <IonRow id="teamName">{aTeam}</IonRow>
          <IonRow id="logo">
            <IonImg src={aTeamCrest}></IonImg>
          </IonRow>

          <IonRow id="teamScore">{aGoals}-{aPoints}</IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default VersusBar;
