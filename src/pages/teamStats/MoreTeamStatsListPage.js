import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList} from "@ionic/react";
import AlertError from "../../components/alerts/errorAlert";
import TeamStatsCard from "../../components/cards/teamStatsCard";
import PageHeader from "../../components/headers";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

const MoreTeamStatsListPage = () => {
  const [teamStats, setTeamStats] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
      const userDoc = { id: doc.id, ...doc.data() };

      if (userDoc.teamId === "") {
        console.log('No Team Data Available');
        setErrorMessage('Join a Team')
        setShowAlert(true)
      } else {

        //ref for user managers results collection
        const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
        .collection("more_team_stats");

        //snapshot of doc 
        ref.get().then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTeamStats(docs);
      });
      }
  })
}, [currentUser?.uid]);

  return (
  <IonPage>
    <PageHeader title="More Team Statistics"></PageHeader>     
    <IonContent>
      <IonList id="bg-col">
        {teamStats.map((teamStats) => (
          <TeamStatsCard key={teamStats.id} teamStats={teamStats}></TeamStatsCard>
        ))}
      </IonList>
      
      <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='No Team Statistics Found'
        showAlert={showAlert} 
        msg={errorMessage}>
      </AlertError>

    </IonContent>
  </IonPage>
  );
};

export default MoreTeamStatsListPage;
