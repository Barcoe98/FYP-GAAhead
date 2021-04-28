import React from "react";
import { IonContent, IonPage, IonGrid, IonCol, IonRow } from "@ionic/react";
import TitleHeader from "../../../components/headers/titeHeader";

import "../navBarPages.css";


const MatchesPage = () => {
  return (
    <IonPage>
      <TitleHeader title="Matches"></TitleHeader>
      <IonContent id="pg-Sze">
        <IonGrid>
          <IonRow>
            <IonCol id="navBtnFixtures" size="12">
              <ion-router-link id="navLnk" href="/manager/fixture/list">
                Fixtures
              </ion-router-link>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol id="navBtnResults" size="12">
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

export default MatchesPage;
