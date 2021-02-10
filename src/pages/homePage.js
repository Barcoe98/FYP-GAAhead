import React  from "react";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage, IonRouterLink } from '@ionic/react';

const HomePage = () => {
  return (
       <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home Page</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent className="ion-padding">
           Home Page content displayed here...........<br></br>
           Go to <IonRouterLink routerLink="/secondpage"> Second Page</IonRouterLink>
          </IonContent>
       </IonPage>
  );
};

export default HomePage;