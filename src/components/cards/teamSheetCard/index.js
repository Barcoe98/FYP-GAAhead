import React from "react";
import { IonIcon, IonCol, IonRow, IonGrid, IonCard } from "@ionic/react";
import { calendar } from "ionicons/icons";
import "./teamSheetCard.css";
import { formatDate } from "../../../contexts/formatContext";

const TeamSheetCard = ({teamSheet}) => {
  return (
    <IonCard
      id="tsGridCards"
      key={teamSheet.id}
      routerLink={("/manager/team-sheet/", teamSheet.id)}>
      <IonGrid>
        <IonRow id="tsTitle">{teamSheet.opponent}</IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={calendar}></IonIcon>
          </IonCol>
          <IonCol id="tsDate" size="10">
            {formatDate(teamSheet.date)}
          </IonCol>
        </IonRow> 
      </IonGrid>
    </IonCard>
  );
};

export default TeamSheetCard;
