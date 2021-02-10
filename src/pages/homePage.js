import React  from "react";
import {Link} from "react-router-dom";
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
           Go to <Link to="/secondpage"> Second Page</Link>
          </IonContent>
       </IonPage>
  );
};

export default HomePage;