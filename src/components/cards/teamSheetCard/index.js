import React from "react";
import { IonIcon, IonCol, IonRow, IonGrid, IonCard } from "@ionic/react";
import { calendar, time } from "ionicons/icons";
import "./teamSheetCard.css";

const TeamSheetCard = ({teamSheet}) => {
  return (
    <IonCard
      id="tsGridCards"
      key={teamSheet.id}
      routerLink={("/manager/team-sheet/", teamSheet.id)}>
      <IonGrid>
        <IonRow id="tsTitle">{teamSheet.title}</IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={calendar}></IonIcon>
          </IonCol>
          <IonCol id="tsDate" size="10">
            {teamSheet.date}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={time}></IonIcon>
          </IonCol>
          <IonCol id="tsTime" size="10">
            {teamSheet.opponent}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default TeamSheetCard;
