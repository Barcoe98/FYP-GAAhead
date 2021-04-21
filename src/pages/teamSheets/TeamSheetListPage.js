import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import TeamSheetCard from "../../components/cards/teamSheetCard/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";


const TeamSheetPage = () => {
  const [teamSheets, setTeamSheets] = useState([]);
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

        //ref for user managers team sheets collection
        const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
        .collection("team_sheets");

        //snapshot of doc 
        ref.get().then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTeamSheets(docs);
      });
      }
  })

}, [currentUser?.uid]);


  return (
    <IonPage>
      <PageHeaderAdd
        title="Team Sheets"
        href="/manager/team-sheet/add"
      ></PageHeaderAdd>
      <IonContent>
        <IonList id="bg-col">
          {teamSheets.map((teamSheet) => (
            <TeamSheetCard key={teamSheet.id} teamSheet={teamSheet}></TeamSheetCard>
          ))}
        </IonList>

        <AlertError 
          setShowAlert={() => setShowAlert(false)} 
          alertHeader='No Team Sheets Found'
          showAlert={showAlert} 
          msg={errorMessage}>
        </AlertError>

      </IonContent>
    </IonPage>
  );
};

export default TeamSheetPage;
