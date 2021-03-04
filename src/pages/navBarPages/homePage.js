import React  from "react";
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import PageHeader from '../../components/headers/index'
import "../pages.css"

const HomePage = () => {
  return (
       <IonPage>
        <PageHeader title="Home Page"></PageHeader>
        <IonContent className="ion-padding">
        Home Page content displayed here...........<br></br>
        Go to <IonRouterLink routerLink="/manager/fitness/test"> Fitness Test Page</IonRouterLink>
       </IonContent>
       </IonPage>
  );
};

export default HomePage;