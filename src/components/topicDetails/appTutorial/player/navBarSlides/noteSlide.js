import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerTeal from "../../../../textComponents/dividerHeaders/itemDividerRed";
import { informationCircleOutline } from "ionicons/icons";

import '../../appTutorial.css'

const MoreSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
          <ItemDividerTeal dividerLabel=""></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText>Don't Forget to update you profile with your information</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText>Also add Team Id to view all your team Activities</IonText></IonItem>
          <ItemDividerTeal dividerLabel=""></ItemDividerTeal>
          <IonIcon id="iconTut" icon={informationCircleOutline} />

          </IonList>
        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default MoreSlide;

