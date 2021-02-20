import React  from "react";
import { IonButton, IonContent, IonPage} from '@ionic/react';
import PageHeader from '../components/headers'

const PlannerPage = () => {
  return (
       <IonPage>
        <PageHeader title="Planner Page"></PageHeader>
        <IonContent className="ion-padding">
        <IonButton size="large" expand="block" href="/manager/fitness/test/list"> Fitness Tests</IonButton>
       </IonContent>
       </IonPage>
  );
};

export default PlannerPage;