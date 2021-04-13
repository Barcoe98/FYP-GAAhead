import React from "react";
import { IonRow, IonCol, IonText, IonGrid } from "@ionic/react";
import "./stat.css";

const TeamStatContent = ({
  statTitle,
  teamStatValue,
}) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="12">Team</IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="6">
          <IonText>{statTitle}</IonText>
        </IonCol>
        <IonCol size="6">
          <IonText>{teamStatValue}</IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default TeamStatContent;
