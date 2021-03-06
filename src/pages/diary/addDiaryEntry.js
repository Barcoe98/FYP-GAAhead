import React, {useState} from "react";
import { IonCol, IonRow, IonContent, IonGrid, IonLoading ,IonButton, IonInput, IonLabel, IonItem, IonList, IonPage, IonRange, IonItemDivider, IonTextarea, IonIcon, IonDatetime} from '@ionic/react';
import { barbell, calendar, flame, time } from "ionicons/icons";
import PageHeader from '../../components/headers'
import './fitnessTest.css';


const AddDiaryEntryPage = () => {

  const [ title, setTitle ] = useState("")
  const [ date, setDate ] = useState("")
  const [ time, setTime ] = useState("")
  
  const [ totalCalories, setTotalCalories ] = useState("")
  const [ steps, setSteps ] = useState("")
  const [ litresWater, setLitresWater ] = useState("")
  const [ hrsSleep, setHrsSleep ] = useState("")

  const [ breakfastCal, setBreakfastCal ] = useState("")
  const [ lunchCal, setLunchCal ] = useState("")
  const [ dinnerCal, setDinnerCal ] = useState("")
  const [ supperCal, setSupperCal ] = useState("")
  const [ snacksCal, setSnacksCal ] = useState("")

  const [ breakfastDesc, setBreakfastDesc ] = useState("")
  const [ lunchDesc, setLunchDesc ] = useState("")
  const [ dinnerDesc, setDinnerDesc] = useState("")
  const [ supperDesc, setSupperDesc] = useState("")
  const [ snacksDesc, setSnacksDesc ] = useState("")

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
              <IonDatetime placeholder="Select Time" ></IonDatetime>
            </IonItem>         
          </IonCol>
          
          <IonCol size="6">
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Date</IonLabel>
              <IonDatetime  placeholder="Select Date" ></IonDatetime>
            </IonItem>          
          </IonCol>
        </IonRow>

        {/*Total Calories Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Total Calories</IonLabel>
              <IonInput value={totalCalories} type="number" required
              onIonChange={(e) => setTotalCalories(e.detail.value)} >
              </IonInput>
            </IonItem>   
          </IonCol>
        </IonRow>

        {/*Water Input Fields & Labels*/ }
        <IonRow>
          <IonCol size="4">
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Water</IonLabel>
              <IonInput placeholder="Enter Litres of Water Drank" value={litresWater} type="number" required
              onIonChange={(e) => setLitresWater(e.detail.value)} ></IonInput>
            </IonItem>
          </IonCol>

          {/*Steps Input Fields & Labels*/ }
          <IonCol size="4">
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="floating">Steps</IonLabel>
              <IonInput placeholder="Enter Steps" value={steps} type="number" required
              onIonChange={(e) => setSteps(e.detail.value)} ></IonInput>
            </IonItem>    
          </IonCol>

          {/*Hours of Sleep Input Fields & Labels*/ }
          <IonCol size="4">
            <IonItem color="dark" id="rnd-input">
            <IonLabel position="stacked">Sleep</IonLabel>
            <IonInput placeholder="Enter Hours Slept" value={hrsSleep} type="text" required
            onIonChange={(e) => setHrsSleep(e.detail.value)} ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItemDivider id="itm-divider-ylw">
              <IonLabel >
                Breakfast
              </IonLabel>
            </IonItemDivider>
          </IonCol>
        </IonRow>

        {/*Breakfast  Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Calories</IonLabel>
              <IonInput placeholder="Enter Breakfast Calories" value={breakfastCal} type="text" required
              onIonChange={(e) => setBreakfastCal(e.detail.value)} ></IonInput>
              <IonLabel position="stacked">Food Details</IonLabel>
              <IonTextarea placeholder="Enter Food Details for Breakfast" value={breakfastDesc} rows="5" type="text" required
              onIonChange={(e) => setBreakfastDesc(e.detail.value)} ></IonTextarea>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItemDivider id="itm-divider-org">
              <IonLabel>
                Lunch
              </IonLabel>
            </IonItemDivider>
          </IonCol>
        </IonRow>

        {/*Lunch  Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Calories</IonLabel>
              <IonInput placeholder="Enter Lunch Calories" value={lunchCal} type="text" required
              onIonChange={(e) => setLunchCal(e.detail.value)} ></IonInput>
              <IonLabel position="stacked">Food Details</IonLabel>
              <IonTextarea  placeholder="Enter Food Details for lunch" rows="5" value={lunchDesc} type="text" required
              onIonChange={(e) => setLunchDesc(e.detail.value)} ></IonTextarea>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItemDivider id="itm-divider-grn">
              <IonLabel>
                Dinner
              </IonLabel>
            </IonItemDivider>
          </IonCol>
        </IonRow>

        {/*Dinner Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Calories</IonLabel>
              <IonInput placeholder="Enter Dinner Calories" value={dinnerCal} type="text" required
              onIonChange={(e) => setDinnerCal(e.detail.value)} ></IonInput>
              <IonLabel position="stacked">Food Details</IonLabel>
              <IonTextarea placeholder="Enter Food Details for Dinner" rows="5" value={dinnerDesc} type="text" required
              onIonChange={(e) => setDinnerDesc(e.detail.value)} ></IonTextarea>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItemDivider id="itm-divider-teal">
              <IonLabel>
                Evening Meal
              </IonLabel>
            </IonItemDivider>
          </IonCol>
        </IonRow>

        {/*Evening Meal Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
            <IonItem color="dark" id="rnd-input">
              <IonLabel  position="stacked">Calories</IonLabel>
              <IonInput placeholder="Enter Evening Meal Calories" value={supperCal} type="text"
              onIonChange={(e) => setSupperCal(e.detail.value)} ></IonInput>
              <IonLabel position="stacked">Food Details</IonLabel>
              <IonTextarea placeholder="Enter Food Details for Evening Meal" rows="5" value={supperDesc} type="text"
              onIonChange={(e) => setSupperDesc(e.detail.value)} ></IonTextarea>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItemDivider id="itm-divider-prpl">
              <IonLabel>
                Daily Snacks
              </IonLabel>
            </IonItemDivider>
          </IonCol>
        </IonRow>
      
        {/*Daily Snack Input Fields & Labels*/ }
        <IonRow>
          <IonCol>
            <IonItem color="dark" id="rnd-input">
              <IonLabel position="stacked">Calories</IonLabel>
              <IonInput placeholder="Enter Daily Snack Calories" value={snacksCal} type="text" required
              onIonChange={(e) => setSnacksCal(e.detail.value)} ></IonInput>
              <IonLabel position="stacked">Food Details</IonLabel>
              <IonTextarea placeholder="Enter Food Details for Daily Snacks" rows="5" value={snacksDesc} type="text" required
              onIonChange={(e) => setSnacksDesc(e.detail.value)} ></IonTextarea>
            </IonItem>
          </IonCol>
        </IonRow>

        
        {/*Button Input Fields & Labels*/ }
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

export default AddDiaryEntryPage;