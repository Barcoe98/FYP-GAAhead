import React from "react";
import { IonPage } from "@ionic/react";
import MorePlayer from "../../../components/topicDetails/more/morePlayer";
import TitleHeader from "../../../components/headers/titeHeader/index";

import "../../pages.css";


const MorePage = () => {
  return (
    <IonPage>
      <TitleHeader title="More Page"></TitleHeader>
      <MorePlayer></MorePlayer>
    </IonPage>
  );
};

export default MorePage;
