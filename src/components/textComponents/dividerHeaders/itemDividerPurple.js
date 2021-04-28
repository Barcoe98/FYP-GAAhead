import React from "react";
import { IonRow, IonCol, IonLabel, IonItemDivider } from "@ionic/react";
import './dividers.css'

const ItemDividerPurple = ({ dividerLabel }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItemDivider id="header-divider-prpl">
          <IonLabel>{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>
    </IonRow>
  );
};

export default ItemDividerPurple;
