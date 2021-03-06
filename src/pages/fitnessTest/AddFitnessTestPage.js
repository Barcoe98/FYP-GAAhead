import React, {useState} from "react";
import { IonSelect, IonCol, IonRow, IonContent, IonGrid, IonLoading ,IonButton, IonInput, IonLabel, IonItem, IonList, IonPage, IonRange, IonItemDivider, IonTextarea, IonIcon, IonDatetime} from '@ionic/react';
import PageHeader from '../../components/headers'
import ItemDivider from '../../components/textInputs/itemDivider'
import './fitnessTest.css';


const AddFitnessTestPage = () => {

  const [ title, setTitle ] = useState("")
  const [ date, setDate ] = useState("")
  const [ time, setTime ] = useState("")
  const [ difficulty, setDifficulty ] = useState("")
  const [ lunchCal, setLunchCal ] = useState("")
  const [ dinnerCal, setDinnerCal ] = useState("")


  const [ status, setStatus ] = useState({loading: false, emailError: false, pwordError: false})



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
              onIonChange={(event) => setTitle(event.detail.value)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        {/*Time & Date Input Fields & Labels*/ }
        <IonRow>
          <IonCol size="6">
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Time</IonLabel>
              <IonDatetime displayFormat="h:mm A" pickerFormat="h:mm A" value={time} placeholder="Select Time" ></IonDatetime>
            </IonItem>         
          </IonCol>
          
          <IonCol size="6">
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Date</IonLabel>
              <IonDatetime value={date} placeholder="Select Date" ></IonDatetime>
            </IonItem>          
          </IonCol>
        </IonRow>

        {/*Total Calories Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
          <IonItem color="dark" id="rnd-input">
          <IonLabel>Difficulty</IonLabel>  
          <IonSelect placeholder="Select One">  
            <ion-select-option value="e">Easy</ion-select-option>  
            <ion-select-option value="m">Moderate</ion-select-option>  
            <ion-select-option value="h">Hard</ion-select-option>  
            <ion-select-option value="vh">Very Hrad</ion-select-option> 
          </IonSelect>  
          </IonItem>
          </IonCol>
        </IonRow>
        
        <IonRow>
          <IonCol>
            <IonItemDivider id="itm-divider-ylw">
              <IonLabel >
                Warm Up
              </IonLabel>
            </IonItemDivider>
          </IonCol>
        </IonRow>

        {/*Warm Up Stretches Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Details</IonLabel>
              <IonTextarea placeholder="Enter Warm Up Stretches" rows="5" type="text" required ></IonTextarea>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItemDivider id="itm-divider-grn">
              <IonLabel >
                Exercises
              </IonLabel>
            </IonItemDivider>
          </IonCol>
        </IonRow>

        {/*Exercises Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Details</IonLabel>
              <IonTextarea placeholder="Enter Fitness Test Exercises" rows="5" type="text" required ></IonTextarea>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItemDivider id="itm-divider-teal">
              <IonLabel >
                Warm Down
              </IonLabel>
            </IonItemDivider>
          </IonCol>
        </IonRow>

        {/*Warm Down Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Details</IonLabel>
              <IonTextarea placeholder="Enter Warm Down Stretches" rows="5" type="text" required ></IonTextarea>
            </IonItem>
          </IonCol>
        </IonRow>


        
        {/* Add Button*/ }
        <IonRow>
          <IonCol>
          <IonLoading isOpen={status.loading}></IonLoading>
            <IonButton id="btnTheme" expand="block" color="dark" fill="solid" type="submit" >
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