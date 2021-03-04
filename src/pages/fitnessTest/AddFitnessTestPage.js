import React, {useState} from "react";
import { IonContent, IonLoading ,IonButton, IonInput, IonLabel, IonItem, IonList, IonPage, IonRange, IonItemDivider, IonTextarea} from '@ionic/react';
import PageHeader from '../../components/headers'
import './fitnessTest.css';


const AddFitnessTestPage = () => {

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
    <IonPage>
    <PageHeader title="Add Fitness Test"></PageHeader>
      <IonContent>
        <IonList>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Title</IonLabel>
          <IonInput value={title} type="text" required
          onIonChange={(event) => setTitle(event.detail.value)}></IonInput>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Date</IonLabel>
          <IonInput value={date} type="date" required
          onIonChange={(event) => setDate(event.detail.value)} ></IonInput>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Time</IonLabel>
          <IonInput value={time} type="time" required
          onIonChange={(event) => setTime(event.detail.value)}></IonInput>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Total Calories</IonLabel>
          <IonInput value={totalCalories} type="number" required
          onIonChange={(event) => setTotalCalories(event.detail.value)} ></IonInput>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Steps</IonLabel>
          <IonInput value={steps} type="number" required
          onIonChange={(event) => setSteps(event.detail.value)} ></IonInput>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Litres of Water</IonLabel>
          <IonInput value={litresWater} type="number" required
          onIonChange={(event) => setLitresWater(event.detail.value)} ></IonInput>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Hours of Sleep</IonLabel>
          <IonInput value={hrsSleep} type="text" required
          onIonChange={(event) => setHrsSleep(event.detail.value)} ></IonInput>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Breakfast Calories</IonLabel>
          <IonInput value={breakfastCal} type="text" required
          onIonChange={(event) => setBreakfastCal(event.detail.value)} ></IonInput>
        </IonItem>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Breakfast</IonLabel>
          <IonTextarea value={breakfastDesc} type="text" required
          onIonChange={(event) => setBreakfastDesc(event.detail.value)} ></IonTextarea>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Lunch Calories</IonLabel>
          <IonInput value={lunchCal} type="text" required
          onIonChange={(event) => setLunchCal(event.detail.value)} ></IonInput>
        </IonItem>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Lunch</IonLabel>
          <IonTextarea value={lunchDesc} type="text" required
          onIonChange={(event) => setLunchDesc(event.detail.value)} ></IonTextarea>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Dinner Calories</IonLabel>
          <IonInput value={dinnerCal} type="text" required
          onIonChange={(event) => setDinnerCal(event.detail.value)} ></IonInput>
        </IonItem>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Dinner</IonLabel>
          <IonTextarea value={dinnerDesc} type="text" required
          onIonChange={(event) => setDinnerDesc(event.detail.value)} ></IonTextarea>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Supper Calories</IonLabel>
          <IonInput value={supperCal} type="text" required
          onIonChange={(event) => setSupperCal(event.detail.value)} ></IonInput>
        </IonItem>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Supper</IonLabel>
          <IonTextarea value={supperDesc} type="text" required
          onIonChange={(event) => setSupperDesc(event.detail.value)} ></IonTextarea>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Snacks Calories</IonLabel>
          <IonInput value={snacksCal} type="text" required
          onIonChange={(event) => setSnacksCal(event.detail.value)} ></IonInput>
        </IonItem>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Snacks</IonLabel>
          <IonTextarea value={snacksDesc} type="text" required
          onIonChange={(event) => setSnacksDesc(event.detail.value)} ></IonTextarea>
        </IonItem>

        <IonItemDivider>Dual Knobs</IonItemDivider>
          <IonItem>
            <IonRange dualKnobs={true} min={0} max={60} step={3} snaps={true} />
          </IonItem>
          <IonItem>
            <IonLabel>Value: lower: 0 upper: 200</IonLabel>
          </IonItem>

        

        <IonLoading isOpen={status.loading}></IonLoading>
        <IonButton id="btnTheme" expand="block" color="dark" fill="solid" type="submit" >
          add Fitness Test 
        </IonButton>

        <IonItemDivider>With Snaps & Ticks</IonItemDivider>
          <IonItem>
            <IonRange min={1000} max={2000} step={100} snaps={true} color="secondary" />
          </IonItem>
          
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AddFitnessTestPage;