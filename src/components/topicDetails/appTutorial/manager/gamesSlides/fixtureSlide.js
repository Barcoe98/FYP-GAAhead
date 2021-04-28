import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerGaa from "../../../../textComponents/dividerHeaders/itemDividerGaa";
import { ellipsisHorizontal } from "ionicons/icons";

import '../../appTutorial.css'


const FixturesSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">Fixtures</h1>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
          <ItemDividerGaa dividerLabel="Fixture List Page"></ItemDividerGaa>
            <IonItem lines="none" id="slideItem"><IonText >Click on a card to display more Fixture details</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Click the add button to add a new Fixture</IonText></IonItem> 
          <ItemDividerGaa dividerLabel="Fixture Details Page"></ItemDividerGaa>
            <IonItem lines="none" id="slideItem"><IonText >Fixture Played? Click the tick icon to add it as a Results</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Made a mistake on the fixture? Use the Edit icon or Delete icon to remove or edit the Fixture</IonText> </IonItem>
          </IonList>
          <IonIcon id="iconTut" icon={ellipsisHorizontal} />

        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default FixturesSlide;
