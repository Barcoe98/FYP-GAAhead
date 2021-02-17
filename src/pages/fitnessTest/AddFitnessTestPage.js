import React from "react";
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import PageHeader from '../../components/headers/pageHeader'

const AddFitnessTestPage = ({title}) => {
  return (
       <IonPage>
        <PageHeader title='Add Fitness Test'></PageHeader>
          <IonContent className="ion-padding">
           Fitness Test Page content displayed here...........<br></br>
           Go to <IonRouterLink routerLink="/manager/home"> Fitness Test Page</IonRouterLink>
          </IonContent>
       </IonPage>
  );
};

export default AddFitnessTestPage;