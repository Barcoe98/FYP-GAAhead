import React from "react";
import { IonRow, IonCol, IonText } from "@ionic/react";
import "./stat.css";

const StatContent = ({ titleColSize, valueColSize, statTitle, statValue }) => {
  return (
    <IonRow id="myStatTitle">
      <IonCol size={titleColSize}>
        <IonText color="light" id="statTitle">
          {statTitle}
        </IonText>
      </IonCol>
      <IonCol size={valueColSize}>
        <IonText color="light" id="statValue">
          {statValue}
        </IonText>
      </IonCol>
    </IonRow>
  );
};

export default StatContent;
