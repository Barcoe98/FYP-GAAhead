import React from "react";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage, IonRouterLink } from '@ionic/react';

const ThirdPage = () => {
  return (
       <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Third Page</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent className="ion-padding">
           Third Page content displayed here...........<br></br>
           Go to <IonRouterLink routerLink="/third"> Home Page</IonRouterLink>
          </IonContent>
       </IonPage>
  );
};

export default ThirdPage;