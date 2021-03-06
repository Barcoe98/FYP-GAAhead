import React  from "react";
import { IonContent, IonPage, IonGrid, IonCol, IonRow} from '@ionic/react';
import PageHeader from '../../components/headers/index'
import "../pages.css"

const PlannerPage = () => {
  return (
    <IonPage>
    <PageHeader title="More Page"></PageHeader>
      <IonContent id="pg-Sze">
      <IonGrid>

      <IonRow>
        <IonCol id="navBtnRed" size="12">
          <ion-router-link id="navLnk" href="/manager/fitness/test/list">Fitness Tests</ion-router-link>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol id="navBtnYlw" size="12">
          <ion-router-link id="navLnk" href="/manager/planner/trainingschedule/list">Training Schedules</ion-router-link>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol id="navBtnGrn" size="12">
          <ion-router-link id="navLnk" href="#">Work Out Routines</ion-router-link>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol id="navBtnTeal" size="12">
          <ion-router-link id="navLnk" href="/">Extra Feature</ion-router-link>
        </IonCol>
      </IonRow>

    </IonGrid>
    </IonContent>
   </IonPage>
  );
};

export default PlannerPage;