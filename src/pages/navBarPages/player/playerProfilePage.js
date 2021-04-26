import React from "react";
import { IonPage } from "@ionic/react";
import PlayerProfileDetails from "../../../components/topicDetails/myProfile/player/index";
import PageHeaderEdit from "../../../components/headers/editHeader";

import "../../pages.css";

const PlayerProfilePage = () => {
  return (
    <IonPage>
     <PageHeaderEdit title="My Profile" href="/player/my-profile/edit"></PageHeaderEdit>
        <PlayerProfileDetails></PlayerProfileDetails>
    </IonPage>
  );
};

export default PlayerProfilePage;
