import React from "react";
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const TitleHeader = ({title}) => {
  return (
    <IonHeader>
      <IonToolbar mode="md">
        <IonTitle>{`${title}`}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default TitleHeader;