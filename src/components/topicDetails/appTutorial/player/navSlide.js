import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText } from "@ionic/react";

import '../appTutorial.css'


const NavSlide = () => {
return (
  
  <IonSlide id="bg-s1">
  <IonGrid>
    <IonRow>
      <IonCol id="slideTitle" size="12">
        <IonText>Navigation Bar</IonText>
      </IonCol>
    </IonRow>

    <IonList id="slideContent">
      <IonItem lines="none" id="slideItem"><IonText>My Team - All pages for you team activities</IonText></IonItem>
      <IonItem lines="none" id="slideItem"><IonText>Journal - Shows a list of all your Journals Entries</IonText></IonItem>
      <IonItem lines="none" id="slideItem"><IonText>My Profile - Display all your profile details, Team Details and More</IonText></IonItem>
      <IonItem lines="none" id="slideItem"><IonText>More - Links to more features of the app such as Join A team and more</IonText></IonItem>
    </IonList>

  </IonGrid>
</IonSlide>
    
  );
};

export default NavSlide;