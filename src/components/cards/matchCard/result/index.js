import React from "react";
import { IonCol, IonRow, IonGrid, IonCard, IonImg } from "@ionic/react";
import { formatDate, formatTime } from '../../../../contexts/formatContext'
import "./resultCard.css";

const ResultCard = ({ result }) => {
  return (
    <IonCard key={result.id} routerLink={("/manager/result/", result.id)}>
      <IonGrid color="secondary">
        <IonRow size="12" id="rDate">
          {formatDate(result.date)}
        </IonRow>

        <IonRow size="12">
          <IonCol size="3">
            <IonRow id="rLogo">
              <IonImg src={result.hTeamCrest}></IonImg>
            </IonRow>
            <IonRow id="rTeamName">{result.hTeam}</IonRow>
          </IonCol>

          <IonCol size="6">
            <IonRow size="4" id="rCompetition">
              {result.competition}
            </IonRow>
            <IonRow size="4" id="rScore">
              <IonCol size="5">{result.hGoals}:{result.hPoints}</IonCol>
              <IonCol size="2">-</IonCol>
              <IonCol size="5">{result.aGoals}:{result.aPoints}</IonCol>
            </IonRow>
            <IonRow size="4" id="rVenue">
              {result.venue}
            </IonRow>
          </IonCol>

          <IonCol size="3">
            <IonRow id="rLogo">
              <IonImg src={result.aTeamCrest}></IonImg>
            </IonRow>
            <IonRow id="rTeamName">{result.aTeam}</IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default ResultCard;
