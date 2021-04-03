import React from "react";
import { IonButtons, IonHeader, IonToolbar, IonTitle, IonBackButton } from '@ionic/react';
import './headers.css'

const PageHeader = ({title}) => {
  return (
    <IonHeader id="normToolbar">
      <IonToolbar mode="md" >
        <IonTitle>{`${title}`}</IonTitle>
        <IonButtons color="dark" slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;