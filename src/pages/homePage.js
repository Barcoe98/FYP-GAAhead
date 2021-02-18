import React  from "react";
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import PageHeader from '../components/headers'

const HomePage = () => {
  return (
       <IonPage>
        <PageHeader title="Home"></PageHeader>
        <IonContent className="ion-padding">
        Fitness Test Page Page content displayed here...........<br></br>
        Go to <IonRouterLink routerLink="/manager/fitness/test"> Fitness Test Page</IonRouterLink>
       </IonContent>
       </IonPage>
  );
};

export default HomePage;