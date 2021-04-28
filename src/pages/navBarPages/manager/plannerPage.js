import React from "react";
import { IonContent, IonPage, IonGrid, IonCol, IonRow } from "@ionic/react";
import TitleHeader from "../../../components/headers/titeHeader";

import "../navBarPages.css";

const PlannerPage = () => {
  
  return (
    <IonPage>
      <TitleHeader title="Planners"></TitleHeader>
      <IonContent id="bg-col">
        <IonGrid id="bg-col">
          <IonRow>
            <IonCol id="navBtnFtest" size="12">
              <ion-router-link id="navLnk" href="/manager/fitness/test/list">
                Fitness Tests
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow id="bg-col">
            <IonCol id="navBtnTraining" size="12">
              <ion-router-link
                id="navLnk"
                href="/manager/trainingschedule/list">
                Training Schedules
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow id="bg-col">
            <IonCol id="navBtnWorkout" size="12">
              <ion-router-link id="navLnk" href="/manager/workout/list">
                Workout Routines
              </ion-router-link>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PlannerPage;
