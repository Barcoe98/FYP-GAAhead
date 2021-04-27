import React from "react";
import { IonRow, IonGrid, IonCard } from "@ionic/react";
import { formatYear } from '../../../contexts/formatContext'

import "./teamStatsCard.css";

const TeamStatsCard = ({teamStats}) => {
  return (
  <IonCard
      id="tStatsGridCards"
      key={teamStats.id}
      routerLink={("/manager/team-stats/more/", teamStats.id)}>
    <IonGrid>
      <IonRow id="tStatsYear">{formatYear(teamStats.year)}</IonRow>
    </IonGrid>
  </IonCard>
  );
};

export default TeamStatsCard;
