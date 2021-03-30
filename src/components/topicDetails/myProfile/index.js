import React from "react";
import { IonContent, IonRow, IonCol, IonGrid, IonList, IonText, IonIcon} from '@ionic/react';
import { flame, time, calendar } from 'ionicons/icons';
import Stat from "../../textComponents/index";
import StatContent from "../../textComponents/statContent";




import './myProfile.css'

const MyProfileDetails = () => {

  return (
    <IonContent>
      <IonList id="my-bg-color"> 
      <div id="my-bg-img"></div>
        <h1 id="myName">Michael Barcoe</h1>
        <h5 id="myEmail">test@test.com</h5>
        
          <IonGrid>
            <IonRow>
              <Stat stat="22" statTitle="Age"></Stat>
              <Stat stat="188" statTitle="Height"></Stat>
              <Stat stat="72" statTitle="Weight"></Stat>
              <Stat stat="Midfield" statTitle="Position"></Stat>
            </IonRow>
          </IonGrid>

          <div id="myContent">
            <h5 color="dark" id="myContentTitle">Bio</h5>
            <StatContent statTitle="First Name:" statValue="Michael" ></StatContent>
            <StatContent statTitle="Last Name:" statValue="Barcoe" ></StatContent>
            <StatContent statTitle="Address:" statValue="Kilkenny" ></StatContent>
            <StatContent statTitle="Club" statValue="Blacks& Whites" ></StatContent>
          </div>

          <div id="myContent">
            <h5 color="dark" id="myContentTitle">Player Stats</h5>
            <StatContent statTitle="Speed(100m)" statValue="8.27" ></StatContent>
            <StatContent statTitle="Hooks" statValue="7" ></StatContent>
            <StatContent statTitle="Blocks" statValue="4" ></StatContent>
            <StatContent statTitle="Distance Covered" statValue="12.5" ></StatContent>
          </div>

          <div id="myContent">
            <h5 color="dark" id="myContentTitle">InJury History</h5>
            <StatContent statTitle="Total Injuries" statValue="8.27" ></StatContent>
            <StatContent statTitle="Most Recent Injury" statValue="Right Leg" ></StatContent>
            <StatContent statTitle="Recovery Period" statValue="14" ></StatContent>
          </div>

        </IonList>
    </IonContent>

  );
};

export default MyProfileDetails;