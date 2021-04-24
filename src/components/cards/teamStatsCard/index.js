import React from "react";
import { IonRow, IonGrid, IonCard } from "@ionic/react";
import "./teamStatsCard.css";

const TeamStatsCard = ({teamStats}) => {
  return (
  <IonCard
      id="tStatsGridCards"
      key={teamStats.id}
      routerLink={("/manager/team-stats/more/", teamStats.id)}>
    <IonGrid>
      <IonRow id="tStatsYear">{teamStats.year}</IonRow>
    </IonGrid>
  </IonCard>
  );
};

export default TeamStatsCard;
