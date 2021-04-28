import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerTeal from "../../../../textComponents/dividerHeaders/itemDividerYlw";
import { layersOutline } from "ionicons/icons";

import '../../appTutorial.css'

const MoreSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">More Page</h1>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
           <ItemDividerTeal dividerLabel="Join Team"></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText>Get your Team Id from you manager and add to you profile to be able to view all you teams activities</IonText></IonItem>
          <ItemDividerTeal dividerLabel="App Tutorial Page"></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText>Displays App tutorial slides to explain the app and all its features</IonText> </IonItem>
          <ItemDividerTeal dividerLabel="Contact Us"></ItemDividerTeal>
            <IonItem lines="none" id="slideItem"><IonText>All forms of contact to us for an queries you may have</IonText> </IonItem>
          </IonList>
          <IonIcon id="iconTut" icon={layersOutline} />

        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default MoreSlide;