import React, { useEffect, useState } from "react";
import { IonContent, IonRow, IonGrid, IonList, IonText, IonCard, IonImg} from "@ionic/react";
import Stat from "../../../textComponents/index";
import StatContent from "../../../textComponents/statContent";
import AlertLogout from "../../../alerts/logoutAlert";
import LogoutButton from '../../../buttons/logoutButton/index'
import ItemDividerTeal from "../../../textComponents/dividerHeaders/itemDividerTeal"
import InjuryDividerTeal from "../../../textComponents/dividerHeaders/injuryDividerTeal"


import { firestore } from "../../../../firebase";
import { useAuth } from "../../../../contexts/authContext";
import { useHistory } from "react-router-dom";

import "../myProfile.css";


const PlayerProfileDetails = () => {

  const [profileDetails, setProfileDetails] = useState();
  const [injuries, setInjuries] = useState();

  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  const [logoutAlert, setAlert] = useState(false);

  useEffect(() => {
    const playerRef = firestore.collection("users").doc(currentUser?.uid);
    playerRef.get(currentUser?.uid).then((doc) => {
      const profileDetails = { id: doc.id, ...doc.data() };
      setProfileDetails(profileDetails);
    });

    const ref = firestore.collection("users").doc(currentUser?.uid).collection("injuries")
      //snapshot of doc 
      ref.get().then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInjuries(docs);
    });

  }, [currentUser?.uid]);

  async function handleLogout() {
    await logOut();
    history.push('/login')
    console.log("Confirm Logout");
};


  return (
    <IonContent>
      <IonList id="bg-col">
        <div id="my-bg">
          <img id="myProfileImg" alt="me" src={profileDetails?.imgUrl} />
          <IonText id="myName">{profileDetails?.fullName}</IonText>
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
          <ItemDividerTeal dividerLabel="Contact Details"> </ItemDividerTeal>
          <StatContent valueColSize="7" titleColSize="5" statTitle="Phone Number:" statValue={profileDetails?.number}></StatContent>
          <StatContent valueColSize="7" titleColSize="5" statTitle="Email:" statValue={profileDetails?.email}></StatContent>
        </div>

        <div id="myContent">
          <ItemDividerTeal dividerLabel="Team Info"> </ItemDividerTeal>
          <StatContent valueColSize="7" titleColSize="5" statTitle="Team Name:" statValue={profileDetails?.teamName}></StatContent>
          <StatContent valueColSize="7" titleColSize="5" statTitle="Team Id:" statValue={profileDetails?.teamId}></StatContent>
          <StatContent valueColSize="7" titleColSize="5" statTitle="Grounds" statValue={profileDetails?.grounds}></StatContent>
        </div>

        <div id="myContent">
          <ItemDividerTeal dividerLabel="Player Stats"> </ItemDividerTeal>
          <StatContent valueColSize="3" titleColSize="9" statTitle="Speed(100m)" statValue="8.27"></StatContent>
          <StatContent valueColSize="3" titleColSize="9" statTitle="Hooks" statValue="7"></StatContent>
          <StatContent valueColSize="3" titleColSize="9" statTitle="Blocks" statValue="4"></StatContent>
          <StatContent valueColSize="3" titleColSize="9" statTitle="Distance Covered" statValue="12.5"></StatContent>
        </div>

        <div id="myContent">
        <ItemDividerTeal dividerLabel="Injury Details"> </ItemDividerTeal>
        <StatContent statTitle="Injury" statValue="Recover Length"></StatContent>

          {injuries.map((myProfile) => (
            <IonCard
              id="playerGridCards"
              key={myProfile.id}
              routerLink={("/manager/team/panel/", myProfile.id)}
            >
              <IonImg
                id="pImage"
                src="https://res.cloudinary.com/dmikx06rt/image/upload/v1614630566/FYP-GAAhead/profilePic_boakip.jpg"
              ></IonImg>
              <IonGrid>
                <IonRow id="pName">{myProfile.injur}</IonRow>
                <IonRow id="pAge">{myProfile.position}</IonRow>
              </IonGrid>
            </IonCard>
          ))}
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
