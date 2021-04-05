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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

const PageHeaderDelete = ({ title, action }) => {
  return (
    <IonHeader>
      <IonToolbar mode="md">
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton color="light" onclick={action}>
          <FontAwesomeIcon icon={faTrash} size="2x" color="#ff3b30"/>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeaderDelete;
