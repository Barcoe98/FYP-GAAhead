import React from "react";
import { IonContent, IonGrid, IonCol, IonList, IonRow, IonText } from "@ionic/react";
import ItemDividerRed from "../../textComponents/dividerHeaders/itemDividerRed";

import "./teamStats.css";

const TeamStats = ({ teamStats }) => {

  return (
    <IonContent>
      <IonList id="bg-col">
        <div id="statContent">
        <ItemDividerRed dividerLabel="Team Statistics"></ItemDividerRed>

          <IonGrid>
            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Games Played</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.games}</IonText></IonCol>
            </IonRow>

            <IonRow>
                <IonCol size="10"><IonText color="dark" id="statTitle">Points</IonText></IonCol>
                <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.points}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Goals</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.goals}</IonText></IonCol>
            </IonRow>
          
            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Shots</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.shots}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Puckouts</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.puckouts}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Wides</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.wides}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Hooks</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.hooks}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Blocks</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.blocks}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Free's</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.frees}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">65's</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.free65s}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Penalties</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.penalties}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Fouls</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.fouls}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Yellow Cards</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.yCards}</IonText></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="10"><IonText color="dark" id="statTitle">Red Cards</IonText></IonCol>
              <IonCol size="2"><IonText color="dark" id="statTitle">{teamStats?.rCards}</IonText></IonCol>
            </IonRow>
          </IonGrid>
      
        </div>
      </IonList>
    </IonContent>
  );
};

export default TeamStats;
