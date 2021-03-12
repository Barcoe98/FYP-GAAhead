import React, {useState, useEffect} from "react";
import { IonSelect, IonCol, IonRow, IonContent, IonGrid, IonLoading ,IonButton, IonInput, IonLabel, IonItem, IonPage, IonItemDivider, IonDatetime} from '@ionic/react';
import PageHeader from '../../components/headers'
import ItemDivider from '../../components/textInputs/itemDivider'
import ContentArea from '../../components/textInputs/contentArea'

import {firestore} from '../../firebase'
import { useParams, useHistory } from "react-router-dom";
import { useAuth } from '../../contexts/authContext'


const AddFitnessTestResultsPage = () => {

  const [ status, setStatus ] = useState({loading: false, emailError: false, pwordError: false})

  const {id} = useParams()
  const [ time, setTime ] = useState("")
  const { currentUser } = useAuth()
  const [ userType, setUserType ] = useState("")
  const userId = currentUser?.uid


 
  useEffect(() => {
    const userTypeRef = firestore.collection('users').doc(userId)
  .collection('my_profile').doc('eFhe5pzwn8NoyS55FghW')
  
    userTypeRef.get(id).then(doc => {
      const userType = { id: doc.id, ...doc.data()}
      setUserType(userType);
    });
  }, [id]);

  const handleSaveResults = async () => {

    console.log(userType?.userType)
    console.log(userId)

    // const fTestsResultsRef = firestore.collection('fitness_tests').collection('results')
    // const fTestsRef = firestore.collection('users').doc(currentUser?.uid)
    // //.collection('fitness_tests').doc(id).collection(results)

    // const fTestResultsData = {date, time, exercises}
    // const fTestRef = await fTestsResultsRef.add(fTestResultsData)
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