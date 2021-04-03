import React from "react";
import { IonIcon, IonCol, IonRow, IonGrid, IonCard } from "@ionic/react";
import { flame, calendar, time } from "ionicons/icons";
import "./trainingScheduleCard.css";

const FitnessTestCard = ({ tSchedule }) => {
  return (
    <IonCard
      id="tsGridCards"
      key={tSchedule.id}
      routerLink={("/manager/planner/trainingschedule/", tSchedule.id)}
    >
      <IonGrid>
        <IonRow>{tSchedule.title}</IonRow>
        <IonRow>
          <IonCol size="1">
            <IonIcon icon={calendar}></IonIcon>
          </IonCol>
          <IonCol id="tsDate" size="11">
            {tSchedule.date}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="1">
            <IonIcon icon={time}></IonIcon>
          </IonCol>
          <IonCol id="tsTime" size="11">
            {tSchedule.time}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="1">
            <IonIcon icon={flame}></IonIcon>
          </IonCol>
          <IonCol id="tsDifficulty" size="11">
            {tSchedule.difficulty}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default FitnessTestCard;
