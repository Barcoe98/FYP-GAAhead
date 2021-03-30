import React from "react";
import { IonContent, IonRow, IonCol, IonGrid, IonList, IonText, IonIcon} from '@ionic/react';
import { flame, time, calendar } from 'ionicons/icons';
import LinkButton from '../../buttons/linkButton/index'

import './fitnessTestDetails.css'
import StatBar from "../../textComponents/statBar";

const FitnessTestDetails = ({fitnessTest}) => {

  return (
    <IonContent>
      <IonList id="ft-bg-color"> 
      <div id="ft-bg-img"></div>
        <h1 id="sectionTitle">{fitnessTest?.title}</h1>

          <div id="sectionContent">
            <StatBar 
              timeVar={fitnessTest?.time} 
              difficultyVar={fitnessTest?.difficulty} 
              dateVar={fitnessTest?.date}>
            </StatBar>

            <hr id="contentDivider"></hr>
            <h5 color="dark" id="sectionTitle">Stretches/Warm Up</h5>
            <IonText>{fitnessTest?.warm_up}</IonText>

            <hr id="contentDivider"></hr>
            <h5 color="dark" id="sectionTitle">Exercises</h5>
            <IonText>{fitnessTest?.exercises}</IonText>

            <hr id="contentDivider"></hr>
            <h5 color="dark" id="sectionTitle">Warm Down</h5>
            <IonText>{fitnessTest?.warm_down}</IonText>
          </div>

          <LinkButton href="/player/fitness/test/add-results" btnName="Enter Results"></LinkButton>
        </IonList>
    </IonContent>

  );
};

export default FitnessTestDetails;