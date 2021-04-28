import React from "react";
import { IonCol, IonLabel, IonItem } from "@ionic/react";
import "./inputs.css";

const imageInputField = ({ size, label, imgSrc, handleImgChange}) => {
  return (
    <IonCol size={size}>
      <IonItem color="dark" id="rnd-input">
        <IonLabel position="stacked">{label}</IonLabel>
        <img id="placeholderImg" src={imgSrc}  alt ="PlaceholderImage"></img>
        <input id="imgInput" type="file" accept="image/*" onChange={handleImgChange}></input>
      </IonItem>
    </IonCol>
  );
};

export default imageInputField;
