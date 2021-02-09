import React from "react";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage } from '@ionic/react';

const HomePage = () => {
  return (
       <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home Page</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent className="ion-padding">
           Home Page content displayed here...........
          </IonContent>
       </IonPage>
  );
};

export default HomePage;