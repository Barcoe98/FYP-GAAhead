import React from "react";
import { IonGrid, IonRow, IonCol,IonLabel, IonTextarea, IonItem, IonItemDivider } from '@ionic/react';

const ContentArea = ({lbl, txtAreaLbl, placeholderText}) => {
  return (
    <IonGrid>
        <IonRow>
        <IonCol>
          <IonItemDivider id="itm-divider-ylw">
            <IonLabel >{lbl}</IonLabel>
          </IonItemDivider>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonItem color="dark" id="rnd-input">
            <IonLabel position="stacked">{txtAreaLbl}</IonLabel>
            <IonTextarea placeholder={placeholderText} rows="5" type="text" required></IonTextarea>
          </IonItem>
        </IonCol>
      </IonRow>

  </IonGrid>

  );
};

export default ContentArea;