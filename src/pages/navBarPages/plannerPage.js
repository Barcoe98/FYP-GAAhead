import React from "react";
import { IonContent, IonPage, IonGrid, IonCol, IonRow } from "@ionic/react";
import TitleHeader from "../../components/headers/titeHeader";

const PlannerPage = () => {
  
  return (
    <IonPage>
      <TitleHeader title="Planners"></TitleHeader>
      <IonContent color="secondary" id="pg-Sze">
        <IonGrid id="bg-col">
          <IonRow id="bg-col">
            <IonCol id="navBtnRed" size="12">
              <ion-router-link id="navLnk" href="/manager/fitness/test/list">
                Fitness Tests
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow id="bg-col">
            <IonCol id="navBtnYlw" size="12">
              <ion-router-link
                id="navLnk"
                href="/manager/trainingschedule/list"
              >
                Training Schedules
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow id="bg-col">
            <IonCol id="navBtnGrn" size="12">
              <ion-router-link id="navLnk" href="/manager/workout/list">
                Workout Routines
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow id="bg-col">
          <IonCol id="navBtnGrn" size="12">
            <ion-router-link id="navLnk" href="/player/team/join">
              Join Team
            </ion-router-link>
          </IonCol>
        </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PlannerPage;
