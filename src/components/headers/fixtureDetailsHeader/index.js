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

import { trashBinOutline,  createOutline, checkmarkCircleOutline } from "ionicons/icons";

const PageHeaderFixtureDetails = ({ title, action, href, hrefEdit }) => {
  return (
    <IonHeader>
      <IonToolbar mode="md">
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton color="light" href={hrefEdit}>
          <IonIcon icon={createOutline} />
          </IonButton>
          <IonButton color="light" onclick={action}>
          <IonIcon icon={trashBinOutline} />
          </IonButton>
          <IonButton color="light" href={href}>
          <IonIcon icon={checkmarkCircleOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeaderFixtureDetails;
