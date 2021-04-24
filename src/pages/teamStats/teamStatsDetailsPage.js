import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import TeamStats from "../../components/topicDetails/teamStats";
import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

const TeamStatsPage = () => {
  
  const { currentUser } = useAuth();
  const [teamStats, setTeamStats] = useState(null);
  //const managerId = '1kK33jibmLZ2RAEb7lF4u9g9STf2'
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
        setManagerId(userDoc?.managerId)

        const ref = firestore
        .collection("users")
        .doc(userDoc?.managerId)
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
      <TeamStats teamStats={teamStats}></TeamStats>
    </IonPage>
  );
};

export default TeamStatsPage;
