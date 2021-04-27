import React from "react";
import { IonContent, IonList } from "@ionic/react";
import FixtureVersusBar from "../../../textComponents/fixture/fixtureVersusBar";
import { formatDate, formatTime } from '../../../../contexts/formatContext'
import StatContent from "../../../textComponents/statContent";

import "../matchDetails.css";

const FixtureDetailsPage = ({ fixture }) => {
  return (
    <IonContent>
      <IonList id="bg-col">
        <FixtureVersusBar
          hTeam={fixture?.hTeam}
          aTeam={fixture?.aTeam}
        ></FixtureVersusBar>

        <div id="sectionContent">
        <h5 color="dark" id="sectionTitle">Fixture Details</h5>

        <StatContent 
          statTitle="Date" 
          statValue={formatDate(fixture?.date)}>
        </StatContent>
        <StatContent 
          statTitle="Time" 
          statValue={formatTime(fixture?.time)}>
        </StatContent>
        <StatContent 
          statTitle="Competition" 
          statValue={fixture?.competition}>
        </StatContent>
        <StatContent 
          statTitle="Venue" 
          statValue={fixture?.venue}>
        </StatContent>

        </div>
      </IonList>
    </IonContent>
  );
};

export default FixtureDetailsPage;
