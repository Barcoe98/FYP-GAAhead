import React from "react";
import {IonPage} from "@ionic/react";
import PlayerAppTutorial from "../../components/topicDetails/appTutorial/player/index";
import TitleHeader from "../../components/headers/titeHeader";

const PlayerAppTutorialPage = () => {
  return (
    <IonPage>
      <PlayerAppTutorial></PlayerAppTutorial>
    </IonPage>
  );
};

export default PlayerAppTutorialPage;
