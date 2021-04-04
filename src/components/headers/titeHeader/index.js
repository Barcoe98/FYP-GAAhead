import React from "react";
import { IonRow, IonCol, IonIcon, IonButton, IonHeader } from "@ionic/react";
import { trashBin } from "ionicons/icons";

import "./titleHeader.css";

const TitleHeader = ({ action }) => {
  return (
    <IonHeader>
      <h1 id="titleHeader">Your Fitness Tests</h1>
      <IonButton id="btnHeader"  fill="" size="default" onclick={action}> Create</IonButton>
    </IonHeader>
  );
};

export default TitleHeader;
