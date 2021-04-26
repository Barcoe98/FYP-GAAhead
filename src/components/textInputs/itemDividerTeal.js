import React from "react";
import { IonRow, IonCol, IonLabel, IonItemDivider } from "@ionic/react";

const ItemDividerTeal = ({ dividerLabel }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItemDivider id="itm-divider-teal">
          <IonLabel>{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>
    </IonRow>
  );
};

export default ItemDividerTeal;
