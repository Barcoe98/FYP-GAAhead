import React from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import TeamStats from "../../components/topicDetails/teamStats";

const TeamStatsPage = () => {
  return (
    <IonPage>
      <TeamStats></TeamStats>
    </IonPage>
  );
};

export default TeamStatsPage;
