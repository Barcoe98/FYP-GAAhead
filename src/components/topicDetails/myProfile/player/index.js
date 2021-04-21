import React, { useEffect, useState } from "react";
import { IonContent, IonRow, IonGrid, IonList, IonText } from "@ionic/react";
import Stat from "../../../textComponents/index";
import StatContent from "../../../textComponents/statContent";
import PageHeader from "../../../headers/index";
import AlertLogout from "../../../alerts/logoutAlert";
import LogoutButton from '../../../buttons/logoutButton/index'

import { firestore } from "../../../../firebase";
import { useAuth } from "../../../../contexts/authContext";
import { useHistory } from "react-router-dom";

import "../myProfile.css";


const PlayerProfileDetails = () => {

  const [profileDetails, setProfileDetails] = useState();
  const { currentUser, logOut } = useAuth();

  const history = useHistory();
  const [logoutAlert, setAlert] = useState(false);

  useEffect(() => {
    const playerRef = firestore.collection("users").doc(currentUser?.uid);
    playerRef.get(currentUser?.uid).then((doc) => {
      const profileDetails = { id: doc.id, ...doc.data() };
      setProfileDetails(profileDetails);
    });
  }, [currentUser?.uid]);

  async function handleLogout() {
    await logOut();
    history.push('/login')
    console.log("Confirm Logout");
};


  return (
    <IonContent>
    <PageHeader title="My Profile"></PageHeader>
      <IonList id="bg-col">
        <div id="my-bg">
          <img id="myProfileImg" alt="me" src="https://res.cloudinary.com/dmikx06rt/image/upload/v1614630566/FYP-GAAhead/profilePic_boakip.jpg" />
          <IonText id="myName">{profileDetails?.name}</IonText>
          <IonText id="myEmail">{profileDetails?.email}</IonText>
        </div>

        <IonGrid>
          <IonRow>
            <Stat stat={profileDetails?.age} statTitle="Age"></Stat>
            <Stat stat={profileDetails?.height} statTitle="Height"></Stat>
            <Stat stat={profileDetails?.weight} statTitle="Weight"></Stat>
            <Stat stat={profileDetails?.position} statTitle="Position"></Stat>
          </IonRow>
        </IonGrid>

       
        <div id="myContent">
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
          <h5 color="dark" id="myContentTitle">
            InJury History
          </h5>
          <StatContent
            statTitle="Total Injuries"
            statValue="8.27"
          ></StatContent>
          <StatContent
            statTitle="Most Recent Injury"
            statValue="Right Leg"
          ></StatContent>
          <StatContent statTitle="Recovery Period" statValue="14"></StatContent>
        </div>
      </IonList>

      <LogoutButton onClick={() => setAlert(true)} btnName="Logout"></LogoutButton>

      <AlertLogout
        logoutAlert={logoutAlert}
        setLogoutAlert={() => setAlert(false)}
        handleLogout={handleLogout}>
      </AlertLogout>
    </IonContent>
  );
};

export default PlayerProfileDetails;
