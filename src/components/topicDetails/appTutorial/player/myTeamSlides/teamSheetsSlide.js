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
            <IonItem lines="none" id="slideItem"><IonText>Displays Team Sheets cards created by your manager</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText>Click on a card to display panel</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText>Check If you are on the starting panel from upcoming Fixtures</IonText></IonItem>
            </IonList>
            <IonIcon id="iconTut" icon={peopleOutline} />

        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default TeamSheetsSlide;
