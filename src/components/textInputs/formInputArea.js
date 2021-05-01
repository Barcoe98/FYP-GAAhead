import React from "react";
import { IonRow, IonCol, IonLabel, IonTextarea, IonItem, IonInput } from "@ionic/react";
import "./inputs.css";

const FormInputArea = ({ cal, setCal, meal, setMeal, placeholderTextMeal, placeholderTextCal }) => {
  return (
    <IonRow>
    <IonCol>
      <IonItem color="dark" id="rnd-input">
        <IonLabel position="stacked">Calories</IonLabel>
        <IonInput
          placeholder={placeholderTextCal}
          value={cal}
          type="number"
          required
          onIonChange={setCal}
        ></IonInput>
        <IonLabel position="stacked">Food Details</IonLabel>
        <IonTextarea
          placeholder={placeholderTextMeal}
          value={meal}
          rows="5"
          type="text"
          required
          onIonChange={setMeal}
        ></IonTextarea>
      </IonItem>
    </IonCol>
  </IonRow>
  );
};

export default FormInputArea;
