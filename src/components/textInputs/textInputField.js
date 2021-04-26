import React from "react";
import { IonCol, IonLabel, IonItem, IonInput } from "@ionic/react";
import "./inputs.css";

const textInputField = ({
  label,
  text,
  setText,
  type,
  placeholderText,
  size,
  disabled
}) => {
  return (
    <IonCol size={size}>
      <IonItem color="dark" id="rnd-input">
        <IonLabel position="stacked">{label}</IonLabel>
        <IonInput
          required
          position="stacked"
          pattern=""
          placeholder={placeholderText}
          value={text}
          type={type}
          onIonChange={setText}
          disabled={disabled}
        ></IonInput>
      </IonItem>
    </IonCol>
  );
};

export default textInputField;
