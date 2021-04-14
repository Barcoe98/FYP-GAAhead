import React from "react";
import { IonContent, IonPage, IonGrid, IonCol, IonRow } from "@ionic/react";
import PageHeader from "../../../components/headers/index";

const MyTeamPage = () => {
  
  return (
    <IonPage>
      <PageHeader title="My Team"></PageHeader>
      <IonContent color="secondary" id="pg-Sze">

        <IonGrid id="bg-col">

          <IonRow>
            <IonCol id="navBtnRed" size="12">
              <ion-router-link id="navLnk" href="/manager/fitness/test/list">
                Fitness Tests
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navBtnYlw" size="6">
              <ion-router-link
                id="navLnk"
                href="/manager/trainingschedule/list"
              >
                Training Schedules
              </ion-router-link>
            </IonCol>
          
            <IonCol id="navBtnGrn" size="6">
              <ion-router-link id="navLnk" href="/manager/workout/list">
                Workout Routines
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navBtnBlue" size="12">
              <ion-router-link id="navLnk" href="/manager/fixture/list">
                Fixtures
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navBtnPrpl" size="12">
              <ion-router-link id="navLnk" href="/manager/result/list">
                Results
              </ion-router-link>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MyTeamPage;
