import React from "react";
import { IonGrid, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";

import './appTutorial.css'

const WelcomeSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol id="slideTitle" size="12">
          <IonText>Welcome to GAAhead</IonText>
        </IonCol>
      </IonRow>

      <IonRow>
        <img id="logoImg" alt="me" src="https://firebasestorage.googleapis.com/v0/b/fyp-gaahead-development.appspot.com/o/app%2Fimages%2FScreenshot%20(36).png?alt=media&token=e3ab6474-2afd-4e74-9bdd-ee04279f09d2"></img>
      </IonRow>

      <IonRow>
        <IonCol size="10"> 
          <IonText id="continueIcon">Swipe to Continue to App Tutorial </IonText> 
        </IonCol>
        <IonCol size="2"> 
          <IonIcon id="morePgLink" icon={chevronForwardOutline}></IonIcon>
        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default WelcomeSlide;
