import React from "react";
import { IonCol, IonRow, IonGrid, IonCard, IonImg } from '@ionic/react';
import "../matchCard.css"


const MatchCard = ({fixture}) => {
  return (
    <IonCard key={fixture.id} routerLink={'/manager/fixture/', fixture.id}>
      <IonGrid>
        <IonRow size="12" id="mDate">
            {fixture.date}
        </IonRow>
        <IonRow size="12">
          <IonCol size="4">
            <IonRow id="mLogo">
              <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
            </IonRow>
            <IonRow id="mTeamName">
              {fixture.homeTeam}
            </IonRow>
          </IonCol>

          <IonCol size="4">
            <IonRow size="4" id="mCompetition">
              {fixture.competition}
            </IonRow>
            <IonRow size="4" id="mTime">
              {fixture.time}
            </IonRow>
            <IonRow size="4" id="mVenue">
              {fixture.venue}
            </IonRow>
          </IonCol>

          <IonCol size="4">
            <IonRow id="mLogo">
              <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
            </IonRow>
            <IonRow id="mTeamName">
              {fixture.awayTeam}
            </IonRow>
          </IonCol>
        </IonRow>
        
      </IonGrid>
    </IonCard>
  );
};

export default MatchCard;