import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText } from "@ionic/react";

import '../appTutorial.css'


const JournalSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">Journal</h1>
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
            <IonItem lines="none" id="slideItem"><IonText >List that contains all of you Journal Entries</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Click on a Entry to view more details, edit the entry and delete the entry</IonText> </IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Click on a Entry to view more details, edit the entry and delete the entry</IonText> </IonItem>
          </IonList>
        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default JournalSlide;
