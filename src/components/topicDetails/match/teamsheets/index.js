import React from "react";
import { IonCol, IonContent, IonRow, IonGrid, IonText } from "@ionic/react";

import "./teamsheet.css"

const TeamSheet = ({teamSheet}) => {

  return (
  <IonContent>
    <IonGrid id="bg-pitch">

      <IonRow>
        <IonCol size="12"><IonText id="posName">{teamSheet?.position1}</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position2}</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position3}</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position4}</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position5}</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position6}</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position7}</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6"><IonText id="posName">{teamSheet?.position8}</IonText></IonCol>
        <IonCol size="6"><IonText id="posName">{teamSheet?.position9}</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position10}</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position11}</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position12}</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position13}</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position14}</IonText></IonCol>
        <IonCol size="4"><IonText id="posName">{teamSheet?.position15}</IonText></IonCol>
      </IonRow>

      <hr id="contentDivider"></hr>

      <IonRow>
        <IonCol size="6"><IonText id="">16: {teamSheet?.position16}</IonText></IonCol>
        <IonCol size="6"><IonText id="">19: {teamSheet?.position19}</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6"><IonText id="">17: {teamSheet?.position17}</IonText></IonCol>
        <IonCol size="6"><IonText id="">20: {teamSheet?.position20}</IonText></IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6"><IonText id="">18: {teamSheet?.position18}</IonText></IonCol>
      </IonRow>


    </IonGrid>
  </IonContent>
  );
};

export default TeamSheet;
