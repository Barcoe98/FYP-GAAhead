import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeaderDelete from "../../components/headers/deleteHeader/index";
import WorkoutDetails from "../../components/topicDetails/workoutRoutines/index";
import AlertDelete from "../../components/alerts/deleteAlert";
import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

import "../pages.css";

const WorkoutDetailsPage = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const history = useHistory();

  const [workout, setWorkout] = useState(null);
  const [delAlert, setDelAlert] = useState(false);
  var [teamId, setTeamId] = useState();


  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
      const userDoc = { id: doc.id, ...doc.data() };

      //set ManagerId Attributes to matching in DB
      setTeamId(userDoc?.teamId)

      const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
        .collection("workouts")
        .doc(id);

      ref.get(id).then((doc) => {
        const data = { id: doc.id, ...doc.data() };
        setWorkout(data);
      })
    })
  }, [currentUser?.uid, id]);

  const handleDelete = async () => {
    const workoutRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("workouts")
      .doc(id);
    await workoutRef.delete();
    console.log("Confirm Okay");
    history.goBack();
  };

  return (
    <IonPage>
      <PageHeaderDelete
        title=""
        action={() => setDelAlert(true)}
        href={"/manager/workout/edit/" + id }
      ></PageHeaderDelete>
      <WorkoutDetails workoutRoutine={workout}></WorkoutDetails>
      <AlertDelete
        delAlert={delAlert}
        setDelAlert={() => setDelAlert(false)}
        handleDelete={handleDelete}
      ></AlertDelete>
    </IonPage>
  );
};

export default WorkoutDetailsPage;
