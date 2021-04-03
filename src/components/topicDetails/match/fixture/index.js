import React from "react";
import { IonContent, IonList } from "@ionic/react";
import VersusBar from "../../../textComponents/matchStats/matchVersusBar";

import "../matchDetails.css";

const FixtureDetailsPage = ({ fixture }) => {
  return (
    <IonContent>
      <IonList id="bg-color">
        <VersusBar
          homeTeam={fixture?.homeTeam}
          homeScore={fixture?.homeScore}
          awayScore={fixture?.awayScore}
          awayTeam={fixture?.awayTeam}
        ></VersusBar>
      </IonList>
    </IonContent>
  );
};

export default FixtureDetailsPage;
