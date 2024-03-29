import React from "react";
import { IonContent, IonPage, IonRow, IonGrid, IonCol } from "@ionic/react";
import TitleHeader from "../../../components/headers/titeHeader";

import "../navBarPages.css";

const TeamPage = () => {
  return (
    <IonPage>
      <TitleHeader title="My Team"></TitleHeader>
      <IonContent id="pg-Sze">
        <IonGrid>
          <IonRow>
            <IonCol id="navBtnPanel" size="12">
              <ion-router-link id="navLnk" href="/manager/team/panel/list">
                Panel
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navBtnStats" size="12">
              <ion-router-link id="navLnk" href="/manager/team-stats">
                Team Statistics
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
          <IonCol id="navBtnTeamSheets" size="12">
            <ion-router-link id="navLnk" href="/manager/team-sheet/list">
              Team Sheets
            </ion-router-link>
          </IonCol>
        </IonRow>
          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TeamPage;
