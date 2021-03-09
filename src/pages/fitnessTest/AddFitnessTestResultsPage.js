import React, {useState} from "react";
import { IonSelect, IonCol, IonRow, IonContent, IonGrid, IonLoading ,IonButton, IonInput, IonLabel, IonItem, IonPage, IonItemDivider, IonDatetime} from '@ionic/react';
import PageHeader from '../../components/headers'
import ItemDivider from '../../components/textInputs/itemDivider'
import ContentArea from '../../components/textInputs/contentArea'

import {firestore} from '../../firebase'
import { useAuth } from '../../contexts/authContext'


const AddFitnessTestResultsPage = () => {

  const [ date, setDate ] = useState("")
  const [ time, setTime ] = useState("")
  const [ exercises, setExercises ] = useState("")

  const [ status, setStatus ] = useState({loading: false, emailError: false, pwordError: false})

  const handleSaveResults = async () => {
    const fTestsResultsRef = firestore.collection('fitness_tests').collection('results')
    const fTestResultsData = {date, time, exercises}
    const fTestRef = await fTestsResultsRef.add(fTestResultsData)
    console.log('Added', fTestRef.id )
  }

  return (
    <IonPage >
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

          {/*Time Input Fields & Labels*/ }
          <IonRow>
            <IonCol>
              <IonItem id="rnd-input">
                <IonLabel position="stacked">Time</IonLabel>
                <IonInput position="stacked" placeholder="Enter Title" value={time} type="text" required onIonChange={(e) => setTime(e.detail.value)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
                  
          {/* Add Button*/ }
          <IonRow>
            <IonCol>
              <IonLoading isOpen={status.loading}></IonLoading>
              <IonButton onClick={handleSaveResults} id="btnTheme" expand="block" color="dark" fill="solid" type="submit" >Save Results</IonButton>
            </IonCol>
          </IonRow>
          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AddFitnessTestResultsPage;