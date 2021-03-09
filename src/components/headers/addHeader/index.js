import React from "react";
import { IonButtons, IonHeader, IonToolbar, IonTitle, IonBackButton, IonIcon } from '@ionic/react';
import { addCircle } from "ionicons/icons";


const PageHeaderAdd = ({title}) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{`${title}`}</IonTitle>
        <IonButtons color="danger" slot="start">
          <IonBackButton></IonBackButton>
          <IonIcon routerLink="/manager/planner/trainingschedule/add" size="large" slot="primary" icon={addCircle}></IonIcon>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeaderAdd;