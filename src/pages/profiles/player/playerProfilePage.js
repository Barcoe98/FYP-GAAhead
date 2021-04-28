import React, { useEffect, useState } from "react";
import { IonPage, IonContent, IonRow, IonGrid, IonList, IonText, IonCard, IonImg} from "@ionic/react";
import Stat from "../../../components/textComponents/index";
import StatContent from "../../../components/textComponents/statContent";
import AlertLogout from "../../../components/alerts/logoutAlert/index";
import LogoutButton from '../../../components/buttons/logoutButton/index'
import ItemDividerTeal from "../../../components/textComponents/dividerHeaders/itemDividerTeal"
import InjuryDividerTeal from "../../../components/textComponents/dividerHeaders/injuryDividerTeal"


import { firestore } from "../../../firebase";
import { useAuth } from "../../../contexts/authContext";
import { useHistory } from "react-router-dom";

import PageHeaderEdit from "../../../components/headers/editHeader";

import "../../pages.css";

const PlayerProfilePage = () => {

  
  const [profileDetails, setProfileDetails] = useState();
  const [injuries, setInjuries] = useState([]);

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
    <IonPage>
     <PageHeaderEdit title="My Profile" href="/player/my-profile/edit"></PageHeaderEdit>
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
     
               <ItemDividerTeal dividerLabel="Contact Details"> </ItemDividerTeal>
               <StatContent valueColSize="7" titleColSize="5" statTitle="Phone Number:" statValue={profileDetails?.number}></StatContent>
               <StatContent valueColSize="7" titleColSize="5" statTitle="Email:" statValue={profileDetails?.email}></StatContent>
     
               <ItemDividerTeal dividerLabel="Team Info"> </ItemDividerTeal>
               <StatContent valueColSize="7" titleColSize="5" statTitle="Team Name:" statValue={profileDetails?.teamName}></StatContent>
               <StatContent valueColSize="7" titleColSize="5" statTitle="Team Id:" statValue={profileDetails?.teamId}></StatContent>
        
               <InjuryDividerTeal dividerLabel="Injury Details" href="/player/my-profile/injury/add"></InjuryDividerTeal>
               <StatContent statTitle="Injury" statValue="Recover Length"></StatContent>
     
               {injuries.map((injury) => (
                <StatContent statTitle={injury.injury} statValue={injury.recoveryTime}></StatContent>
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
        </IonPage>
  );
};

export default PlayerProfilePage;
