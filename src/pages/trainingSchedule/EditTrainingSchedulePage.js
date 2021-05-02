import React, { useState , useEffect} from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import Form from "../../components/forms";

import { useAuth } from "../../contexts/authContext";
import { firestore } from "../../firebase";
import { useParams, useHistory } from "react-router-dom";

import "../pages.css";

const EditTrainingSchedulePage = () => {
  const { currentUser } = useAuth();
  const history = useHistory();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [warmUp, setWarmUp] = useState("");
  const [exercises, setExercises] = useState("");
  const [warmDown, setWarmDown] = useState("");

  const [trainings, setTrainings] = useState();

  useEffect(() => {
      const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)
    .collection("training_schedules")
    .doc(id);

    ref.get(id).then((doc) => {
      const data = { id: doc.id, ...doc.data() };
      setTrainings(data);
    });

    setTitle(trainings?.title)
    setDate(trainings?.date)
    setTime(trainings?.time)
    setDifficulty(trainings?.difficulty)
    setWarmUp(trainings?.warmUp)
    setWarmDown(trainings?.warmDown)
    setExercises(trainings?.exercises)

  }, [currentUser?.uid, trainings?.date, trainings?.difficulty, trainings?.exercises, trainings?.time, trainings?.title, trainings?.warmDown, trainings?.warmUp, id]);

  const handleEdit = async () => {
    const data = {
      title,
      date,
      time,
      difficulty,
      warmUp,
      exercises,
      warmDown,
    };
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("training_schedules")
      .doc(id)

      await ref.update(data);
      history.goBack();
  };

  return (
    <IonPage>
      <PageHeader title="Edit Training"></PageHeader>

      <Form
        formTitle="Edit Training"
        btnTitle="Edit Training"
        title={title}
        date={date}
        time={time}
        difficulty={difficulty}
        warmUp={warmUp}
        exercises={exercises}
        warmDown={warmDown}
        setTitle={(e) => setTitle(e.detail.value)}
        setTime={(e) => setTime(e.detail.value)}
        setDate={(e) => setDate(e.detail.value)}
        setDifficulty={(e) => setDifficulty(e.detail.value)}
        setWarmUp={(e) => setWarmUp(e.detail.value)}
        setExercises={(e) => setExercises(e.detail.value)}
        setWarmDown={(e) => setWarmDown(e.detail.value)}
        handleAdd={handleEdit}>
      </Form>

    </IonPage>
  );
};

export default EditTrainingSchedulePage;
