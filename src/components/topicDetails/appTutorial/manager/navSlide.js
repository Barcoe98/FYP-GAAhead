import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText } from "@ionic/react";

import '../appTutorial.css'


const NavSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">More</h1>
        </IonCol>
      </IonRow>
    
      <IonRow>
        <IonCol size="12">
          <img id="logoImg" alt="me" src="https://firebasestorage.googleapis.com/v0/b/fyp-gaahead-development.appspot.com/o/app%2Fimages%2FScreenshot%20(36).png?alt=media&token=e3ab6474-2afd-4e74-9bdd-ee04279f09d2"></img>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
            <IonItem lines="none" id="slideItem"><IonText >Item 1</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Item 2</IonText> </IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Item 3</IonText> </IonItem>
          </IonList>
        </IonCol>
      </IonRow>
    
    </IonGrid>
   
  </IonSlide>
    
  );
};

export default NavSlide;
