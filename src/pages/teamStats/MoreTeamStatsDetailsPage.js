import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import TeamStats from "../../components/topicDetails/teamStats";
import PageHeader from "../../components/headers";

import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

const MoreTeamStatsDetailsPage = () => {
  
  const { currentUser } = useAuth();
  const [teamStats, setTeamStats] = useState(null);
  var [managerId, setManagerId] = useState();
  const { id } = useParams();


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
        .collection("more_team_stats")
        .doc(id);
  
        ref.get(id).then((doc) => {
          const data = { id: doc.id, ...doc.data() };
          setTeamStats(data);
        });
      }
    });
  }, [currentUser?.uid, id]);


  return (
    <IonPage>
    <PageHeader title="Team Statistics" ></PageHeader>
      <TeamStats teamStats={teamStats}></TeamStats>
    </IonPage>
  );
};

export default MoreTeamStatsDetailsPage;
