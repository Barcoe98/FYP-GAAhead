import React from "react";
import { IonRow, IonCol, IonGrid } from "@ionic/react";

import "./matchStats.css";

const StatCol = ({ homeStat, awayStat, statTitle }) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="2">
          <IonRow id="centerStat">{homeStat}</IonRow>
        </IonCol>

        <IonCol size="8">
          <IonRow id="centerStat">{statTitle}</IonRow>
        </IonCol>

        <IonCol size="2">
          <IonRow id="centerStat">{awayStat}</IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default StatCol;
