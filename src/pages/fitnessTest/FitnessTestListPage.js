import React from "react";
import { IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard } from '@ionic/react';
import PageHeader from '../../components/headers/pageHeader'
import { barbell, calendar, time } from "ionicons/icons";
import "../../components/fitnessTestCard/fitnessTestCard.css"


const FitnessTestPage = () => {
  return (
    <IonPage>
      <PageHeader title='Fitness Tests'></PageHeader>
        <IonContent>

        <IonCard href="/manager/fitness/test/add">
            <IonGrid>
                <IonRow>
                    <IonCol id="title" size="12">Fitness Test 1</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={calendar}></IonIcon></IonCol>
                    <IonCol size="11">14 September</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={time}></IonIcon></IonCol>
                    <IonCol size="11">14:00</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"><IonIcon icon={barbell}></IonIcon></IonCol>
                    <IonCol size="11">Difficulty</IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
        
        </IonContent>
    </IonPage>
  );
};

export default FitnessTestPage;