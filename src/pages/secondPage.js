import React from "react";
import {Link} from "react-router-dom";
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
           Second Page content displayed here...........<br></br>
           Go to <Link to="/home"> Home Page</Link>
          </IonContent>
       </IonPage>
  );
};

export default SecondPage;