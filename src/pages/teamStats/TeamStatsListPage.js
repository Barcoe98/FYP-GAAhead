import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList} from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import ResultCard from "../../components/cards/matchCard/result/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import PageHeader from "../../components/headers";
import TeamStatsCard from "../../components/cards/teamStatsCard";


const TeamStatsListPage = () => {
  const [teamStats, setTeamStats] = useState([]);
  const [teamId, setTeamId] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const { currentUser } = useAuth();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
      if (!doc.exists) {
        console.log('No such document');
        setErrorMessage('No Team Data Available, Join a Team')
        setShowAlert(true)
        //history.goBack();
      } else {
        const userDoc = { id: doc.id, ...doc.data() };

        //set TeamId Attributes to matching in DB
        setTeamId(userDoc?.teamId)

        //ref for user managers results collection
        const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
        .collection("team_stats");

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
    <PageHeader title="Team Statistics"></PageHeader>      
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

export default TeamStatsListPage;
