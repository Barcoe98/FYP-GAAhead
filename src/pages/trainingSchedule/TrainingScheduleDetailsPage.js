import React, {useEffect, useState } from "react";
import { IonContent, IonRow, IonCol, IonButton, IonGrid, IonList, IonPage, IonText, IonIcon} from '@ionic/react';
import { flame, time, barChart, calendar } from 'ionicons/icons';
import PageHeader from '../../components/headers'
import { useParams } from "react-router-dom";
import { firestore } from '../../firebase'
import './Training.css';


const FitnessTestDetailsPage = () => {

  const {id} = useParams()
  const  [trainingSchedule, setTrainingSchedule] =  useState(null)

  useEffect(() => {
    const tScheduleRef = firestore.collection('training_schedules').doc(id)
    tScheduleRef.get(id).then(doc => {
      const trainingSchedules = { id: doc.id, ...doc.data()}
      setTrainingSchedule(trainingSchedules);
    });
  }, [id]);


  return (
    <IonPage>
    <PageHeader title=""></PageHeader>
    <IonContent>
    <IonList id="ts-bg-color"> 
    <div id="ts-bg-img"></div>
      <h1 id="sectionTitle">{trainingSchedule?.title} </h1>

        <div id="sectionContent">
          <IonGrid>
            <IonRow>
              <IonCol size="4">
              <IonRow id="tIcon">
                <IonCol> <IonIcon size="large" icon={calendar}></IonIcon></IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>{trainingSchedule?.date}</IonCol>
                </IonRow>
              </IonCol>

              <IonCol size="4">
                <IonRow id="tIcon">
                  <IonCol><IonIcon size="large" icon={time}></IonIcon></IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>{trainingSchedule?.time}</IonCol>
                </IonRow>
              </IonCol>

              <IonCol size="4">
              <IonRow id="tIcon">
                <IonCol> <IonIcon size="large" icon={flame}></IonIcon></IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>{trainingSchedule?.difficulty}</IonCol>
                </IonRow>
              </IonCol>

            </IonRow>
          </IonGrid>

          <hr id="contentDivider"></hr>

          <h5 color="dark" id="sectionTitle">Stretches/Warm Up</h5>
          <IonText>{trainingSchedule?.warm_up}</IonText>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="sectionTitle">Exercises</h5>
          <IonText>{trainingSchedule?.exercises}</IonText>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="sectionTitle">Warm Down</h5>
          <IonText>{trainingSchedule?.warm_down}</IonText>
        </div>

      </IonList>
    </IonContent>
</IonPage>
  );
};

export default FitnessTestDetailsPage;