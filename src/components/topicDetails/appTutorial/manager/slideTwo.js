import React from "react";
import { IonGrid, IonCol, IonRow, IonSlide, IonText } from "@ionic/react";

import '../appTutorial.css'


const SlideTwo = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol id="slideTitle" size="12">
          <IonText>Fitness Test</IonText>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonText id="slideContent">
          My Team Page
          </IonText>
        </IonCol>
      </IonRow>

      
      <IonRow>
        <IonCol>
          <IonText id="slideContent">
          Fitness Tests Button will lead you to the 
          Fitness Tests set out by your manager.
          Click on a test and you can see the activities for that test and requirements.
          After you complete the test you can add you results to the 
          </IonText>
        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default SlideTwo;
