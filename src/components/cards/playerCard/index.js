import React from "react";
import { IonRow, IonGrid, IonCard, IonImg} from "@ionic/react";


import "./player.css";

const PlayerCard = ({ myProfile }) => {
  return (
    <IonCard id="playerGridCards" key={myProfile.id} routerLink={("/manager/team/panel/", myProfile.id)}>
    <IonImg id="pImage"
      src={myProfile.imgUrl}
    ></IonImg>
    <IonGrid>
      <IonRow id="pName">{myProfile.fullName}</IonRow>
      <IonRow id="pAge">{myProfile.position}</IonRow>
    </IonGrid>
  </IonCard>
  );
};

export default PlayerCard;
