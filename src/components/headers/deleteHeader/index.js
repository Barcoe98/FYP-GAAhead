import React from "react";
import { IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonBackButton, IonIcon } from '@ionic/react';
import { trashBin } from "ionicons/icons";
import { useHistory, useParams } from "react-router";
import {firestore} from '../../../firebase'

const PageHeaderDelete = ({title, action }) => {

  return (
    <IonHeader>
      <IonToolbar>
      <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton color="danger" onclick={action}>
            <IonIcon size="large" icon={trashBin}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeaderDelete;