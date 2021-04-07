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
          hTeam={result?.hTeam}
          hGoals={result?.hGoals}
          hPoints={result?.hPoints}
          aGoals={result?.aGoals}
          aPoints={result?.aPoints}
          aTeam={result?.aTeam}
        ></VersusBar>

        <div id="sectionContent">
          <h5 color="dark" id="sectionTitle">Match Stats</h5>
          <StatCol
            homeStat={result?.hTeam}
            statTitle=""
            awayStat={result?.aTeam}
          ></StatCol>
          <StatCol
            homeStat={result?.hBlocks}
            statTitle=" Blocks"
            awayStat={result?.aBlocks}
          ></StatCol>
          <StatCol
            homeStat={result?.hHooks}
            statTitle="Hooks"
            awayStat={result?.aHooks}
          ></StatCol>
          <StatCol
            homeStat={result?.hWides}
            statTitle="Wides"
            awayStat={result?.aWides}
          ></StatCol>
          <StatCol
            homeStat={result?.hShots}
            statTitle="Shots"
            awayStat={result?.aShots}
          ></StatCol>
          <StatCol
            homeStat={result?.hPuckouts}
            statTitle="PuckOuts"
            awayStat={result?.aPuckouts}
          ></StatCol>
          <StatCol
            homeStat={result?.hFrees}
            statTitle="Free's"
            awayStat={result?.aFrees}
          ></StatCol>
          <StatCol
            homeStat={result?.h65s}
            statTitle="65'S"
            awayStat={result?.a65s}
          ></StatCol>
          <StatCol
            homeStat={result?.hPenalties}
            statTitle="Penalties"
            awayStat={result?.aPenalties}
          ></StatCol>
          <StatCol
            homeStat={result?.hFouls}
            statTitle="Fouls"
            awayStat={result?.aFouls}
          ></StatCol>
          <StatCol
            homeStat={result?.hYCard}
            statTitle="Yellow Cards"
            awayStat={result?.aYCard}
          ></StatCol>
          <StatCol
            homeStat={result?.hRCard}
            statTitle="Red Cards"
            awayStat={result?.aRCard}
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
