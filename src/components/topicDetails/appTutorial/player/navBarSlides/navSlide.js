import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerTeal from "../../../../textComponents/dividerHeaders/itemDividerRed";
import { ellipsisHorizontal } from "ionicons/icons";

import '../../appTutorial.css'


const NavSlide = () => {
return (
  
  <IonSlide id="bg-s1">
  <IonGrid>
    <IonRow>
      <IonCol id="slideTitle" size="12">
        <IonText>Navigation Bar</IonText>
      </IonCol>
    </IonRow>

    <IonRow>
      <IonCol size="12">
        <IonList id="slideContent">
          <ItemDividerTeal dividerLabel="My Team"></ItemDividerTeal>
          <IonItem lines="none" id="slideItem"><IonText>All pages to view activities set out by your manager</IonText></IonItem>
          <ItemDividerTeal dividerLabel="Journal"></ItemDividerTeal>
          <IonItem lines="none" id="slideItem"><IonText>A feature to allow you to keep track of your activities with a daily journal</IonText></IonItem>
          <ItemDividerTeal dividerLabel="My Profile"></ItemDividerTeal>
          <IonItem lines="none" id="slideItem"><IonText>All you profile details on one page</IonText></IonItem>
          <ItemDividerTeal dividerLabel="More"></ItemDividerTeal>
          <IonItem lines="none" id="slideItem"><IonText>Links to more features of the app such as Join a Team, App Tutorial and more</IonText></IonItem>
          <IonIcon id="iconTut" icon={ellipsisHorizontal} />

          </IonList>
      </IonCol>
    </IonRow>
     
  </IonGrid>
</IonSlide>
    
  );
};

export default NavSlide;