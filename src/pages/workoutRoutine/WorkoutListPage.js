import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import WorkoutCard from "../../components/cards/workoutCard/index";
import AlertError from "../../components/alerts/errorAlert";


import { firestore } from "../../firebase";
import "../pages.css";

const WorkoutPage = () => {
  const [workouts, setWorkouts] = useState([]);
  const [managerId, setManagerId] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const myManagerId = '1kK33jibmLZ2RAEb7lF4u9g9STf2'

  useEffect(() => {

    if (myManagerId !== null ) {

      //set Manager ID to user manager ID
      setManagerId(myManagerId)

      //ref for user managers fixtures collection
      const ref = firestore
      .collection("users")
      .doc(managerId)
      .collection("workouts");

      //snapshot of doc 
      ref.get().then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWorkouts(docs);
    });
    }

    else {
      setManagerId(null)
      setErrorMessage('No Team Data Available, Join a Team')
      setShowAlert(true)
      console.log('error') 
    }
    
  }, [managerId]);

  return (
    <IonPage>
      <PageHeaderAdd
        title="Workouts"
        href="/manager/workout/add"
      ></PageHeaderAdd>
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
