import React from "react";
import { IonContent, IonList, IonText } from "@ionic/react";
import StatCol from "../../../textComponents/matchStats/index";

import "../matchDetails.css";
import VersusBar from "../../../textComponents/matchStats/matchVersusBar";

const ResultDetailsPage = ({ result }) => {
  return (
    <IonContent>
      <IonList id="bg-col">
        <VersusBar
          homeTeam={result?.homeTeam}
          homeScore={result?.homeScore}
          awayScore={result?.awayScore}
          awayTeam={result?.awayTeam}
        ></VersusBar>

        <div id="sectionContent">
          <StatCol
            homeStat={result?.homeTeam}
            statTitle="Team Stats"
            awayStat={result?.awayTeam}
          ></StatCol>
          <StatCol
            homeStat={result?.homeBlocks}
            statTitle=" Blocks"
            awayStat={result?.awayBlocks}
          ></StatCol>
          <StatCol
            homeStat={result?.homeHooks}
            statTitle="Hooks"
            awayStat={result?.awayHooks}
          ></StatCol>
          <StatCol
            homeStat={result?.homeWides}
            statTitle="Wides"
            awayStat={result?.awayWides}
          ></StatCol>
          <StatCol
            homeStat={result?.homeShots}
            statTitle="Shots"
            awayStat={result?.awayShots}
          ></StatCol>
          <StatCol
            homeStat={result?.homePuckouts}
            statTitle="PuckOuts"
            awayStat={result?.awayPuckouts}
          ></StatCol>
          <StatCol
            homeStat={result?.homeFrees}
            statTitle="Free's"
            awayStat={result?.awayFrees}
          ></StatCol>
          <StatCol
            homeStat={result?.home65s}
            statTitle="65'S"
            awayStat={result?.away65s}
          ></StatCol>
          <StatCol
            homeStat={result?.homePenalties}
            statTitle="Penalties"
            awayStat={result?.awayPenalties}
          ></StatCol>
          <StatCol
            homeStat={result?.homeFouls}
            statTitle="Fouls"
            awayStat={result?.awayFouls}
          ></StatCol>
          <StatCol
            homeStat={result?.homeYCard}
            statTitle="Yellow Cards"
            awayStat={result?.awayYCard}
          ></StatCol>
          <StatCol
            homeStat={result?.homeRCard}
            statTitle="Red Cards"
            awayStat={result?.awayRCard}
          ></StatCol>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="sectionTitle">
            Match Notes
          </h5>
          <IonText>{result?.notes}</IonText>
        </div>
      </IonList>
    </IonContent>
  );
};

export default ResultDetailsPage;
