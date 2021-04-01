import React  from "react";
import { IonContent, IonPage, IonGrid, IonCol, IonRow} from '@ionic/react';
import PageHeader from '../../components/headers/index'
import "../pages.css"

const MatchesPage = () => {
  return (
    <IonPage>
    <PageHeader title="Matches"></PageHeader>
      <IonContent id="pg-Sze">
      <IonGrid>

      <IonRow>
        <IonCol id="navBtnRed" size="12">
          <ion-router-link id="navLnk" href="/manager/fixtures/list">Fixtures</ion-router-link>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol id="navBtnYlw" size="12">
          <ion-router-link id="navLnk" href="/manager/results/list">Results</ion-router-link>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol id="navBtnGrn" size="12">
          <ion-router-link id="navLnk" href="/manager/tables/list">Tables</ion-router-link>
        </IonCol>
      </IonRow>

    </IonGrid>
    </IonContent>
   </IonPage>
  );
};

export default MatchesPage;