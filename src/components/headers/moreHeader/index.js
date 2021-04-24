import React from "react";
import {
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
} from "@ionic/react";

const PageHeaderMore = ({ title, href }) => {
  return (
    <IonHeader>
      <IonToolbar mode="md">
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton color="light" href={href}>More</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeaderMore;
