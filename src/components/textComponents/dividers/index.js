import React from "react";
import { IonRow, IonCol, IonGrid, IonText, IonItemDivider } from "@ionic/react";
import "./dividers.css";

const ContentDivider = ({ dividerLabel }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItemDivider color="light" id="content-divider-teal">
          <IonGrid>
            <IonRow>
              <IonCol size="10">
                <IonText>Player Name</IonText>
              </IonCol>
              <IonCol size="2">
                <IonText>Time</IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItemDivider>
      </IonCol>
    </IonRow>
  );
};

export default ContentDivider;
