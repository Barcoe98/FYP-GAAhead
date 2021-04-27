import React from "react";
import { IonCol, IonLabel, IonItem, IonDatetime } from "@ionic/react";
import "./inputs.css";

const DateInputField = ({label, size, setText, text , placeholderText}) => {
  return (
    <IonCol size={size}>
      <IonItem color="dark" id="rnd-input">
        <IonLabel position="stacked">{label}</IonLabel>
        <IonDatetime  value={text}
        onIonChange={setText} color="dark" placeholder={placeholderText} displayFormat="D MMM"></IonDatetime>
      </IonItem>
    </IonCol>
  );
};

export default DateInputField;
