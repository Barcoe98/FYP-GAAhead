import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import ManagerProfileDetails from "../../../components/topicDetails/myProfile/manager/index";
import PageHeaderEdit from "../../../components/headers/editHeader";

import "../../pages.css";

const MyProfilePage = () => {
  return (
    <IonPage>
    <PageHeaderEdit title="My Profile" href="/manager/my-profile/edit"></PageHeaderEdit>
      <IonContent>
        <ManagerProfileDetails></ManagerProfileDetails>
      </IonContent>
    </IonPage>
  );
};

export default MyProfilePage;
