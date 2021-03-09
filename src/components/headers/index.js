import React from "react";
import { IonButtons, IonHeader, IonToolbar, IonTitle, IonBackButton } from '@ionic/react';

const PageHeader = ({title}) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{`${title}`}</IonTitle>
        <IonButtons color="danger" slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;