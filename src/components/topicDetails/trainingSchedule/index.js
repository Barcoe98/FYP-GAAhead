import React from "react";
import { IonContent, IonList, IonText } from "@ionic/react";
import StatBar from "../../textComponents/statBar";
import { formatDate, formatTime } from '../../../contexts/formatContext'
import ItemDividerTeal from "../../textComponents/dividerHeaders/itemDividerTeal";


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

          <ItemDividerTeal dividerLabel="Warm Up"></ItemDividerTeal>
          <div id="contentTextTs">{trainingSchedule?.warmUp}</div>

          <ItemDividerTeal dividerLabel="Exercises"></ItemDividerTeal>
          <div id="contentTextTs">{trainingSchedule?.exercises}</div>

          <ItemDividerTeal dividerLabel="Warm Down"></ItemDividerTeal>
          <div id="contentTextTs">{trainingSchedule?.warmDown}</div>

        </div>
      </IonList>
    </IonContent>
  );
};

export default TrainingScheduleDetails;
