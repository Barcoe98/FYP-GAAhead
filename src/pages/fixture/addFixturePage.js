import React, {useState} from "react";
import { IonSelect, IonCol, IonRow, IonContent, IonGrid, IonLoading ,IonButton, IonInput, IonLabel, IonItem, IonPage, IonItemDivider} from '@ionic/react';
import PageHeader from '../../components/headers'
import ItemDivider from '../../components/textInputs/itemDivider'
import ContentArea from '../../components/textInputs/contentArea'
import { useAuth} from '../../contexts/authContext'

import {firestore} from '../../firebase'
import { useHistory } from "react-router-dom";
import Form from "../../components/forms";


const AddFixturePage = () => {

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
    const workoutRef = firestore.collection('users').doc(currentUser?.uid).collection('fixtures')
    const workoutData = {title, date, time, difficulty, warmUp, exercises, warmDown}
    await workoutRef.add(workoutData)
    history.goBack();
  }

  return (
    <IonPage>
    <PageHeader title="Add Fixture"></PageHeader>

      <Form
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
      </Form>

    </IonPage>
  );
};

export default AddFixturePage;