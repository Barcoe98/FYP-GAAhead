import React from "react";
import { IonCol, IonRow, IonGrid, IonCard, IonImg } from '@ionic/react';
import "../matchCard.css"

const MatchCard = ({result}) => {
  return (
    <IonCard key={result.id} routerLink={'/manager/result/', result.id}>
      <IonGrid>
        <IonRow size="12" id="mDate">
            {result.date}
        </IonRow>
        <IonRow size="12">
          <IonCol size="3">
            <IonRow id="mLogo">
              <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
            </IonRow>
            <IonRow id="mTeamName">
              {result.homeTeam}
            </IonRow>
          </IonCol>

          <IonCol size="6">
            <IonRow size="4" id="mCompetition">
              {result.competition}
            </IonRow>
            <IonRow size="4" id="mScore">
              <IonCol size="5">{result.homeScore}</IonCol>
              <IonCol size="2">-</IonCol>
              <IonCol size="5">{result.awayScore}</IonCol>
            </IonRow>
            <IonRow size="4" id="mVenue">
              {result.venue}
            </IonRow>
          </IonCol>

          <IonCol size="3">
            <IonRow id="mLogo">
              <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
            </IonRow>
            <IonRow id="mTeamName">
              {result.awayTeam}
            </IonRow>
          </IonCol>
        </IonRow>
        
      </IonGrid>
    </IonCard>
  );
};

export default MatchCard;