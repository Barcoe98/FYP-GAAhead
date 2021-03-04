import React  from "react";
import { IonContent, IonPage, IonRow, IonGrid, IonCol} from '@ionic/react';
import PageHeader from '../../components/headers/index'
import "../pages.css"

const TeamPage = () => {
  return (
    <IonPage>
    <PageHeader title="More Page"></PageHeader>
      <IonContent id="pg-Sze">
      <IonGrid>

      <IonRow>
        <IonCol id="navBtnRed" size="12">
          <ion-router-link id="navLnk" href="/manager/team/panel/list">My Team</ion-router-link>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol id="navBtnOrg" size="6">
          <ion-router-link id="navLnk" href="#">Players</ion-router-link>
        </IonCol>
        <IonCol id="navBtnYlw" size="6">
          <ion-router-link id="navLnk" href="#">Panel Selector</ion-router-link>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol id="navBtnGrn" size="12">
          <ion-router-link id="navLnk" href="#">Team Statistics</ion-router-link>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol id="navBtnTeal" size="6">
          <ion-router-link id="navLnk" href="/">Score Tracker</ion-router-link>
        </IonCol>
       
        <IonCol id="navBtnBlue" size="6">
          <ion-router-link id="navLnk" href="#">Feature 5</ion-router-link>
        </IonCol>
      </IonRow>

    </IonGrid>
      
    </IonContent>
   </IonPage>
  );
};

export default TeamPage;