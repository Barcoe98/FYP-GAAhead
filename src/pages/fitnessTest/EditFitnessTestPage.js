import React, { useState , useEffect} from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import Form from "../../components/forms";

import { useAuth } from "../../contexts/authContext";
import { firestore } from "../../firebase";
import { useParams, useHistory } from "react-router-dom";

import "../pages.css";

const EditFitnessTestPage = () => {
  const { currentUser } = useAuth();
  const history = useHistory();
  const { id } = useParams();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [warmUp, setWarmUp] = useState("");
  const [exercises, setExercises] = useState("");
  const [warmDown, setWarmDown] = useState("");

  const [fTests, setFTests] = useState();

  useEffect(() => {
      const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)
    .collection("fitness_tests")
    .doc(id);

    ref.get(id).then((doc) => {
      const data = { id: doc.id, ...doc.data() };
      setFTests(data);
    });

    setTitle(fTests?.title)
    setDate(fTests?.date)
    setTime(fTests?.time)
    setDifficulty(fTests?.difficulty)
    setWarmUp(fTests?.warmUp)
    setWarmDown(fTests?.warmDown)
    setExercises(fTests?.exercises)

  }, [currentUser?.uid, fTests?.date, fTests?.difficulty, fTests?.exercises, fTests?.time, fTests?.title, fTests?.warmDown, fTests?.warmUp, id]);



  const handleAdd = async () => {
    const data = {
      title,
      date,
      time,
      difficulty,
      warmUp,
      exercises,
      warmDown,
    };

    if (title === "") {
      setErrorMessage('No Title Entered')
      setShowAlert(true)
    }
    else if (date === "") {
      setErrorMessage('No Date Entered')
      setShowAlert(true)
    }
    else if (difficulty === "") {
      setErrorMessage('No Difficulty Entered')
      setShowAlert(true)
    }    
    else if (warmUp === "") {
      setErrorMessage('No Warm Up Entered')
      setShowAlert(true)
    }
    else if (exercises === '') {
      setErrorMessage('No Exercises Entered')
      setShowAlert(true)
    }
    else if (warmDown === "") {
      setErrorMessage('No Warm Down Entered')
      setShowAlert(true)
    }
    else {
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("fitness_tests")
      .doc(id)

      await ref.update(data);
      history.goBack();
    }
  };

  return (
    <IonPage>
      <PageHeader title="Edit Fitness Test"></PageHeader>

      <Form
        formTitle="Edit Fitness Test"
        btnTitle="Edit Fitness Test"
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
        handleAdd={handleAdd}>
      </Form>

    </IonPage>
  );
};

export default EditFitnessTestPage;
