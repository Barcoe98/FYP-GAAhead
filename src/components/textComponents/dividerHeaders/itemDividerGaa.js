import React from "react";
import { IonRow, IonCol, IonLabel, IonItemDivider } from "@ionic/react";
import './dividers.css'

const ItemDividerGaa = ({ dividerLabel }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItemDivider id="header-divider-gaa">
          <IonLabel>{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>
    </IonRow>
  );
};

export default ItemDividerGaa;
