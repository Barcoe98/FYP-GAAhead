import React from "react";
import { IonRow, IonCol,IonLabel, IonItemDivider } from '@ionic/react';
import './inputs.css'

const ItemDivider = ({dividerLabel}) => {
  return (
    <IonRow>
      <IonCol>
        <IonItemDivider id="itm-divider-ylw">
          <IonLabel >{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>
    </IonRow>
  );
};

export default ItemDivider;