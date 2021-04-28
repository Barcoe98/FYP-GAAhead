import React from "react";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

import "./matchStats.css";

const PlayerDropDown = ({ players, positionNumber, positionValue, setValue }) => {
  return (
    <IonItem color="dark">
    <IonLabel>{positionNumber}</IonLabel>
      <IonSelect value={positionValue} onIonChange={setValue} interface="popover">
        {players.map((player) => (
          <IonSelectOption key={player.fullName} value={player.fullName} >{player.fullName}</IonSelectOption>
        ))}
      </IonSelect>
  </IonItem>
  );
};

export default PlayerDropDown;
