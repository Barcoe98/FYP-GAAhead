import React, { useEffect, useState } from "react";
import {  IonContent, IonRow, IonGrid, IonList, IonText, IonCard, IonImg} from "@ionic/react";

import Stat from "../../textComponents/index";
import StatContent from "../../textComponents/statContent";
import ItemDividerTeal from "../../../components/textComponents/dividerHeaders/itemDividerTeal"

import { firestore } from "../../../firebase";
import { useAuth } from "../../../contexts/authContext";

import "../myProfile/myProfile.css";


const PanelPlayerProfileDetails = ({profileDetails, injuries }) => {
  
  return (
    <IonContent>
      <IonList id="bg-col">
        <div id="my-bg">
          <img id="myProfileImg" alt="me" src={profileDetails?.imgUrl} />
          <IonText id="myName">{profileDetails?.fullName}</IonText>
        </div>

        <div id="myContent">
        <IonGrid>
          <IonRow>
            <Stat stat={profileDetails?.age} statTitle="Age"></Stat>
            <Stat stat={profileDetails?.height} statTitle="Height"></Stat>
            <Stat stat={profileDetails?.weight} statTitle="Weight"></Stat>
            <Stat stat={profileDetails?.position} statTitle="Position"></Stat>
          </IonRow>
        </IonGrid>

        <ItemDividerTeal dividerLabel="Injury Details"> </ItemDividerTeal>
          <StatContent statTitle="Injury" statValue="Recover Length"></StatContent>

          {injuries.map((injury) => (
           <StatContent statTitle={injury.injury} statValue={injury.recoveryTime}></StatContent>
          ))}

        </div>
      </IonList>
    </IonContent>
  );
};

export default PanelPlayerProfileDetails;
