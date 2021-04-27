import React from "react";
import { IonContent, IonList, IonText } from "@ionic/react";
import StatBar from "../../textComponents/statBar";
import { formatDate, formatTime } from '../../../../contexts/formatContext'


import "./trainingScheduleDetails.css";

const TrainingScheduleDetails = ({ trainingSchedule }) => {
  return (
    <IonContent>
      <IonList id="bg-col">
        <div id="ts-bg-img"></div>
        <h1 id="sectionTitle">{trainingSchedule?.title}</h1>

        <div id="sectionContent">
          <StatBar
            timeVar={formatTime(trainingSchedule?.time)}
            difficultyVar={trainingSchedule?.difficulty}
            dateVar={formatDate(trainingSchedule?.date)}
          ></StatBar>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="sectionTitle">
            Warm Up
          </h5>
          <IonText>{trainingSchedule?.warmUp}</IonText>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="sectionTitle">
            Exercises
          </h5>
          <IonText>{trainingSchedule?.exercises}</IonText>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="sectionTitle">
            Warm Down
          </h5>
          <IonText>{trainingSchedule?.warmDown}</IonText>
        </div>
      </IonList>
    </IonContent>
  );
};

export default TrainingScheduleDetails;
