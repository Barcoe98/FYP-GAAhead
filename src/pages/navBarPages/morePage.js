import React  from "react";
import { IonContent, IonPage, IonList, IonLabel, IonItem, IonIcon} from '@ionic/react';
import PageHeader from '../../components/headers/index'
import { informationCircle, helpCircle, logOut, apps, person } from 'ionicons/icons';


import "../pages.css"

const MorePage = () => {
  return (
    <IonPage>
    <PageHeader title="More Page"></PageHeader>
      <IonContent id="pg-Sze">
      <IonList>

      <IonItem id="pg-Sze">
        <IonIcon size="/manager/my-profile" icon={person}></IonIcon>
        <IonLabel>My Profile</IonLabel>
      </IonItem>

      <IonItem id="pg-Sze">
        <IonIcon size="" icon={informationCircle}></IonIcon>
        <IonLabel>About</IonLabel>
      </IonItem>

      <IonItem id="pg-Sze">
        <IonIcon size="" icon={helpCircle}></IonIcon>
        <IonLabel >App Tutorial</IonLabel>
      </IonItem>

      <IonItem id="bg-col">
        <IonIcon size="" icon={apps}></IonIcon>
        <IonLabel>Another Item 2</IonLabel>
      </IonItem>
    </IonList>

    <IonItem id="pg-Sze">
      <IonIcon color="danger" size="" icon={logOut}></IonIcon>
      <IonLabel color="danger">Logout</IonLabel>
    </IonItem>
      
    </IonContent>
   </IonPage>
  );
};

export default MorePage;