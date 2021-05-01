import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerGrn from "../../../../textComponents/dividerHeaders/itemDividerGrn";
import { peopleOutline } from "ionicons/icons";

import '../../appTutorial.css'


const TeamSheetsSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">Team Sheets</h1>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
           <ItemDividerGrn dividerLabel="Teams Sheets Page"></ItemDividerGrn>
            <IonItem lines="none" id="slideItem"><IonText>Displays Team Sheets cards</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText>Click on the add icon to add new Team Sheet</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText>Click on a card to display panel</IonText></IonItem>
            <ItemDividerGrn dividerLabel="Teams Sheets Page"></ItemDividerGrn>
            <IonItem lines="none" id="slideItem"><IonText>Displays Team Sheets cards</IonText></IonItem>        
            <IonIcon id="iconTut" icon={peopleOutline} />
  
            </IonList>
        </IonCol>

      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default TeamSheetsSlide;
