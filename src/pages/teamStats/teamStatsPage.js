import React from "react";
import { IonPage, IonRow, IonGrid, IonCol } from '@ionic/react';
import PageHeader from '../../components/headers'
import TeamStats from "../../components/topicDetails/teamStats";


const TeamStatsPage = () => {

  return (
    <IonPage>
      <PageHeader title=""></PageHeader>
        <TeamStats></TeamStats>
    </IonPage>
  );
};

export default TeamStatsPage;