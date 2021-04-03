import React from "react";
import { IonRow, IonCol, IonGrid, IonIcon } from "@ionic/react";
import { flame, time, calendar } from "ionicons/icons";

import "./stat.css";

const StatBar = ({ timeVar, difficultyVar, dateVar }) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="4">
          <IonRow id="StatIcon">
            <IonIcon size="large" icon={calendar}></IonIcon>
          </IonRow>
          <IonRow id="StatVar">{dateVar}</IonRow>
        </IonCol>

        <IonCol size="4">
          <IonRow id="StatIcon">
            <IonIcon size="large" icon={time}></IonIcon>
          </IonRow>
          <IonRow id="StatVar">{timeVar}</IonRow>
        </IonCol>

        <IonCol size="4">
          <IonRow id="StatIcon">
            <IonIcon size="large" icon={flame}></IonIcon>
          </IonRow>
          <IonRow id="StatVar">{difficultyVar}</IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default StatBar;
