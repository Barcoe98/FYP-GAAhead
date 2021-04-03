import React from "react";
import { IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonBackButton, IonIcon } from '@ionic/react';
import { addCircle } from "ionicons/icons";
import '../headers.css'


const PageHeaderAdd = ({title, href}) => {

  return (
    <IonHeader>
      <IonToolbar class="ion-no-border" id="addToolbar" mode="md">
      <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>

        <IonButtons slot="end">
          <IonButton color="light" href={href}>
            <IonIcon size="large" icon={addCircle}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeaderAdd;