import React from "react";
import { IonRow, IonCol, IonText, IonGrid} from '@ionic/react';
import './stat.css'

const TeamStatContent = ({
  statTitle, teamStatValue, 
  playerName1, playerName2, playerName3, 
  playerVar1, playerVar2, playerVar3 }) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol id="header" size="6">Team</IonCol>
        <IonCol id="header" size="6">Top Players</IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="4">
          <IonText>{statTitle}</IonText>
        </IonCol>
        <IonCol size="2">
          <IonText>{teamStatValue}</IonText>
        </IonCol>

        <IonCol size="6">
          <IonRow>
            <IonCol id="statContentText" size="2">
              <IonText>1:</IonText>
            </IonCol>
            <IonCol size="8">
              <IonText>{playerName1}</IonText>
            </IonCol>
            <IonCol size="2">
              <IonText>{playerVar1}</IonText>
            </IonCol>
          </IonRow>
        
          <IonRow>
            <IonCol size="2">
              <IonText>2:</IonText>
            </IonCol>
            <IonCol size="8">
              <IonText>{playerName2}</IonText>
            </IonCol>
            <IonCol size="2">
              <IonText>{playerVar2}</IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="2">
              <IonText>3:</IonText>
            </IonCol>
            <IonCol size="8">
              <IonText>{playerName3}</IonText>
            </IonCol>
            <IonCol size="2">
              <IonText>{playerVar3}</IonText>
            </IonCol>
          </IonRow>

        </IonCol>
      </IonRow>
      </IonGrid>
  );
};

export default TeamStatContent;