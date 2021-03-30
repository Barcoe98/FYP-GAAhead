import React from "react";
import { IonContent, IonList, IonText, } from '@ionic/react';
import StatBar from "../../textComponents/statBar";

import './workoutRoutineDetails.css'

const WorkoutRoutineDetails = ({workoutRoutine}) => {
  return (
    <IonContent>
      <IonList id="wr-bg-color"> 
      <div id="wr-bg-img"></div>
        <h1 id="sectionTitle">{workoutRoutine?.title}</h1>

          <div id="sectionContent">
          <StatBar 
              timeVar={workoutRoutine?.time} 
              difficultyVar={workoutRoutine?.difficulty} 
              dateVar={workoutRoutine?.date}>
            </StatBar>

            <hr id="contentDivider"></hr>
            <h5 color="dark" id="sectionTitle">Stretches/Warm Up</h5>
            <IonText>{workoutRoutine?.warm_up}</IonText>

            <hr id="contentDivider"></hr>
            <h5 color="dark" id="sectionTitle">Exercises</h5>
            <IonText>{workoutRoutine?.exercises}</IonText>

            <hr id="contentDivider"></hr>
            <h5 color="dark" id="sectionTitle">Warm Down</h5>
            <IonText>{workoutRoutine?.warm_down}</IonText>
          </div>

        </IonList>
      </IonContent>
    );
  };
  
  export default WorkoutRoutineDetails;