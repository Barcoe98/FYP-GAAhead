import React from "react";
import { IonContent, IonRow, IonCol, IonList, IonText } from "@ionic/react";
import VersusBar from "../../../textComponents/matchStats/matchVersusBar";
import StatCol from "../../../textComponents/matchStats/statCol";
import { formatDate, formatTime } from '../../../../contexts/formatContext'
import StatContent from "../../../textComponents/statContent";
import ItemDividerPrpl from "../../../textComponents/dividerHeaders/itemDividerPurple";

import "../matchDetails.css";

const ResultDetailsPage = ({ result }) => {
  return (
    <IonContent>
      <IonList id="bg-col">
        <VersusBar
          competition={result?.competition}
          hTeam={result?.hTeam}
          hGoals={result?.hGoals}
          hPoints={result?.hPoints}
          aGoals={result?.aGoals}
          aPoints={result?.aPoints}
          aTeam={result?.aTeam}
          hTeamCrest={result?.hTeamCrest}
          aTeamCrest={result?.aTeamCrest}>
        </VersusBar>

        <div id="sectionContent">      
        <ItemDividerPrpl dividerLabel="Fixture Details"></ItemDividerPrpl>

          <StatContent 
            statTitle="Date" 
            statValue={formatDate(result?.date)}>
          </StatContent>
          <StatContent 
            statTitle="Time" 
            statValue={formatTime(result?.time)}>
          </StatContent>
          <StatContent 
            statTitle="Venue" 
            statValue={result?.venue}>
          </StatContent>

          <IonRow size="3" id="vsBarHeader">
          <IonCol size="6">Match Statistics</IonCol>
        </IonRow>
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

          <IonRow size="3" id="vsBarHeader"><IonCol size="6">Match Notes</IonCol></IonRow>
          <IonText>{result?.notes}</IonText>
        </div>
      </IonList>
    </IonContent>
  );
};

export default ResultDetailsPage;
