import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import TrainingScheduleDetails from "../../components/topicDetails/trainingSchedule/index";

import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

const TrainingScheduleDetailsPage = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [trainingSchedule, setTrainingSchedule] = useState(null);

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
  }, [currentUser?.uid, id]);

  return (
    <IonPage>
      <PageHeader title=""></PageHeader>
      <TrainingScheduleDetails
        trainingSchedule={trainingSchedule}
      ></TrainingScheduleDetails>
    </IonPage>
  );
};

export default TrainingScheduleDetailsPage;
