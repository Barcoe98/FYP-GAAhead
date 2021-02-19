import React  from "react";
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import PageHeader from '../components/headers'

const MorePage = () => {
  return (
       <IonPage>
        <PageHeader title="More Page"></PageHeader>
        <IonContent className="ion-padding">
        More Page content displayed here...........<br></br>
        Go to <IonRouterLink routerLink="/manager/my">My Page</IonRouterLink>
       </IonContent>
       </IonPage>
  );
};

export default MorePage;