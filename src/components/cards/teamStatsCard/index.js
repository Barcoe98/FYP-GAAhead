import React from "react";
import { IonIcon, IonCol, IonRow, IonGrid, IonCard } from "@ionic/react";
import { calendar, time } from "ionicons/icons";
import "./teamSheetCard.css";

const TeamStatsCard = ({teamStats}) => {
  return (
    <IonCard
      id="tstatsGridCards"
      key={teamStats.id}
      routerLink={("/manager/team-stats/", teamStats.id)}>
      <IonGrid>
        <IonRow id="tStatsYear">{teamStats.year}</IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={time}></IonIcon>
          </IonCol>
          <IonCol id="tStatsGames" size="10">
            {teamStats.games}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default TeamStatsCard;
