import React from "react";
import { IonContent, IonPage, IonGrid, IonCol, IonRow } from "@ionic/react";
import PageHeader from "../../../components/headers/index";

const MyTeamPage = () => {
  
  return (
    <IonPage>
      <IonContent id="bg-col">

        <IonGrid>
          <IonRow>
            <IonCol id="navBtnYlw" size="6">
              <ion-router-link
                id="navLnk"
                href="/trainingschedule/list"
              >
                Training Schedules
              </ion-router-link>
            </IonCol>
          
            <IonCol id="navBtnGrn" size="6">
              <ion-router-link id="navLnk" href="/workout/list">
                Workout Routines
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navBtnRed" size="12">
              <ion-router-link id="navLnk" href="/fitness/test/list">
                Fitness Tests
              </ion-router-link>
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol id="navBtnBlue" size="6">
              <ion-router-link id="navLnk" href="/fixture/list">
                Fixtures
              </ion-router-link>
            </IonCol>

            <IonCol id="navBtnPrpl" size="6">
              <ion-router-link id="navLnk" href="/result/list">
                Results
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navBtnTeal" size="12">
              <ion-router-link id="navLnk" href="/team/panel/list">
                Team Players
              </ion-router-link>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MyTeamPage;
