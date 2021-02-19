import React  from "react";
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import PageHeader from '../components/headers'

const TeamPage = () => {
  return (
       <IonPage>
        <PageHeader title="Team Page"></PageHeader>
        <IonContent className="ion-padding">
        Team Page content displayed here...........<br></br>
        Go to <IonRouterLink routerLink="/manager/more">More Page</IonRouterLink>
       </IonContent>
       </IonPage>
  );
};

export default TeamPage;