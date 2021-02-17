import React from "react";
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import PageHeader from '../../components/headers/pageHeader'

const FitnessTestPage = () => {
  return (
       <IonPage>
       <PageHeader title='Fitness Tests'></PageHeader>
          <IonContent className="ion-padding">
           Fitness Test Page Page content displayed here...........<br></br>
           Go to <IonRouterLink routerLink="/manager/fitness/test/add"> Add Fitness Test Page</IonRouterLink>
          </IonContent>
       </IonPage>
  );
};

export default FitnessTestPage;