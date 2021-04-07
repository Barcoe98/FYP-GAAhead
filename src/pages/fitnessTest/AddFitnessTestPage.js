import React, { useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import Form from "../../components/forms";
import AlertError from "../../components/alerts/errorAlert";


import { useAuth } from "../../contexts/authContext";
import { firestore } from "../../firebase";
import { useHistory } from "react-router-dom";

import "../pages.css";

const AddFitnessTestPage = () => {

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [warmUp, setWarmUp] = useState("");
  const [exercises, setExercises] = useState("");
  const [warmDown, setWarmDown] = useState("");

  const { currentUser } = useAuth();
  const history = useHistory();

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
      .collection("fitness_tests");

      await ref.add(data);
      history.goBack();
    }
  };

  return (
    <IonPage>
      <PageHeader title="Add Fitness Test"></PageHeader>

      <Form
        formTitle="Add Fitness Test"
        btnTitle="Add Fitness Test"
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

      <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='Please Fill All Required Fields'
        showAlert={showAlert} 
        msg={errorMessage}>
      </AlertError>

    </IonPage>
  );
};

export default AddFitnessTestPage;
