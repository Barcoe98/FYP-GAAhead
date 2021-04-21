import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonList,
  IonText,
  IonCol,
  IonGrid,
  IonRow,
  IonButton
} from "@ionic/react";
import PageHeader from "../../../headers/index";
import AlertDelete from "../../../alerts/deleteAlert/index";

import { firestore } from "../../../../firebase";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/authContext";


const ManagerProfileDetails = () => {

  const [profileDetails, setProfileDetails] = useState();
  const { currentUser, logOut } = useAuth();

  const history = useHistory();
  const [delAlert, setAlert] = useState(false);

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
    <PageHeader title="My Details"></PageHeader>

      <IonList id="bg-col">
        <div id="my-bg-img"></div>  
          <div id="myContent">
            <IonGrid>
            <IonText id="myContentTitle">My Details</IonText>
              <IonRow>
                <IonCol size="6"><IonText id="title">Name:</IonText></IonCol>
                <IonCol size="6"><IonText id="var">{profileDetails?.name}</IonText></IonCol>
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
            </IonGrid>
          </div>

           {/* Add Button*/ }
           <IonRow>
           <IonCol>
             <IonButton onClick={() => setAlert(true)} id="btnTheme" expand="block" color="danger" fill="solid" type="submit" > Logout</IonButton>
           </IonCol>
         </IonRow>

        <AlertDelete
          delAlert={delAlert}
          setDelAlert={() => setAlert(false)}
          handleDelete={handleLogout}>
        </AlertDelete>

      </IonList>
    </IonContent>
  );
}

export default ManagerProfileDetails;
