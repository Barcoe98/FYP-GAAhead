import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerPurple from "../../../../textComponents/dividerHeaders/itemDividerPurple";
import { ellipsisHorizontal } from "ionicons/icons";

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
          <ItemDividerPurple dividerLabel="Result List Page"></ItemDividerPurple>
            <IonItem lines="none" id="slideItem"><IonText >Click on a card to display more Result details</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Click the add button to add a new Result</IonText></IonItem> 
            <ItemDividerPurple dividerLabel="Result Details Page"></ItemDividerPurple>
            <IonItem lines="none" id="slideItem"><IonText >Made a mistake on the Result? Use the Edit icon or Delete icon to remove or edit the Result</IonText> </IonItem>
          </IonList>
          <IonIcon id="iconTut" icon={ellipsisHorizontal} />

        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default ResultsSlide;
