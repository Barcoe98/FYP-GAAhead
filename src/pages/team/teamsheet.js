import React, { useState } from "react";
import { IonPage } from "@ionic/react";
import TeamSheet from "../../components/topicDetails/match/teamsheets/index"
import PageHeader from "../../components/headers";

const TeamSheetPage = () => {

  

  return (
    <IonPage>
      <PageHeader title="Add Workout Routine"></PageHeader>
      <TeamSheet></TeamSheet>
    </IonPage>
  );
};

export default TeamSheetPage;
