import React, { useState } from "react";
import { IonContent, IonGrid, IonCol, IonList, IonRow } from "@ionic/react";
import TeamStatContent from "../../textComponents/teamStats/teamStatContent";

import "./teamStats.css";

const TeamStats = ({ teamStats }) => {

  return (
    <IonContent>
      <IonList id="bg-col">
        <h1 id="statTitle">Team Statistics</h1>

        <div id="statContent">

          <IonGrid>
            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Points</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.points}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Goals</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.goals}</h5></IonCol>
            </IonRow>
          
          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Shots</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.shots}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Puckouts</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.puckouts}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Wides</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.wides}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Hooks</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.hooks}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Blocks</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.blocks}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Free's</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.frees}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">65's</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.free65s}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Penalties</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.penalties}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Fouls</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.fouls}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Yellow Cards</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.yCards}</h5></IonCol>
            </IonRow>

          <hr id="contentDivider"></hr>

            <IonRow>
              <IonCol size="6"><h5 color="dark" id="statTitle">Red Cards</h5></IonCol>
              <IonCol size="6"><h5 color="dark" id="statTitle">{teamStats?.rCards}</h5></IonCol>
            </IonRow>

          </IonGrid>
        

        </div>
      </IonList>
    </IonContent>
  );
};

export default TeamStats;
