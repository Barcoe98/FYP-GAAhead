import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import ManagerProfileDetails from "../../components/topicDetails/myProfile/manager/index";
import "../pages.css";

const MyProfilePage = () => {
  return (
    <IonPage>
      <IonContent>
        <ManagerProfileDetails></ManagerProfileDetails>
      </IonContent>
    </IonPage>
  );
};

export default MyProfilePage;
