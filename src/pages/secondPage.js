import React from "react";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage } from '@ionic/react';

const SecondPage = () => {
  return (
       <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Second Page</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent className="ion-padding">
           Second Page content displayed here...........
          </IonContent>
       </IonPage>
  );
};

export default SecondPage;