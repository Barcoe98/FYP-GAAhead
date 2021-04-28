import React from "react";
import { IonRow, IonCol, IonLabel, IonItemDivider } from "@ionic/react";

const ItemDividerGaa = ({ dividerLabel }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItemDivider id="itm-divider-gaa">
          <IonLabel>{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>
    </IonRow>
  );
};

export default ItemDividerGaa;
