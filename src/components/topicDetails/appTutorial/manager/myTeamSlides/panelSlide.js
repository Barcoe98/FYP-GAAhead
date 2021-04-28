import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerTeal from "../../../../textComponents/dividerHeaders/itemDividerTeal";
import { clipboardOutline } from "ionicons/icons";

import '../../appTutorial.css'


const PlannerSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">Panel</h1>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
           <ItemDividerTeal dividerLabel="Player List Page"></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText>Displays all the players in your Team</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText>Click on a card to display the players details</IonText></IonItem>
            <ItemDividerTeal dividerLabel="Player Details Page"></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText>Displays player details such as position, age, contact details and more</IonText> </IonItem>
          </IonList>
          <IonIcon id="iconTut" icon={clipboardOutline} />

        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default PlannerSlide;
