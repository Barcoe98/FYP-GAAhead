import React from "react";
import { IonContent, IonPage, IonGrid, IonCol, IonRow } from "@ionic/react";
import TitleHeader from "../../../components/headers/titeHeader";

import "../../pages.css";

const MyTeamPage = () => {
  
  return (
  <IonPage>
    <IonContent id="bg-col">
      <TitleHeader title="My Team"></TitleHeader>
        <IonGrid>

          <IonRow>
            <IonCol id="navFixtureBtn" size="6">
              <ion-router-link id="navLnk" href="/fixture/list">Fixtures</ion-router-link>
            </IonCol>
            <IonCol id="navResultsRed" size="6">
              <ion-router-link id="navLnk" href="/result/list">Results</ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navTeamBtn" size="12">
              <ion-router-link id="navLnk" href="/team/panel/list">Team Players</ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navTrainingBtn" size="6">
              <ion-router-link id="navLnk" href="/trainingschedule/list">Training Schedules</ion-router-link>
            </IonCol>
            <IonCol id="navWorkoutsBtn" size="6">
              <ion-router-link id="navLnk" href="/workout/list">Workout Routines
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navFTestsBtn" size="12">
              <ion-router-link id="navLnk" href="/fitness/test/list">Fitness Tests</ion-router-link>
            </IonCol>
          </IonRow>

          
         

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MyTeamPage;
