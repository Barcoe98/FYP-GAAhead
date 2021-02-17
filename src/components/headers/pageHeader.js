import React from "react";
import { IonButtons, IonHeader, IonToolbar, IonTitle, IonBackButton } from '@ionic/react';

const FitnessTestPage = () => {
  return (
        <IonHeader>
          <IonToolbar>
            <IonTitle>Test Header Page</IonTitle>
            <IonButtons slot="start">
                <IonBackButton></IonBackButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
  );
};

export default FitnessTestPage;