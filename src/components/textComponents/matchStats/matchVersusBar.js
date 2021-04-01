import React from "react";
import { IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';

import './matchStats.css'

const VersusBar = ({homeTeam, homeTeamScore, awayTeam, awayTeamScore, homeTeamLogo, awayTeamLogo}) => {
  return (
  <IonGrid>

    <IonRow size="12" id="vsBarHeader">
      <IonCol size="5">Championship</IonCol>
      <IonCol size="2"></IonCol>
      <IonCol size="5">12th March</IonCol>
    </IonRow>

    <IonRow size="12">
      <IonCol id="centerStat" size="4">
      <IonRow id="teamName">{homeTeam}</IonRow>
        <IonRow id="logo">
          <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
        </IonRow>
        <IonRow id="teamScore">{homeTeamScore}</IonRow>
      </IonCol>

      <IonCol id="vsText" size="4">
        <IonRow id="vsText">VS</IonRow>
      </IonCol>

      <IonCol id="centerStat" size="4">
      <IonRow id="teamName">{awayTeam}</IonRow>
        <IonRow id="logo">
          <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
        </IonRow>
        
        <IonRow id="teamScore">{awayTeamScore}</IonRow>
      </IonCol>
    </IonRow>
        
  </IonGrid>
  );
};

export default VersusBar