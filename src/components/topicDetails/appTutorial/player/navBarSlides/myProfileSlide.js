import React from "react";
import { IonGrid, IonList, IonItem, IonCol, IonRow, IonSlide, IonText, IonIcon } from "@ionic/react";
import ItemDividerGaa from "../../../../textComponents/dividerHeaders/itemDividerGaa";
import { personOutline } from "ionicons/icons";

import '../../appTutorial.css'


const MyProfileSlide = () => {
return (
  
  <IonSlide id="bg-s1">
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <h1 id="slideTitle">My Profile</h1>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonList id="slideContent">
          <ItemDividerGaa dividerLabel=""></ItemDividerGaa>
            <IonItem lines="none" id="slideItem"><IonText >View all your details</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText >Update you profile image and other information with the edit icon</IonText></IonItem>
            <IonItem lines="none" id="slideItem"><IonText>Keep track of your injury's or add a new one with the injury details section</IonText></IonItem> 
          </IonList>
          <IonIcon id="iconTut" icon={personOutline} />

        </IonCol>
      </IonRow>

    </IonGrid>
  </IonSlide>
    
  );
};

export default MyProfileSlide;
