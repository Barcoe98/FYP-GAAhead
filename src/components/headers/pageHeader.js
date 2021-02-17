import React from "react";
import { IonButtons, IonHeader, IonToolbar, IonTitle, IonBackButton } from '@ionic/react';

const FitnessTestPage = ({title}) => {
  return (
        <IonHeader>
          <IonToolbar>
            <IonTitle>{`${title}`}</IonTitle>
            <IonButtons slot="start">
                <IonBackButton></IonBackButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
  );
};

export default FitnessTestPage;