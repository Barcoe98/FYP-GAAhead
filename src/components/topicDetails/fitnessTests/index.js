import React from "react";
import { IonContent, IonList, IonText } from "@ionic/react";
import LinkButton from "../../buttons/linkButton/index";
import StatBar from "../../textComponents/statBar";
import { formatDate, formatTime } from '../../../contexts/formatContext'

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

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="sectionTitle">
            Warm Up
          </h5>
          <IonText id="contentText">{fitnessTest?.warmUp}</IonText>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="sectionTitle">
            Exercises
          </h5>
          <IonText id="contentText">{fitnessTest?.exercises}</IonText>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="sectionTitle">
            Warm Down
          </h5>
          <IonText id="contentText">{fitnessTest?.warmDown}</IonText>
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
