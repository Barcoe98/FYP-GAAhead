import React, { useEffect, useState } from "react";
import { IonContent, IonRow, IonGrid, IonList, IonText } from "@ionic/react";
import Stat from "../../../textComponents/index";
import StatContent from "../../../textComponents/statContent";
import PageHeader from "../../../headers/index";

import { firestore } from "../../../../firebase";
import { useAuth } from "../../../../contexts/authContext";

import "../myProfile.css";


const PlayerProfileDetails = ({profileDetails}) => {

  return (
    <IonContent>
    <PageHeader title="My Profile"></PageHeader>
      <IonList id="bg-col">
        <div id="my-bg">
          <img id="myProfileImg" alt="me" src="https://res.cloudinary.com/dmikx06rt/image/upload/v1614630566/FYP-GAAhead/profilePic_boakip.jpg" />
          <IonText id="myName">{profileDetails?.name}</IonText>
          <IonText id="myEmail">{profileDetails?.email}</IonText>
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

       
        
          <IonText id="myContentTitle">Team Info</IonText>
          <StatContent valueColSize="7" titleColSize="5" statTitle="Team Name:" statValue={profileDetails?.teamName}></StatContent>
          <StatContent valueColSize="7" titleColSize="5" statTitle="Address:" statValue="Skeoughvasteen, Kilkenny"></StatContent>
          <StatContent valueColSize="7" titleColSize="5" statTitle="Grounds" statValue={profileDetails?.grounds}></StatContent>
        </div>

        <div id="myContent">
          <IonText id="myContentTitle">Player Stats</IonText>
          <StatContent valueColSize="3" titleColSize="9" statTitle="Speed(100m)" statValue="8.27"></StatContent>
          <StatContent valueColSize="3" titleColSize="9" statTitle="Hooks" statValue="7"></StatContent>
          <StatContent valueColSize="3" titleColSize="9" statTitle="Blocks" statValue="4"></StatContent>
          <StatContent valueColSize="3" titleColSize="9" statTitle="Distance Covered" statValue="12.5"></StatContent>
        </div>

        <div id="myContent">
          <h5 color="dark" id="myContentTitle">InJury History</h5>
          <StatContent statTitle="Total Injuries" statValue="8.27" ></StatContent>
          <StatContent statTitle="Most Recent Injury" statValue="Right Leg"></StatContent>
          <StatContent statTitle="Recovery Period" statValue="14"></StatContent>
        </div>
        
      </IonList>
    </IonContent>
  );
};

export default PlayerProfileDetails;
