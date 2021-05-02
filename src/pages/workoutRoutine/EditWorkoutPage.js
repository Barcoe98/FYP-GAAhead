import React, { useState , useEffect} from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import Form from "../../components/forms";

import { useAuth } from "../../contexts/authContext";
import { firestore } from "../../firebase";
import { useParams, useHistory } from "react-router-dom";

import "../pages.css";

const EditWorkoutPage = () => {
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

  const [workouts, setWorkouts] = useState();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)
    .collection("workouts")
    .doc(id);

    ref.get(id).then((doc) => {
      const data = { id: doc.id, ...doc.data() };
      setWorkouts(data);
    });

    setTitle(workouts?.title)
    setDate(workouts?.date)
    setTime(workouts?.time)
    setDifficulty(workouts?.difficulty)
    setWarmUp(workouts?.warmUp)
    setWarmDown(workouts?.warmDown)
    setExercises(workouts?.exercises)

  }, [currentUser?.uid, workouts?.date, workouts?.difficulty, workouts?.exercises, workouts?.time, workouts?.title, workouts?.warmDown, workouts?.warmUp, id]);



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
      .collection("workouts")
      .doc(id)

      await ref.update(data);
      history.goBack();
  };

  return (
    <IonPage>
      <PageHeader title="Edit Workout Routine"></PageHeader>

      <Form
        formTitle="Edit Workout Routine"
        btnTitle="Edit Workout Routine"
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

export default EditWorkoutPage;
