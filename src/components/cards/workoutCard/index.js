import React from "react";
import { IonIcon, IonCol, IonRow, IonGrid, IonCard } from "@ionic/react";
import { flame, calendar, time } from "ionicons/icons";
import { formatDate, formatTime } from '../../../contexts/formatContext'

import "./workoutCard.css";

const WorkoutCard = ({ workout }) => {
  return (
    <IonCard
      id="wGridCards"
      key={workout.id}
      routerLink={("/manager/workout/", workout.id)}
    >
      <IonGrid>
        <IonRow id="wTitle">{workout.title}</IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={calendar}></IonIcon>
          </IonCol>
          <IonCol id="wDate" size="10">
            {formatDate(workout.date)}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={time}></IonIcon>
          </IonCol>
          <IonCol id="wTime" size="10">
            {formatTime(workout.time)}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="2">
            <IonIcon icon={flame}></IonIcon>
          </IonCol>
          <IonCol id="wDifficulty" size="10">
            {workout.difficulty}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default WorkoutCard;
