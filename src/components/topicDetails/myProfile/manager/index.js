import React, { useEffect, useState } from "react";
import {IonContent, IonList, IonText, IonCol,  IonGrid,  IonRow} from "@ionic/react";
import LogoutButton from '../../../buttons/logoutButton/index'
import AlertLogout from "../../../alerts/logoutAlert";

import { firestore } from "../../../../firebase";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/authContext";
import LinkButton from "../../../buttons/linkButton";


const ManagerProfileDetails = () => {

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
    <IonList id="bg-col">
      <div id="my-bg-img"><img alt="" width="320" height="320" src={profileDetails?.coverImg}></img></div>  
        <div id="myContent">
          <IonGrid>
          <IonText id="myContentTitle">My Details</IonText>
            <IonRow>
              <IonCol size="6"><IonText id="title">Name:</IonText></IonCol>
              <IonCol size="6"><IonText id="var">{profileDetails?.fullName}</IonText></IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6"><IonText id="title">Email:</IonText></IonCol>
              <IonCol size="6"><IonText id="var">{profileDetails?.email}</IonText></IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div id="myContent">
          <IonText id="myContentTitle">Team Details</IonText>
          <IonGrid>
            <IonRow>
              <IonCol size="6"><IonText id="title">Team Name:</IonText></IonCol>
              <IonCol size="6"><IonText id="var">{profileDetails?.teamName}</IonText></IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="3"><IonText id="title">Team Id:</IonText></IonCol>
              <IonCol size="9"><IonText id="var">{profileDetails?.teamId}</IonText></IonCol>
            </IonRow>

            <LinkButton href="/manager/team-stats/reset" btnName=" Reset Team Stats" ></LinkButton>

          </IonGrid>
        </div>

        <LogoutButton onClick={() => setAlert(true)} btnName="Logout"></LogoutButton>

        <AlertLogout
          logoutAlert={logoutAlert}
          setLogoutAlert={() => setAlert(false)}
          handleLogout={handleLogout}>
        </AlertLogout>

    </IonList>
  </IonContent>
)
}

export default ManagerProfileDetails;
