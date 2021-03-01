import React  from "react";
import { IonContent, IonPage, IonButton } from '@ionic/react';
import PageHeader from '../components/headers'

const MorePage = () => {
  return (
    <IonPage>
    <PageHeader title="Planner Page"></PageHeader>
    <IonContent className="ion-padding">
    <IonButton size="large" expand="block" href="/manager/fitness/test/list"> Fitness Tests</IonButton>
    <IonButton size="large" expand="block" href="/manager/planner/trainingschedule/list"> Training Schedules</IonButton>
   </IonContent>
   </IonPage>
  );
};

export default MorePage;