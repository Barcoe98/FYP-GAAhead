import React from "react";
import {
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonIcon,
} from "@ionic/react";

import { createOutline } from "ionicons/icons";

const PageHeaderEdit = ({ title, href }) => {
  return (
    <IonHeader>
      <IonToolbar mode="md">
        <IonTitle>{title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton color="light" href={href}>
              <IonIcon icon={createOutline} />
            </IonButton>
          </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeaderEdit;
