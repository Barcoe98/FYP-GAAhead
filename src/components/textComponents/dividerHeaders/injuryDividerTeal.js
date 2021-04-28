import React from "react";
import { IonRow, IonCol, IonLabel, IonItemDivider,   IonButtons,  IonButton,  IonIcon,} from "@ionic/react";
import { addOutline } from "ionicons/icons";

import './dividers.css'

const InjuryDividerTeal = ({ dividerLabel, href }) => {
  return (
    <IonRow>
      <IonCol size="10">
        <IonItemDivider id="header-divider-teal">
          <IonLabel>{dividerLabel}</IonLabel>
        </IonItemDivider>
      </IonCol>

      <IonCol size="2">
          <IonButton fill="clear" href={href}>
          <IonIcon slot="end" icon={addOutline} />
          </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default InjuryDividerTeal;
