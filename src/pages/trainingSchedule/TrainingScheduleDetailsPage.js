import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeaderDelete from "../../components/headers/deleteHeader/index";
import TrainingScheduleDetails from "../../components/topicDetails/trainingSchedule/index";
import AlertDelete from "../../components/alerts/deleteAlert";

import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import "../pages.css";


const TrainingScheduleDetailsPage = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const history = useHistory();
  const [trainingSchedule, setTrainingSchedule] = useState(null);
  const [delAlert, setDelAlert] = useState(false);


  useEffect(() => {
    const tScheduleRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("training_schedules")
      .doc(id);
    tScheduleRef.get(id).then((doc) => {
      const trainingSchedules = { id: doc.id, ...doc.data() };
      setTrainingSchedule(trainingSchedules);
    });
  }, [id]);

  const handleDelete = async () => {
    const fTestRef = firestore
    .collection("users")
    .doc(currentUser?.uid)
    .collection("training_schedules")
    .doc(id);
    
    await fTestRef.delete();
    console.log("Confirm Okay");
    history.goBack();
  };

  return (
    <IonPage>
      <PageHeaderDelete
        title=""
        action={() => setDelAlert(true)}>
      </PageHeaderDelete>
      <TrainingScheduleDetails trainingSchedule={trainingSchedule}></TrainingScheduleDetails>
      <AlertDelete
        delAlert={delAlert}
        setDelAlert={() => setDelAlert(false)}
        handleDelete={handleDelete}
      ></AlertDelete>
    </IonPage>
  );
};

export default TrainingScheduleDetailsPage;
