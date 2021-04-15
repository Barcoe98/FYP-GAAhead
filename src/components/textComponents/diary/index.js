import React from "react";
import { IonRow, IonCol, IonGrid, IonIcon } from "@ionic/react";
import { waterOutline, bedOutline, footstepsOutline, fastFoodOutline } from "ionicons/icons";

import "../stat.css";


const DiaryStatBar = ({ sleepVar, waterVar, calVar, stepsVar }) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="3">
          <IonRow id="StatIcon">
            <IonIcon size="large" icon={bedOutline}></IonIcon>
          </IonRow>
          <IonRow id="StatVar">{sleepVar}</IonRow>
        </IonCol>

        <IonCol size="3">
          <IonRow id="StatIcon">
            <IonIcon size="large" icon={waterOutline}></IonIcon>
          </IonRow>
          <IonRow id="StatVar">{waterVar}</IonRow>
        </IonCol>

        <IonCol size="3">
          <IonRow id="StatIcon">
            <IonIcon size="large" icon={fastFoodOutline}></IonIcon>
          </IonRow>
          <IonRow id="StatVar">{calVar}</IonRow>
        </IonCol>

        <IonCol size="3">
          <IonRow id="StatIcon">
            <IonIcon size="large" icon={footstepsOutline}></IonIcon>
          </IonRow>
         <IonRow id="StatVar">{stepsVar}</IonRow>
      </IonCol>

      </IonRow>
    </IonGrid>
  );
};

export default DiaryStatBar;
