import React, {useState} from "react";
import {IonPage} from '@ionic/react';
import PageHeader from '../../components/headers'

import { useAuth} from '../../contexts/authContext'
import {firestore} from '../../firebase'
import { useHistory } from "react-router-dom";
import ResultForm from "../../components/forms/resultForm/index";


const AddResultPage = () => {

  const [ title, setTitle ] = useState("")
  const [ date, setDate ] = useState("")
  const [ time, setTime ] = useState("")
  const [ difficulty, setDifficulty ] = useState("")
  const [ warmUp, setWarmUp ] = useState("")
  const [ exercises, setExercises ] = useState("")
  const [ warmDown, setWarmDown ] = useState("")
  
  const { currentUser } = useAuth()
  const history = useHistory();
  const [ status, setStatus ] = useState({loading: false, emailError: false, pwordError: false})

  const handleAdd = async () => {
    const resultRef = firestore.collection('users').doc(currentUser?.uid).collection('results')
    const resultData = {title, date, time, difficulty, warmUp, exercises, warmDown}
    await resultRef.add(resultData)
    history.goBack();
  }

  return (
    <IonPage>
    <PageHeader title="Add Match Result"></PageHeader>

      <ResultForm
        title={title} date={date} time={time} difficulty={difficulty}
        warmUp={warmUp} exercises={exercises} warmDown={warmDown}
        setTitle = {(e) => setTitle(e.detail.value)}
        setTime = {(e) => setTime(e.detail.value)}
        setDate = {(e) => setDate(e.detail.value)}
        setDifficulty = {(e) => setDifficulty(e.detail.value)}
        setWarmUp = {(e) => setWarmUp(e.detail.value)}
        setExercises = {(e) => setExercises(e.detail.value)}
        setWarmDown = {(e) => setWarmDown(e.detail.value)}
        handleAdd = {handleAdd}
        loading={status.loading}>
      </ResultForm>

    </IonPage>
  );
};

export default AddResultPage;