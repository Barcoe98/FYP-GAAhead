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

import { trashBinOutline, createOutline } from "ionicons/icons";

const PageHeaderDelete = ({ title, action, editAction }) => {
  return (
    <IonHeader>
      <IonToolbar mode="md">
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton color="light" onclick={editAction}>
          <IonIcon icon={createOutline} />
          </IonButton>
          <IonButton color="light" onclick={action}>
          <IonIcon icon={trashBinOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeaderDelete;
