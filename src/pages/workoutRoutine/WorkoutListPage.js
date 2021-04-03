import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import WorkoutCard from "../../components/cards/workoutCard/index";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import "../pages.css";

const WorkoutPage = () => {
  const [workouts, setWorkouts] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const workoutRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("workouts");
    console.log(currentUser?.uid);
    workoutRef.get().then((snapshot) => {
      const routines = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWorkouts(routines);
    });
  }, [currentUser]);

  return (
    <IonPage>
      <PageHeaderAdd
        title="Workouts"
        href="/manager/workout/add"
      ></PageHeaderAdd>
      <IonContent>
        <IonList id="bg-col">
          {workouts.map((workout) => (
            <WorkoutCard workout={workout}></WorkoutCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default WorkoutPage;
