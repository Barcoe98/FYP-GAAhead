import React from "react";
import { IonRow, IonCol, IonLabel, IonItemDivider } from "@ionic/react";
import './dividers.css'

const ItemDividerTeal = ({ dividerLabel }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItemDivider id="header-divider-teal">
          <IonLabel>{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>
    </IonRow>
  );
};

export default ItemDividerTeal;
