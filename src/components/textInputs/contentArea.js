import React from "react";
import { IonRow, IonCol, IonTextarea, IonItem } from "@ionic/react";
import "./inputs.css";

const ContentArea = ({ text, setText, placeholderText }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItem color="dark" id="rnd-input">

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
