import React from "react";
import { IonContent, IonList } from "@ionic/react";
import FixtureVersusBar from "../../../textComponents/fixture/fixtureVersusBar";
import { formatDate, formatTime } from '../../../../contexts/formatContext'
import StatContent from "../../../textComponents/statContent";
import ItemDividerGaa from "../../../textComponents/dividerHeaders/itemDividerGaa";

import "../matchDetails.css";

const FixtureDetailsPage = ({ fixture }) => {
  return (
    <IonContent>
      <IonList id="bg-col">

      <ItemDividerGaa dividerLabel="Fixture Details"></ItemDividerGaa>

        <FixtureVersusBar
          hTeam={fixture?.hTeam}
          aTeam={fixture?.aTeam}
          hCrest={fixture?.hTeamCrest}
          aCrest={fixture?.aTeamCrest}
        ></FixtureVersusBar>

        <div id="sectionContent">
       

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
        <StatContent 
          statTitle="Panel" 
          statValue={fixture?.panel}>
        </StatContent>

        </div>
      </IonList>
    </IonContent>
  );
};

export default FixtureDetailsPage;
