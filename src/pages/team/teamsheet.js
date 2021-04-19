import React from "react";
import { IonPage } from "@ionic/react";
import TeamSheet from "../../components/topicDetails/match/teamsheets/index"
import PageHeader from "../../components/headers";

const TeamSheetPage = () => {

  

  return (
    <IonPage>
      <PageHeader title="Team Sheet"></PageHeader>
      <TeamSheet></TeamSheet>
    </IonPage>
  );
};

export default TeamSheetPage;
