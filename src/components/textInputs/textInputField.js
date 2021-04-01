import React from "react";
import { IonRow, IonCol,IonLabel, IonItem, IonInput } from '@ionic/react';
import './inputs.css'

const textInputField = ({label, text, setText, type, placeholderText, size}) => {
  
  return (
      <IonCol size={size}>
        <IonItem id="rnd-input">
          <IonLabel position="stacked">{label}</IonLabel>
          <IonInput required position="stacked" pattern="" placeholder={placeholderText} value={text} type={type}  onIonChange={setText}></IonInput>
        </IonItem>
      </IonCol>
  );
};

export default textInputField;