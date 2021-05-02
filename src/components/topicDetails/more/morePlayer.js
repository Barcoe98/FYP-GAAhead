import React from "react";
import { IonContent, IonIcon, IonGrid, IonRow, IonCol } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";

import "./more.css";

const MorePlayer = () => {

return (
  <IonContent id="bg-col">
    <IonGrid>

    <IonRow>
      <IonCol id="morePgRed" size="10">
        <ion-router-link color ="dark" id="morePgLink"  href="/player/join/team">Join Team</ion-router-link>
      </IonCol>
      <IonCol id="morePgRed" size="2">
        <IonIcon id="morePgLink" icon={chevronForwardOutline}></IonIcon>
      </IonCol>
    </IonRow>

    <IonRow>
      <IonCol id="morePgGrn" size="10">
        <ion-router-link  color ="dark" id="morePgLink" href="/player/app-tutorial">App Tutorial</ion-router-link>
      </IonCol>
      <IonCol color ="dark" id="morePgGrn" size="2">
        <IonIcon color ="dark" id="morePgLink" icon={chevronForwardOutline}></IonIcon>
      </IonCol>
    </IonRow>

    <IonRow>
      <IonCol id="morePgBlue" size="10">
        <ion-router-link color ="dark" id="morePgLink" href="/contact-us">Contact Us</ion-router-link>
      </IonCol>
      <IonCol id="morePgBlue" size="2">
        <IonIcon id="morePgLink" icon={chevronForwardOutline}></IonIcon>
      </IonCol>
    </IonRow>

  </IonGrid>

</IonContent>
  );
};

export default MorePlayer;
