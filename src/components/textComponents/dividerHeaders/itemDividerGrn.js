import React from "react";
import { IonRow, IonCol, IonLabel, IonItemDivider } from "@ionic/react";
import './dividers.css'

const ItemDividerGrn = ({ dividerLabel }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItemDivider id="header-divider-grn">
          <IonLabel>{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>
    </IonRow>
  );
};

export default ItemDividerGrn;
