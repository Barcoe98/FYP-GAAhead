import React from "react";
import {
  IonContent,
  IonPage,
  IonList,
  IonLabel,
  IonItem,
  IonIcon,
} from "@ionic/react";
import {
  informationCircle,
  helpCircle,
  logOut,
  apps,
  person,
} from "ionicons/icons";

import "../pages.css";
import TitleHeader from "../../components/headers/titeHeader";

const MorePage = () => {
  return (
    <IonPage>
      <TitleHeader title="More Page"></TitleHeader>
      <IonContent id="bg-col">
        <IonList>
          <IonItem routerLink="/manager/my-profile" id="bg-col">
            <IonIcon icon={person}></IonIcon>
            <IonLabel>My Profile</IonLabel>
          </IonItem>

          <IonItem routerLink="#" id="bg-col">
            <IonIcon icon={informationCircle}></IonIcon>
            <IonLabel>About</IonLabel>
          </IonItem>

          <IonItem routerLink="#" id="bg-col">
            <IonIcon icon={helpCircle}></IonIcon>
            <IonLabel>App Tutorial</IonLabel>
          </IonItem>

          <IonItem routerLink="#" id="bg-col">
            <IonIcon icon={apps}></IonIcon>
            <IonLabel>Another Item 2</IonLabel>
          </IonItem>

          <IonItem routerLink="#" id="bg-col">
            <IonIcon color="danger" icon={logOut}></IonIcon>
            <IonLabel color="danger">Logout</IonLabel>
          </IonItem>
          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MorePage;
