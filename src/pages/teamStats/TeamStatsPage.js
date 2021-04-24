import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeaderMore from "../../components/headers/moreHeader/index";
import TeamStats from "../../components/topicDetails/teamStats";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

const TeamStatsPage = () => {
  
  const { currentUser } = useAuth();
  const [teamStats, setTeamStats] = useState(null);
  var [managerId, setManagerId] = useState();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
      if (!doc.exists) {
        console.log('No such document');
        //history.goBack();
      } else {
        const userDoc = { id: doc.id, ...doc.data() };

        //set ManagerId Attributes to matching in DB
        setManagerId(userDoc?.teamId)

        const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
        .collection("team_stats")
        .doc("team_stats");
  
        ref.get("team_stats").then((doc) => {
          const data = { id: doc.id, ...doc.data() };
          setTeamStats(data);
        });
      }
    });
  }, [currentUser?.uid]);


  return (
    <IonPage>
      <PageHeaderMore title="Team Statistics" href="/manager/team-stats/more"></PageHeaderMore>      
      <TeamStats teamStats={teamStats}></TeamStats>
    </IonPage>
  );
};

export default TeamStatsPage;
