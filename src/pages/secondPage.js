import React from "react";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage, IonRouterLink } from '@ionic/react';

const SecondPage = () => {
  return (
       <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Second Page</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent className="ion-padding">
           Second Page content displayed here...........<br></br>
           Go to <IonRouterLink routerLink="/home"> Home Page</IonRouterLink>
          </IonContent>
       </IonPage>
  );
};

export default SecondPage;