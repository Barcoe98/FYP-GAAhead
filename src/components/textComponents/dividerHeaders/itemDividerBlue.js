import React from "react";
import { IonRow, IonCol, IonLabel, IonItemDivider } from "@ionic/react";
import './dividers.css'

const ItemDividerBlue = ({ dividerLabel }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItemDivider id="header-divider-blue">
          <IonLabel>{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>
    </IonRow>
  );
};

export default ItemDividerBlue;
