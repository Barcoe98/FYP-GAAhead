import React from "react";
import { IonContent, IonPage, IonRow, IonGrid, IonCol } from "@ionic/react";
import TitleHeader from "../../components/headers/titeHeader";

import "../pages.css";

const TeamPage = () => {
  return (
    <IonPage>
      <TitleHeader title="My Team"></TitleHeader>
      <IonContent id="pg-Sze">
        <IonGrid>
          <IonRow>
            <IonCol id="navBtnRed" size="12">
              <ion-router-link id="navLnk" href="/manager/team/panel/list">
                My Team
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navBtnGrn" size="12">
              <ion-router-link id="navLnk" href="/manager/teamstats">
                Team Statistics
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navBtnYlw" size="12">
              <ion-router-link id="navLnk" href="#">
                Panel Selector
              </ion-router-link>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TeamPage;
