import React, {useState} from "react";
import { IonSelect, IonCol, IonRow, IonContent, IonGrid, IonLoading ,IonButton, IonInput, IonLabel, IonItem, IonList, IonPage, IonRange, IonItemDivider, IonTextarea, IonIcon, IonDatetime} from '@ionic/react';
import PageHeader from '../../components/headers'
import ItemDivider from '../../components/textInputs/itemDivider'
import ContentArea from '../../components/textInputs/contentArea'
import {firestore} from '../../firebase'
import { useAuth } from '../../contexts/authContext'


import './fitnessTest.css';


const AddFitnessTestPage = () => {

  const [ title, setTitle ] = useState("")
  const [ date, setDate ] = useState("")
  const [ time, setTime ] = useState("")
  const [ difficulty, setDifficulty ] = useState("")
  const [ warmUp, setWarmUp ] = useState("")
  const [ exercises, setExercises ] = useState("")
  const [ warmDown, setWarmDown ] = useState("")

  const [ status, setStatus ] = useState({loading: false, emailError: false, pwordError: false})

  const handleAdd = async () => {
    const fTestsRef = firestore.collection('fitness_tests')
    const fTestData = {title, date, time, difficulty, warmUp, exercises, warmDown}
    const fTestRef = await fTestsRef.add(fTestData)
    console.log('Added', fTestRef.id )
  }

  return (
    <IonPage >
    <PageHeader title="Add Fitness Test"></PageHeader>
      <IonContent id="pg-bg">
        <IonGrid id="pg-bg">

          <IonRow>
          <IonCol>
            <IonItemDivider id="itm-divider-red">
              <IonLabel >
                Fitness Test Details
              </IonLabel>
            </IonItemDivider>
          </IonCol>
        </IonRow>

        {/*Title Input Fields & Labels*/ }
        <IonRow id>
          <IonCol >
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput position="stacked" placeholder="Enter Title" value={title} type="text" required
              onIonChange={(e) => setTitle(e.detail.value)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        {/*Time & Date Input Fields & Labels*/ }
        <IonRow>
          <IonCol size="6">
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Time</IonLabel>
              <IonDatetime onIonChange={(e) => setTime(e.detail.value)} displayFormat="h:mm A" pickerFormat="h:mm A" value={time} placeholder="Select Time"></IonDatetime>
            </IonItem>         
          </IonCol>
          
          <IonCol size="6">
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Date</IonLabel>
              <IonDatetime onIonChange={(e) => setDate(e.detail.value)} value={date} placeholder="Select Date" ></IonDatetime>
            </IonItem>          
          </IonCol>
        </IonRow>

        {/*Total Calories Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
          <IonItem color="dark" id="rnd-input">
          <IonLabel>Difficulty</IonLabel>  
          <IonSelect value={difficulty} onIonChange={(e) => setDifficulty(e.detail.value)} placeholder="Select One">  
            <ion-select-option value="easy">Easy</ion-select-option>  
            <ion-select-option value="moderate">Moderate</ion-select-option>  
            <ion-select-option value="hard">Hard</ion-select-option>  
            <ion-select-option value="very hard">Very Hard</ion-select-option> 
          </IonSelect>  
          </IonItem>
          </IonCol>
        </IonRow>


        {/*Warm Up Stretches Input Fields & Labels*/ }
        <ItemDivider dividerLabel="Warm Up"></ItemDivider>
        <ContentArea value={warmUp} onIonChange={(e) => setWarmUp(e.detail.value)} txtAreaLbl="Details" placeholderText="Enter Warm Up Details"></ContentArea>

        {/*Exercises Input Fields & Labels*/ }
        <ItemDivider dividerLabel="Exercises"></ItemDivider>
        <ContentArea value={exercises} onIonChange={(e) => setExercises(e.detail.value)} txtAreaLbl="Details" placeholderText="Enter Exercise Details"></ContentArea>

        {/*Warm Down Input Fields & Labels*/ }
        <ItemDivider dividerLabel="Warm Down"></ItemDivider>
        <ContentArea value={warmDown} onIonChange={(e) => setWarmDown(e.detail.value)} txtAreaLbl="Details" placeholderText="Enter Warm Down Details"></ContentArea>


        {/* Add Button*/ }
        <IonRow>
          <IonCol>
          <IonLoading isOpen={status.loading}></IonLoading>
            <IonButton onClick={handleAdd} id="btnTheme" expand="block" color="dark" fill="solid" type="submit" >
              add Fitness Test 
            </IonButton>
          </IonCol>
        </IonRow>
          
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AddFitnessTestPage;