import React, {useState} from "react";
import { IonSelect, IonCol, IonRow, IonContent, IonGrid, IonLoading ,IonButton, IonInput, IonLabel, IonItem, IonPage, IonItemDivider, IonDatetime} from '@ionic/react';
import PageHeader from '../../components/headers'
import ItemDivider from '../../components/textInputs/itemDivider'
import ContentArea from '../../components/textInputs/contentArea'
import { useAuth} from '../../contexts/authContext'

import {firestore} from '../../firebase'
import { useHistory } from "react-router-dom";


const AddFitnessTestPage = () => {

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
    const fTestsRef = firestore.collection('users').doc(currentUser?.uid).collection('fitness_tests')
    const fTestData = {title, date, time, difficulty, warmUp, exercises, warmDown}
    await fTestsRef.add(fTestData)
    history.goBack();
  }

  return (
    <IonPage>
    <PageHeader title="Add Fitness Test"></PageHeader>
      <IonContent id="ft-pg-bg">
        <IonGrid id="ft-pg-bg">
          <IonRow>
            <IonCol>
              <IonItemDivider id="itm-divider-red">
                <IonLabel>Fitness Test Details</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>

          {/*Title Input Fields & Labels*/ }
          <IonRow id>
            <IonCol >
              <IonItem id="rnd-input">
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput required clearInput="true" position="stacked" pattern="" placeholder="Enter Title" value={title} type="text"
                onIonChange={(e) => setTitle(e.detail.value)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          {/*Time & Date Input Fields & Labels*/ }
          <IonRow>
            <IonCol size="6">
              <IonItem  id="rnd-input">
                <IonLabel position="stacked">Time</IonLabel>
                <IonInput required clearInput="true" position="stacked" placeholder="Enter Time" value={time} type="text" 
                onIonChange={(e) => setTime(e.detail.value)}></IonInput>
                </IonItem>         
            </IonCol>
            <IonCol size="6">
              <IonItem id="rnd-input">
                <IonLabel position="stacked">Date</IonLabel>
                <IonInput required clearInput="true" position="stacked" placeholder="Enter Date" value={date} type="text" 
                onIonChange={(e) => setDate(e.detail.value)}></IonInput>
              </IonItem>          
            </IonCol>
          </IonRow>

          {/*Total Calories Input Fields & Labels*/ }
          <IonRow>
            <IonCol>
            <IonItem id="rnd-input">
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
          <ContentArea required value={exercises} onIonChange={(e) => setExercises(e.detail.value)} txtAreaLbl="Details" placeholderText="Enter Exercise Details"></ContentArea>

          {/*Warm Down Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Warm Down"></ItemDivider>
          <ContentArea value={warmDown} onIonChange={(e) => setWarmDown(e.detail.value)} txtAreaLbl="Details" placeholderText="Enter Warm Down Details"></ContentArea>

          {/* Add Button*/ }
          <IonRow>
            <IonCol>
              <IonLoading isOpen={status.loading}></IonLoading>
              <IonButton onClick={handleAdd} id="btnTheme" expand="block" color="dark" fill="solid" type="submit" >add Fitness Test </IonButton>
            </IonCol>
          </IonRow>
          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AddFitnessTestPage;