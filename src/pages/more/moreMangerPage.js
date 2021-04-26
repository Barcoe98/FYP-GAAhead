import React from "react";
import {IonPage} from "@ionic/react";
import TitleHeader from "../../components/headers/titeHeader";
import MoreManager from "../../components/topicDetails/more/moreManager";

const MorePage = () => {
  return (
  <IonPage>
    <TitleHeader title="More Page"></TitleHeader>
    <MoreManager></MoreManager>
  </IonPage>
  );
};

export default MorePage;
