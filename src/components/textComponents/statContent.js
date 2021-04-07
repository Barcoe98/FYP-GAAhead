import React from "react";
import { IonRow, IonCol, IonText } from "@ionic/react";
import "./stat.css";

const StatContent = ({ statTitle, statValue }) => {
  return (
    <IonRow id="myStatTitle">
      <IonCol size="9">
        <IonText color="light" id="statTitle">
          {statTitle}
        </IonText>
      </IonCol>
      <IonCol size="3">
        <IonText color="light" id="statValue">
          {statValue}
        </IonText>
      </IonCol>
    </IonRow>
  );
};

export default StatContent;
