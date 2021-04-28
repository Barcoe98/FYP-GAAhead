import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerTeal from "../../../../textComponents/dividerHeaders/itemDividerTeal";
import { clipboardOutline } from "ionicons/icons";

import '../../appTutorial.css'


const ActivitySlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">Planner Pages</h1>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
          <ItemDividerTeal dividerLabel="Activity Pages"></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText >View Activities set out by your manager</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Click on a card to view more details, like when the activity is and more</IonText></IonItem> 
            <IonItem lines="none" id="slideItem"><IonText >Also add your results to a Fitness test when done, using just a button</IonText></IonItem> 
            <ItemDividerTeal dividerLabel="Includes"></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText >Fitness Tests, Workouts & Training Schedules Pages</IonText> </IonItem>
          </IonList>
          <IonIcon id="iconTut" icon={clipboardOutline} />

        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default ActivitySlide;
