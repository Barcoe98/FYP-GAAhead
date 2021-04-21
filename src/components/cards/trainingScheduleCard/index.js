import React from "react";
import { IonIcon, IonCol, IonRow, IonGrid, IonCard } from "@ionic/react";
import { flame, calendar, time } from "ionicons/icons";
import "./trainingScheduleCard.css";

const TrainingScheduleCard = ({ tSchedule }) => {
  return (
    <IonCard
      id="tsGridCards"
      key={tSchedule.id}
      routerLink={("/manager/trainingschedule/", tSchedule.id)}
    >
      <IonGrid>
        <IonRow id="tsTitle">{tSchedule.title}</IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={calendar}></IonIcon>
          </IonCol>
          <IonCol id="tsDate" size="10">
            {tSchedule.date}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={time}></IonIcon>
          </IonCol>
          <IonCol id="tsTime" size="10">
            {tSchedule.time}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={flame}></IonIcon>
          </IonCol>
          <IonCol id="tsDifficulty" size="10">
            {tSchedule.difficulty}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default TrainingScheduleCard;
