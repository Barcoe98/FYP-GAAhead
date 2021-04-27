import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import WorkoutCard from "../../components/cards/workoutCard/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

import "../pages.css";

const WorkoutPage = () => {
  const [workouts, setWorkouts] = useState([]);
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
        setErrorMessage('Join a Team')
        setShowAlert(true)
      } 
      else {
        //ref for user managers results collection
        const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
        .collection("workouts");

        //snapshot of docs 
        ref.get().then((snapshot) => {           
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setWorkouts(docs);
      })
    }
  })

}, [currentUser?.uid]);

  return (
    <IonPage>
      <PageHeaderAdd title="Workouts" href="/manager/workout/add"></PageHeaderAdd>

      <IonContent>
        <IonList id="bg-col">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
          ))}
        </IonList>

        <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='No Workouts Found'
        showAlert={showAlert} 
        msg={errorMessage}>
        </AlertError>

      </IonContent>
    </IonPage>
  );
};

export default WorkoutPage;
