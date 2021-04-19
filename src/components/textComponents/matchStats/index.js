import React from "react";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

import "./matchStats.css";

const PlayerDropDown = ({ players, positionNumber, positionValue, setValue }) => {
  return (
    <IonItem>
    <IonLabel>{positionNumber}</IonLabel>
      <IonSelect value={positionValue} onIonChange={setValue} interface="popover">
        {players.map((player) => (
          <IonSelectOption key={player.name} value={player.name} >{player.name}</IonSelectOption>
        ))}
      </IonSelect>
  </IonItem>
  );
};

export default PlayerDropDown;
