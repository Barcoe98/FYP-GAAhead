import React from "react";
import { IonRow, IonCol, IonText, IonGrid } from "@ionic/react";
import "./result.css";

const FitnessTestResult = ({  playerName, playerTime }) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="9">
          <IonText id="text">{playerName}</IonText>
        </IonCol>
        <IonCol size="3">
          <IonText id="text">{playerTime}</IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default FitnessTestResult;
