import React from "react";
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import PageHeader from '../../components/headers/pageHeader'


const FitnessTestPage = () => {
  return (
    <IonPage>
      <PageHeader title='Fitness Tests'></PageHeader>
        <IonContent>

        <IonCard href="/manager/fitness/test/add">
          <IonCardHeader>
            <IonCardTitle>Fitness Test</IonCardTitle>
            <IonCardSubtitle>Date: 12/02/21</IonCardSubtitle>
          <IonCardSubtitle>Time: 18;00</IonCardSubtitle>
          <IonCardSubtitle>Difficulty: Medium</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        
        </IonContent>
    </IonPage>
  );
};

export default FitnessTestPage;