import React from "react";
import { IonContent, IonList } from '@ionic/react';

import '../matchDetails.css'
import VersusBar from "../../../textComponents/matchStats/matchVersusBar";

const FixtureDetailsPage = ({result}) => {
  return (
  <IonContent>
    <IonList id="m-bg-color"> 
      <VersusBar homeTeam={result?.homeTeam} homeScore={result?.homeScore} awayScore={result?.awayScore} awayTeam={result?.awayTeam}></VersusBar>
    </IonList>
  </IonContent>
    );
  };
  
  export default FixtureDetailsPage;