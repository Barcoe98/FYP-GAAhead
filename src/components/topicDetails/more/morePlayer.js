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
        <ion-router-link id="morePgLink"  href="/manager/my-profile">Join Team</ion-router-link>
      </IonCol>
      <IonCol id="morePgRed" size="2">
        <IonIcon id="morePgLink" icon={chevronForwardOutline}></IonIcon>
      </IonCol>
    </IonRow>

    <IonRow>
      <IonCol id="morePgYlw" size="10">
        <ion-router-link id="morePgLink" href="/player/app-tutorial">App Tutorial</ion-router-link>
      </IonCol>
      <IonCol id="morePgYlw" size="2">
        <IonIcon id="morePgLink" icon={chevronForwardOutline}></IonIcon>
      </IonCol>
    </IonRow>

    <IonRow>
      <IonCol id="morePgGrn" size="10">
        <ion-router-link id="morePgLink" href="/about">About App</ion-router-link>
      </IonCol>
      <IonCol id="morePgGrn" size="2">
        <IonIcon id="morePgLink" icon={chevronForwardOutline}></IonIcon>
      </IonCol>
    </IonRow>

    <IonRow>
      <IonCol id="morePgBlue" size="10">
        <ion-router-link id="morePgLink" href="/contact-us">Contact Us</ion-router-link>
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
