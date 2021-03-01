import React  from "react";
import { IonContent, IonPage, IonButton } from '@ionic/react';
import PageHeader from '../components/headers'

const TeamPage = () => {
  return (
    <IonPage>
    <PageHeader title="Team Page"></PageHeader>
    <IonContent className="ion-padding">
    <IonButton size="large" expand="block" href="/manager/team/panel/list"> Panel</IonButton>
    <IonButton size="large" expand="block" href="/manager/team/teamstats"> Team Statistics</IonButton>
    <IonButton size="large" expand="block" href="/manager/team/teamselector"> Team Selector</IonButton>

   </IonContent>
   </IonPage>
  );
};

export default TeamPage;