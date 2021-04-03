import React from "react";
import { IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonBackButton, IonIcon } from '@ionic/react';
import { trashBin } from "ionicons/icons";
import { useHistory, useParams } from "react-router";
import {firestore} from '../../../firebase'

import '../headers.css'

const PageHeaderDelete = ({title, action }) => {

  return (
    <IonHeader color="secondary">
      <IonToolbar id="delToolbar" mode="md">
      <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton color="dark" onclick={action}>
            <IonIcon size="large" icon={trashBin}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeaderDelete;