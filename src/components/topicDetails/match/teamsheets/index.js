import React from "react";
import { IonCol, IonContent, IonRow, IonGrid, IonText } from "@ionic/react";

import "./teamsheet.css"

const TeamSheet = () => {

  return (
  <IonContent>
    <IonGrid id="bg-pitch">

      <IonRow>
        <IonCol size="12"><IonText id="posName">Michael Barcoe</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6"><IonText id="posName">Michael Barcoe</IonText></IonCol>
        <IonCol size="6"><IonText id="posName">Michael Barcoe</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">Michael Barcoe</IonText></IonCol>
      </IonRow>

    </IonGrid>
  </IonContent>
  );
};

export default TeamSheet;
