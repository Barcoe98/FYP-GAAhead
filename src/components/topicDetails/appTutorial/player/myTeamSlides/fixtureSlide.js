import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerGaa from "../../../../textComponents/dividerHeaders/itemDividerGaa";
import { helpCircleOutline } from "ionicons/icons";

import '../../appTutorial.css'


const FixturesSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">Fixtures & Results</h1>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
          <ItemDividerGaa dividerLabel="Fixtures Page"></ItemDividerGaa>
            <IonItem lines="none" id="slideItem"><IonText >Click on a card to display more Fixture details</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >View need to know data about you upcoming games</IonText></IonItem> 
            <ItemDividerGaa dividerLabel="Results Page"></ItemDividerGaa>
            <IonItem lines="none" id="slideItem"><IonText >Click on a card to display more Result details</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >View match results and see where you can improve</IonText></IonItem> 
            <IonIcon id="iconTut" icon={helpCircleOutline} />

          </IonList>
        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default FixturesSlide;
