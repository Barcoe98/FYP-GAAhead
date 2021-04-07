import React from "react";
import { IonRow, IonCol, IonLabel, IonTextarea, IonItem } from "@ionic/react";
import "./inputs.css";

const ContentArea = ({ text, setText, txtAreaLbl, placeholderText }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItem color="light" id="rnd-input">
          <IonTextarea
            value={text} 
            onIonChange={setText}
            placeholder={placeholderText}          ></IonTextarea>
        </IonItem>
      </IonCol>
    </IonRow>
  );
};

export default ContentArea;
