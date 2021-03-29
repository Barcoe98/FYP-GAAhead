import React from "react";
import { IonRow, IonCol, IonText } from '@ionic/react';
import './stat.css'

const Stat = ({size,statTitle, stat}) => {
  return (
      <IonCol size={size}>
      <div id="myStat">
        <IonRow id="myStatVar">
          <IonText>{stat}</IonText>
        </IonRow>
        <IonRow id="myStatTitle">
          <IonText>{statTitle}</IonText>
        </IonRow>
      </div>
    </IonCol>
  );
};

export default Stat;