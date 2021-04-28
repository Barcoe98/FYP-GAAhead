import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerGaa from "../../../../textComponents/dividerHeaders/itemDividerGaa";
import { readerOutline } from "ionicons/icons";

import '../../appTutorial.css'


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
          <IonList id="slideContent">
          <ItemDividerGaa dividerLabel="Journal Entries List Page"></ItemDividerGaa>
            <IonItem lines="none" id="slideItem"><IonText >Click on a card to display more details</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Click the add button to add a new journal Entry</IonText></IonItem> 
          <ItemDividerGaa dividerLabel="Journal Details Page"></ItemDividerGaa>
            <IonItem lines="none" id="slideItem"><IonText>View data like how many calories you have eaten, keep track of you meals or exercise and more</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Made a mistake? Use the Edit icon or Delete icon to remove or edit the Entry</IonText> </IonItem>
          </IonList>
          <IonIcon id="iconTut" icon={readerOutline} />

        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default JournalSlide;
