import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText } from "@ionic/react";
import ItemDividerPurple from "../../../../textComponents/dividerHeaders/itemDividerPurple";

import '../../appTutorial.css'


const ResultsSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">Results</h1>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
          <ItemDividerPurple dividerLabel="Fixture List Page"></ItemDividerPurple>
            <IonItem lines="none" id="slideItem"><IonText >Click on a card to display more Result details</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Click the add button to add a new Result</IonText></IonItem> 
            <ItemDividerPurple dividerLabel="Fixture Details Page"></ItemDividerPurple>
            <IonItem lines="none" id="slideItem"><IonText >Made a mistake on the Result? Use the Edit icon or Delete icon to remove or edit the Result</IonText> </IonItem>
          </IonList>
        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default ResultsSlide;
