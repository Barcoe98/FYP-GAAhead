import React  from "react";
import { IonContent, IonPage, IonList, IonLabel, IonItem, IonIcon} from '@ionic/react';
import PageHeader from '../../components/headers/index'
import { informationCircle, helpCircle, logOut, apps } from 'ionicons/icons';


import "../pages.css"

const MorePage = () => {
  return (
    <IonPage>
    <PageHeader title="More Page"></PageHeader>
      <IonContent id="pg-Sze">
      <IonList>

      <IonItem>
        <IonIcon size="" icon={informationCircle}></IonIcon>
        <IonLabel>About</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon size="" icon={helpCircle}></IonIcon>
        <IonLabel >App Tutorial</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon size="" icon={apps}></IonIcon>
        <IonLabel>Another Item</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon size="" icon={apps}></IonIcon>
        <IonLabel>Another Item 2</IonLabel>
      </IonItem>
    </IonList>

    <IonItem>
      <IonIcon color="danger" size="" icon={logOut}></IonIcon>
      <IonLabel color="danger">Logout</IonLabel>
    </IonItem>
      
    </IonContent>
   </IonPage>
  );
};

export default MorePage;