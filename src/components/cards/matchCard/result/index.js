import React from "react";
import { IonIcon, IonCol, IonRow, IonGrid, IonCard, IonImg } from '@ionic/react';
import { flame, calendar, time } from "ionicons/icons";
import "../matchCard.css"


const MatchCard = ({match}) => {
  return (
    <IonCard key={match.id} routerLink={'/manager/match/', match.id}>
      <IonGrid>
        <IonRow size="12" id="mDate">
            {match.date}
        </IonRow>
        <IonRow size="12">
          <IonCol size="3">
            <IonRow id="mLogo">
              <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
            </IonRow>
            <IonRow id="mTeamName">
              {match.homeTeam}
            </IonRow>
          </IonCol>

          <IonCol size="6">
            <IonRow size="4" id="mCompetition">
              {match.competition}
            </IonRow>
            <IonRow size="4" id="mScore">
              <IonCol size="5">{match.homeScore}</IonCol>
              <IonCol size="2">-</IonCol>
              <IonCol size="5">{match.awayScore}</IonCol>
            </IonRow>
            <IonRow size="4" id="mVenue">
              {match.venue}
            </IonRow>
          </IonCol>

          <IonCol size="3">
            <IonRow id="mLogo">
              <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
            </IonRow>
            <IonRow id="mTeamName">
              {match.awayTeam}
            </IonRow>
          </IonCol>
        </IonRow>
        
      </IonGrid>
    </IonCard>
  );
};

export default MatchCard;