import React from "react";
import { IonRow, IonCol, IonLabel, IonItemDivider } from "@ionic/react";

const ItemDividerPurple = ({ dividerLabel }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItemDivider id="itm-divider-prpl">
          <IonLabel>{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>
    </IonRow>
  );
};

export default ItemDividerPurple;
