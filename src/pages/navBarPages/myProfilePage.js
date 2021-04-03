import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import MyProfileDetails from "../../components/topicDetails/myProfile/index";
import "../pages.css";

const MyProfilePage = () => {
  return (
    <IonPage>
      <IonContent>
        <MyProfileDetails></MyProfileDetails>
      </IonContent>
    </IonPage>
  );
};

export default MyProfilePage;
