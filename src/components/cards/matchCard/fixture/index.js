import React from "react";
import { IonCol, IonRow, IonGrid, IonCard, IonImg } from "@ionic/react";
import "./fixtureCard.css";
import { formatDate, formatTime } from '../../../../contexts/formatContext'

const MatchCard = ({ fixture }) => {
  return (
    <IonCard key={fixture.id} routerLink={("/manager/fixture/", fixture.id)}>
      <IonGrid>
        <IonRow size="12" id="fDate">
          {formatDate(fixture.date)}
        </IonRow>
        <IonRow size="12">
          <IonCol size="4">
            <IonRow id="fLogo">
              <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
            </IonRow>
            <IonRow id="fTeamName">{fixture.homeTeam}</IonRow>
          </IonCol>

          <IonCol size="4">
            <IonRow size="4" id="fCompetition">
              {fixture.competition}
            </IonRow>
            <IonRow size="4" id="fTime">
              {formatTime(fixture.time)}
            </IonRow>
            <IonRow size="4" id="fVenue">
              {fixture.venue}
            </IonRow>
          </IonCol>

          <IonCol size="4">
            <IonRow id="fLogo">
              <IonImg src="https://res.cloudinary.com/dmikx06rt/image/upload/v1617222477/FYP-GAAhead/b_wCrest_d2vjke.jpg"></IonImg>
            </IonRow>
            <IonRow id="fTeamName">{fixture.awayTeam}</IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default MatchCard;
