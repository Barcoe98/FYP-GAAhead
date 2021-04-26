import React from "react";
import {IonPage} from "@ionic/react";
import MorePlayer from "../../components/topicDetails/more/morePlayer";
import TitleHeader from "../../components/headers/titeHeader";

const MorePage = () => {
  return (
    <IonPage>
      <TitleHeader title="My Team"></TitleHeader>
      <MorePlayer></MorePlayer>
    </IonPage>
  );
};

export default MorePage;
