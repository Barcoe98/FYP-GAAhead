import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import TrainingScheduleCard from "../../components/cards/trainingScheduleCard/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";


const TrainingSchedulePage = () => {
  const [trainingSchedules, setTrainingSchedules] = useState([]);
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
        .collection("training_schedules");

        //snapshot of doc 
        ref.get().then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTrainingSchedules(docs);
      });
      }
  })

}, [currentUser?.uid]);


  return (
    <IonPage>
      <PageHeaderAdd
        title="Training Schedules"
        href="/manager/trainingschedule/add"
      ></PageHeaderAdd>
      <IonContent>
        <IonList id="bg-col">
          {trainingSchedules.map((tSchedule) => (
            <TrainingScheduleCard key={tSchedule.id} tSchedule={tSchedule}></TrainingScheduleCard>
          ))}
        </IonList>

        <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='No Training Schedules Found'
        showAlert={showAlert} 
        msg={errorMessage}>
        </AlertError>

      </IonContent>
    </IonPage>
  );
};

export default TrainingSchedulePage;
