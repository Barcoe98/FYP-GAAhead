import React from "react";
import { IonContent, IonList } from "@ionic/react";
import StatBar from "../../textComponents/statBar";
import { formatDate, formatTime } from '../../../contexts/formatContext'
import ItemDividerBlue from "../../textComponents/dividerHeaders/itemDividerBlue";

import "./workoutRoutineDetails.css";

const WorkoutRoutineDetails = ({ workoutRoutine }) => {
  return (
    <IonContent>
      <IonList id="bg-col">
        <div id="wr-bg-img"></div>
        <h1 id="sectionTitle">{workoutRoutine?.title}</h1>

        <div id="sectionContent">
          <StatBar
            timeVar={formatTime(workoutRoutine?.time)}
            difficultyVar={workoutRoutine?.difficulty}
            dateVar={formatDate(workoutRoutine?.date)}
          ></StatBar>

          <ItemDividerBlue dividerLabel="Warm Up"></ItemDividerBlue>
          <div id="contentTextTs">{workoutRoutine?.warmUp}</div>

          <ItemDividerBlue dividerLabel="Exercises"></ItemDividerBlue>
          <div id="contentTextTs">{workoutRoutine?.exercises}</div>

          <ItemDividerBlue dividerLabel="Warm Down"></ItemDividerBlue>
          <div id="contentTextTs">{workoutRoutine?.warmDown}</div>

        </div>
      </IonList>
    </IonContent>
  );
};

export default WorkoutRoutineDetails;
