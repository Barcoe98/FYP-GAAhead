import React from "react";
import { IonRow, IonCol, IonLabel, IonItemDivider,   IonButtons,  IonButton,  IonIcon,} from "@ionic/react";
import { addOutline } from "ionicons/icons";

import './dividers.css'

const InjuryDividerTeal = ({ dividerLabel }) => {
  return (
    <IonRow>
     
      <IonCol size="12">
        <IonItemDivider id="header-divider-teal">
          <IonLabel>{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>

     
    </IonRow>
  );
};

export default InjuryDividerTeal;
