import React from "react";
import { IonContent, IonList, IonText } from "@ionic/react";
import LinkButton from "../../buttons/linkButton/index";
import StatBar from "../../textComponents/statBar";
import { formatDate, formatTime } from '../../../contexts/formatContext'
import ItemDividerGrn from "../../textComponents/dividerHeaders/itemDividerGrn";

import "./fitnessTestDetails.css";

const FitnessTestDetails = ({ fitnessTest }) => {
  return (
    <IonContent>
      <IonList id="ft-bg-color">
        <div id="ft-bg-img"></div>
        <h1 id="sectionTitle">{fitnessTest?.title}</h1>

        <div id="sectionContent">
          <StatBar
            timeVar={formatTime(fitnessTest?.time)}
            difficultyVar={fitnessTest?.difficulty}
            dateVar={formatDate(fitnessTest?.date)}
          ></StatBar>

          <ItemDividerGrn dividerLabel="Warm Up"></ItemDividerGrn>
          <div id="contentText">{fitnessTest?.warmUp}</div>

          <ItemDividerGrn dividerLabel="Exercises"></ItemDividerGrn>
          <div id="contentText">{fitnessTest?.exercises}</div>

          <ItemDividerGrn dividerLabel="Warm Down"></ItemDividerGrn>
          <div id="contentText">{fitnessTest?.warmDown}</div>
        </div>

        <LinkButton
          href={'/player/fitness/test/add-results/' + fitnessTest?.id }
          btnName="Enter Results"
        ></LinkButton>
      </IonList>
    </IonContent>
  );
};

export default FitnessTestDetails;
