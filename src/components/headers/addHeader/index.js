import React from "react";
import { IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonBackButton, IonIcon } from '@ionic/react';
import { addCircle } from "ionicons/icons";

const PageHeaderAdd = ({title, href}) => {

  return (
    <IonHeader>
      <IonToolbar>
      <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>

        <IonButtons slot="end">
          <IonButton color="dark" href={href}>
            <IonIcon size="large" icon={addCircle}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeaderAdd;