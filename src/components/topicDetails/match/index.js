import React from "react";
import { IonContent, IonList, IonText, IonCol, IonRow, IonGrid, IonImg} from '@ionic/react';
import StatCol from "../../textComponents/matchStats/index";

import './matchDetails.css'
import VersusBar from "../../textComponents/matchStats/matchVersusBar";

const MatchDetailsPage = ({match}) => {
  return (
  <IonContent>
    <IonList id="m-bg-color"> 
      <VersusBar homeTeam={match?.homeTeam} awayTeam={match?.awayTeam}></VersusBar>
      
      <div id="sectionContent">
        <StatCol homeStat={match?.homeTeam} statTitle="Team Stats" awayStat={match?.awayTeam}></StatCol>
        <StatCol homeStat={match?.homeBlocks} statTitle=" Blocks" awayStat={match?.awayBlocks}></StatCol>
        <StatCol homeStat={match?.homeHooks} statTitle="Hooks" awayStat={match?.awayHooks}></StatCol>
        <StatCol homeStat={match?.homeWides} statTitle="Wides" awayStat={match?.awayWides}></StatCol>
        <StatCol homeStat={match?.homeShots} statTitle="Shots" awayStat={match?.awayShots}></StatCol>
        <StatCol homeStat={match?.homePuckouts} statTitle="PuckOuts" awayStat={match?.awayPuckouts}></StatCol>
        <StatCol homeStat={match?.homeFrees} statTitle="Free's" awayStat={match?.awayFrees}></StatCol>
        <StatCol homeStat={match?.home65s} statTitle="65'S" awayStat={match?.away65s}></StatCol>
        <StatCol homeStat={match?.homePenalties} statTitle="Penalties" awayStat={match?.awayPenanlties}></StatCol>
        <StatCol homeStat={match?.homeFouls} statTitle="Fouls" awayStat={match?.awayFouls}></StatCol>
        <StatCol homeStat={match?.homeYCard} statTitle="Yellow Cards" awayStat={match?.awayYCard}></StatCol>
        <StatCol homeStat={match?.homeRCard} statTitle="Red Cards" awayStat={match?.awayRcard}></StatCol>

        <hr id="contentDivider"></hr>
        <h5 color="dark" id="sectionTitle">Match Summary</h5>
        <IonText>{match?.exercises}</IonText>

        <hr id="contentDivider"></hr>
        <h5 color="dark" id="sectionTitle">Notes</h5>
        <IonText>{match?.warm_down}</IonText>
      </div>

      </IonList>
    </IonContent>
    );
  };
  
  export default MatchDetailsPage;