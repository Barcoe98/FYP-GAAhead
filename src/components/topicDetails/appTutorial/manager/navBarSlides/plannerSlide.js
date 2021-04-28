import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText } from "@ionic/react";
import ItemDividerTeal from "../../../../textComponents/dividerHeaders/itemDividerTeal";

import '../../appTutorial.css'


const PlannerSlide = () => {
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
          <ItemDividerTeal dividerLabel="List Page"></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText >Click on a card to display more activity details</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Click the add button to add a new activity</IonText></IonItem> 
            <ItemDividerTeal dividerLabel="Details Page"></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText >Made a mistake on the activity? Use the Edit icon or Delete icon to remove or edit the caactivityrd</IonText> </IonItem>
            <ItemDividerTeal dividerLabel="Includes"></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText >Fitness Tests, Workouts & Training Schedules Pages</IonText> </IonItem>
          </IonList>
        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default PlannerSlide;
