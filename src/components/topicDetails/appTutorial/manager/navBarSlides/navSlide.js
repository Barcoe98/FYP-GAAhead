import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText } from "@ionic/react";
import ItemDividerTeal from "../../../../textComponents/dividerHeaders/itemDividerRed";

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
          <ItemDividerTeal dividerLabel="Fixtures & Results"></ItemDividerTeal>
          <IonItem lines="none" id="slideItem"><IonText>All pages to manage your Teams Fixtures and keep track of the results</IonText></IonItem>
          <ItemDividerTeal dividerLabel="Planner"></ItemDividerTeal>
          <IonItem lines="none" id="slideItem"><IonText>All Pages to plan your teams activities, Features such as Fitness Test, Workouts and more</IonText></IonItem>
          <ItemDividerTeal dividerLabel="My Team"></ItemDividerTeal>
          <IonItem lines="none" id="slideItem"><IonText>All pages for looking at team statistics, create a team sheet and view your players details</IonText></IonItem>
          <ItemDividerTeal dividerLabel="More"></ItemDividerTeal>
          <IonItem lines="none" id="slideItem"><IonText>Links to more features of the app such as My Profile, App Tutorial and more</IonText></IonItem>
        </IonList>
      </IonCol>
    </IonRow>
     
  </IonGrid>
</IonSlide>
    
  );
};

export default NavSlide;