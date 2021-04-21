import React from "react";
import { IonIcon, IonCol, IonRow, IonGrid, IonCard } from "@ionic/react";
import { calendar, time } from "ionicons/icons";
import "./teamSheetCard.css";

const TeamSheetCard = ({teamSheet}) => {
  return (
    <IonCard
      id="teamGridCards"
      key={teamSheet.id}
      routerLink={("/manager/team-sheet/", teamSheet.id)}>
      <IonGrid>
        <IonRow id="teamTitle">{teamSheet.title}</IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={calendar}></IonIcon>
          </IonCol>
          <IonCol id="teamDate" size="10">
            {teamSheet.date}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={time}></IonIcon>
          </IonCol>
          <IonCol id="teamTime" size="10">
            {teamSheet.opponent}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default TeamSheetCard;
