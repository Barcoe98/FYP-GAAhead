import React from "react";
import { IonButtons, IonHeader, IonToolbar, IonTitle, IonBackButton } from '@ionic/react';

const PageHeader = ({title}) => {
  return (
    <IonHeader>
      <IonToolbar mode="md">
        <IonTitle>{`${title}`}</IonTitle>
        <IonButtons color="dark" slot="end">
          <IonBackButton></IonBackButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;