import React from "react";
import { IonContent, IonList, IonText, IonGrid, IonRow, IonCol,IonItem, IonIcon} from "@ionic/react";
import { logoInstagram, logoTwitter, logoFacebook } from "ionicons/icons";


import './contactUs.css'

const ContactUs = () => {
return (
  <IonContent id="bg-col">
    <h1 id="contactTitle">Contact Us</h1>

    <IonList id="pgContent">
      <IonItem id="pgItem" lines="none"><IonText>Email: gaahead@gmail.com</IonText></IonItem>
      <IonItem id="pgItem" lines="none"><IonText>Phone: 05997857874</IonText></IonItem>
    </IonList>


    <IonGrid>
    <IonRow>
      <IonCol size="4">
        <IonRow id="mediaIcon">
          <IonIcon icon={logoFacebook}></IonIcon>
        </IonRow>
      </IonCol>

      <IonCol size="4">
        <IonRow id="mediaIcon">
          <IonIcon icon={logoTwitter}></IonIcon>
        </IonRow>
      </IonCol>

      <IonCol size="4">
        <IonRow id="mediaIcon">
          <IonIcon icon={logoInstagram}></IonIcon>
        </IonRow>
      </IonCol>
    </IonRow>
  </IonGrid>
    
  </IonContent>
  );
};

export default ContactUs;
