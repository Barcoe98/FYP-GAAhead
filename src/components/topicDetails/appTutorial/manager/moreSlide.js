import React from "react";
import { IonGrid, IonCol, IonRow, IonSlide, IonText } from "@ionic/react";

import '../appTutorial.css'


const MoreSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol id="slideTitle" size="12">
          <IonText>More</IonText>
        </IonCol>
      </IonRow>

      
      <IonRow>
        <IonCol>
          <IonText id="slideContent">
          Content
          </IonText>
        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default MoreSlide;
