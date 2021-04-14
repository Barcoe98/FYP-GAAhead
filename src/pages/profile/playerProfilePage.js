import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import PlayerProfileDetails from "../../components/topicDetails/myProfile/player/index";
import "../pages.css";

const PlayerProfilePage = () => {
  return (
    <IonPage>
      <IonContent>
        <PlayerProfileDetails></PlayerProfileDetails>
      </IonContent>
    </IonPage>
  );
};

export default PlayerProfilePage;
