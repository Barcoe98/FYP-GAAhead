import React from "react";
import { IonRow, IonCol,IonLabel, IonTextarea, IonItem } from '@ionic/react';
import './inputs.css'

const ContentArea = ({txtAreaLbl, placeholderText}) => {
  return (
      <IonRow>
        <IonCol>
          <IonItem id="rnd-input">
            <IonLabel position="stacked">{txtAreaLbl}</IonLabel>
            <IonTextarea placeholder={placeholderText} rows="5" type="text" required></IonTextarea>
          </IonItem>
        </IonCol>
      </IonRow>
  );
};

export default ContentArea;