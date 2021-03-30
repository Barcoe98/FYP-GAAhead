import React from "react";
import { IonContent, IonRow, IonCol, IonGrid, IonList, IonText, IonIcon} from '@ionic/react';
import { flame, time, calendar } from 'ionicons/icons';
import './trainingScheduleDetails.css'
import StatBar from "../../textComponents/statBar";


const TrainingScheduleDetails = ({trainingSchedule}) => {

  return (
  <IonContent>
    <IonList id="ts-bg-color"> 
    <div id="ts-bg-img"></div>
      <h1 id="sectionTitle">{trainingSchedule?.title}</h1>

        <div id="sectionContent">
         <StatBar 
            timeVar={trainingSchedule?.time} 
            difficultyVar={trainingSchedule?.difficulty} 
            dateVar={trainingSchedule?.date}>
          </StatBar>

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