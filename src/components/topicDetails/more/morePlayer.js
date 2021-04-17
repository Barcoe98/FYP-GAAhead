import React from "react";
import { IonContent, IonIcon, IonGrid, IonRow, IonCol, IonRouterLink } from "@ionic/react";
import { informationCircle, helpCircle, person, chevronForwardOutline, logOutOutline } from "ionicons/icons";

import "./more.css";

const MorePlayer = () => {

return (
  <IonContent id="bg-col">
    <IonGrid>
      <IonRow>
        <IonCol size="1">
          <IonIcon id="link" icon={person}></IonIcon>
        </IonCol>
        <IonCol size="10">
          <IonRouterLink id="link" href="/player/join/team"> Join Team</IonRouterLink>
        </IonCol>
        <IonCol size="1">
          <IonIcon id="link" icon={chevronForwardOutline}></IonIcon>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="1">
          <IonIcon id="link" icon={helpCircle}></IonIcon>
        </IonCol>
        <IonCol size="10">
          <IonRouterLink id="link" href="/player/app-tutorial"> App Tutorial</IonRouterLink>
        </IonCol>
        <IonCol size="1">
        <IonIcon id="link" icon={chevronForwardOutline}></IonIcon>
      </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="1">
          <IonIcon id="link" icon={informationCircle}></IonIcon>
        </IonCol>
        <IonCol size="10">
          <IonRouterLink id="link" href="/about"> About</IonRouterLink>
        </IonCol>
        <IonCol size="1">
          <IonIcon id="link" icon={chevronForwardOutline}></IonIcon>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="1">
          <IonIcon id="link" icon={informationCircle}></IonIcon>
        </IonCol>
        <IonCol size="10">
          <IonRouterLink id="link" href="/contact-us"> Contact Us</IonRouterLink>
        </IonCol>
        <IonCol size="1">
          <IonIcon id="link" icon={chevronForwardOutline}></IonIcon>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="1">
          <IonIcon id="link" color="danger" icon={logOutOutline}></IonIcon>
        </IonCol>
        <IonCol size="10">
          <IonRouterLink id="link" color="danger" href="/manager/my-profile"> Logout</IonRouterLink>
        </IonCol>
        <IonCol size="1">
          <IonIcon id="link" color="danger" icon={chevronForwardOutline}></IonIcon>
        </IonCol>
      </IonRow>
    </IonGrid>
  
  </IonContent>
  );
};

export default MorePlayer;
