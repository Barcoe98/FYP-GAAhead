import React from "react";
import { IonRow, IonCol, IonGrid, IonText, IonIcon } from '@ionic/react';
import { flame, time, calendar } from 'ionicons/icons';

import './stat.css'

const StatBar = ({timeVar, difficultyVar, dateVar,}) => {
  return (
    <IonGrid>
    <IonRow>
      <IonCol size="4">
        <IonRow id="tStatIcon"><IonIcon size="large" icon={calendar}></IonIcon></IonRow>
        <IonRow id="tStatVar">{dateVar}</IonRow>
      </IonCol>

      <IonCol size="4">
        <IonRow id="tStatIcon"><IonIcon size="large" icon={time}></IonIcon></IonRow>
        <IonRow id="tStatVar">{timeVar}</IonRow>
      </IonCol>

      <IonCol size="4">
        <IonRow id="tStatIcon"><IonIcon size="large" icon={flame}></IonIcon></IonRow>
        <IonRow id="tStatVar">{difficultyVar}</IonRow>
      </IonCol>

    </IonRow>
  </IonGrid>
  );
};

export default StatBar;