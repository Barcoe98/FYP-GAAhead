import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerGrn from "../../../../textComponents/dividerHeaders/itemDividerGrn";
import { barChartOutline } from "ionicons/icons";

import '../../appTutorial.css'


const TeamStatsSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">Team Statistics</h1>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
           <ItemDividerGrn dividerLabel="Teams Stats Page"></ItemDividerGrn>
            <IonItem lines="none" id="slideItem"><IonText>Displays all current Team Statistics</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText>Click on more icon to view previous Years Stats</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText>Team Stats are taken from all results stats added up</IonText></IonItem>
          </IonList>
          <IonIcon id="iconTut" icon={barChartOutline} />

        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default TeamStatsSlide;
