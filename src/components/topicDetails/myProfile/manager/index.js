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

import { firestore } from "../../../../firebase";
import { useAuth } from "../../../../contexts/authContext";
import PageHeader from "../../../headers/index";


import "../myProfile.css";

const ManagerProfileDetails = ({}) => {

  const [profile, setProfileDetails] = useState();
  const { currentUser } = useAuth();
  const id = 'Jw2htGYNV2A0naMySRjX'

  const uId = currentUser?.uid
  const testId = '1kK33jibmLZ2RAEb7lF4u9g9STf2'

  useEffect(() => {
    const playerRef = firestore.collection("users").doc(testId);
    playerRef.get(testId).then((doc) => {
      const profileDetails = { id: doc.id, ...doc.data() };
      setProfileDetails(profileDetails);
    });
  }, [id]);


  return (
    <IonContent>
    <PageHeader title="My Details"></PageHeader>

      <IonList id="bg-col">
        <div id="my-bg-img"></div>  
          <div id="myContent">
            <IonGrid>
            <IonText color="dark" id="myContentTitle">My Details</IonText>
              <IonRow>
                <IonCol size="6"><IonText id="title">Name:</IonText></IonCol>
                <IonCol size="6"><IonText id="myEmail">{profile?.name}</IonText></IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6"><IonText id="title">Email:</IonText></IonCol>
                <IonCol size="6"><IonText id="myEmail">{profile?.email}</IonText></IonCol>
              </IonRow>
            </IonGrid>
          </div>

          <div id="myContent">
            <IonText color="dark" id="myContentTitle">Team Details</IonText>
            <IonGrid>
              <IonRow>
                <IonCol size="6"><IonText id="title">Team Name:</IonText></IonCol>
                <IonCol size="6"><IonText id="myEmail">Blacks & Whites</IonText></IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6"><IonText id="title">Team Id:</IonText></IonCol>
                <IonCol size="6"><IonText id="myEmail">{profile?.managerId}</IonText></IonCol>
              </IonRow>
            </IonGrid>
          </div>

          <IonRow>
            <IonCol size="12">
              <IonButton id="lgBtn" href="">Log Out</IonButton>
            </IonCol>
          </IonRow>

      </IonList>
    </IonContent>
  );
}

export default ManagerProfileDetails;
