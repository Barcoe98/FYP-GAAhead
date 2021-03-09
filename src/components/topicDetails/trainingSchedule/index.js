import React from "react";
import { IonContent, IonRow, IonCol, IonGrid, IonList, IonText, IonIcon} from '@ionic/react';
import { flame, time, calendar } from 'ionicons/icons';
import './fitnessTestDetails.css'

const TrainingScheduleDetails = ({trainingSchedule}) => {

  return (

  <IonContent>
    <IonList id="ts-bg-color"> 
    <div id="ts-bg-img"></div>
      <h1 id="sectionTitle">{trainingSchedule?.title}</h1>

        <div id="sectionContent">
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonRow id="tIcon"><IonCol> <IonIcon size="large" icon={calendar}></IonIcon></IonCol></IonRow>
                <IonRow><IonCol>{trainingSchedule?.date}</IonCol></IonRow>
              </IonCol>

              <IonCol size="4">
                <IonRow id="tIcon"><IonCol><IonIcon size="large" icon={time}></IonIcon></IonCol></IonRow>
                <IonRow><IonCol>{trainingSchedule?.time}</IonCol></IonRow>
              </IonCol>

              <IonCol size="4">
                <IonRow id="tIcon"><IonCol> <IonIcon size="large" icon={flame}></IonIcon></IonCol></IonRow>
                <IonRow><IonCol>{trainingSchedule?.difficulty}</IonCol></IonRow>
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

    );
  };
  
  export default TrainingScheduleDetails;