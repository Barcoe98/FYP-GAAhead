import React from "react";
import { IonContent, IonInput, IonGrid, IonRow, IonCol,IonLabel, IonItem, IonButton } from '@ionic/react';
import ItemDividerBlue from '../../textComponents/dividerHeaders/itemDividerBlue'
import FormInputArea from '../../textInputs/formInputArea'
import DateInputField from "../../textInputs/dateInputField";

import './diary.css'

const AddJournalForm = ({ imgSrc, handleImgChange, btnTitle, title, setTitle, date, setDate, 
  breakfast, setBreakfast, lunch, setLunch, dinner, setDinner, supper, setSupper, snacks, setSnacks, 
  handleAdd, breakfastCal, setBreakfastCal, lunchCal, setLunchCal, dinnerCal, setDinnerCal, 
  supperCal, setSupperCal, snacksCal, setSnacksCal,
  steps, water, sleep, ttlCal, setSteps, setWater, setSleep, setTtlCal}) => {
  return (
    <IonContent id="wr-pg-bg">
      <IonGrid id="wr-pg-bg">
         
        {/*Title Input Fields & Labels*/ }
      <IonRow>
        <IonCol  size="12">
          <IonItem color="primary" id="rnd-input">
            <IonLabel position="stacked">Image</IonLabel>
            <img id="placeholderImg" src={imgSrc}  alt ="PlaceholderImage"></img>
            <input id="imgInput" type="file" accept="image/*" onChange={handleImgChange}></input>
          </IonItem>
        </IonCol>
      </IonRow>

      {/*Title Input Fields & Labels*/ }
      <IonRow>
        <IonCol  size="12">
          <IonItem color="primary" id="rnd-input">
            <IonLabel position="stacked">Title</IonLabel>
            <IonInput required clearInput="true" position="stacked" pattern="" placeholder="Enter Title" value={title} type="text"
            onIonChange={setTitle}></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>

      
      {/*Total Cal & Date Input Fields & Labels*/ }
      <IonRow>
        <DateInputField 
          label="Date" 
          size="6" 
          text={date}
          setText={setDate}
          placeholderText="Date"
        />

        <IonCol  size="6">
        <IonItem color="primary" id="rnd-input">
          <IonLabel position="stacked">Total Calories</IonLabel>
          <IonInput required clearInput="true" position="stacked" pattern="" placeholder="Enter Calories" value={ttlCal} type="number"
          onIonChange={setTtlCal}></IonInput>
        </IonItem>
      </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="4">
          <IonItem color="primary" id="rnd-input">
            <IonLabel position="stacked">Water</IonLabel>
            <IonInput required clearInput="true" position="stacked" placeholder="Enter Water" value={water} type="number" 
            onIonChange={setWater}></IonInput>
            </IonItem>         
        </IonCol>

        <IonCol size="4">
          <IonItem color="primary" id="rnd-input">
            <IonLabel position="stacked">Steps</IonLabel>
            <IonInput required clearInput="true" position="stacked" placeholder="Enter Steps" value={steps} type="number" 
            onIonChange={setSteps}></IonInput>
          </IonItem>          
        </IonCol>

        <IonCol size="4">
          <IonItem color="primary" id="rnd-input">
            <IonLabel position="stacked">Sleep</IonLabel>
            <IonInput required clearInput="true" position="stacked" placeholder="Enter Hrs of sleep" value={sleep} type="number" 
            onIonChange={setSleep}></IonInput>
          </IonItem>          
        </IonCol>
      </IonRow>

      {/*Breakfast Input Fields & Labels*/ }
      <ItemDividerBlue dividerLabel="Breakfast"></ItemDividerBlue>
      <FormInputArea cal={breakfastCal} setCal={setBreakfastCal} meal={breakfast} setMeal={setBreakfast} 
        placeholderTextCal="Enter Calories for Breakfast" placeholderTextMeal="Enter Food Details for Breakfast">
      </FormInputArea>

      {/*Lunch Input Fields & Labels*/ }
      <ItemDividerBlue dividerLabel="Lunch"></ItemDividerBlue>
      <FormInputArea cal={lunchCal} setCal={setLunchCal} meal={lunch} setMeal={setLunch} 
        placeholderTextCal="Enter Calories for Lunch" placeholderTextMeal="Enter Food Details for Lunch">
      </FormInputArea>

      {/*Dinner Input Fields & Labels*/ }
      <ItemDividerBlue dividerLabel="Dinner"></ItemDividerBlue>
      <FormInputArea cal={dinnerCal} setCal={setDinnerCal} meal={dinner} setMeal={setDinner} 
        placeholderTextCal="Enter Calories for Dinner" placeholderTextMeal="Enter Food Details for Dinner">
      </FormInputArea>

      {/*Supper Input Fields & Labels*/ }
      <ItemDividerBlue dividerLabel="Supper"></ItemDividerBlue>
      <FormInputArea cal={supperCal} setCal={setSupperCal} meal={supper} setMeal={setSupper} 
        placeholderTextCal="Enter Calories for Supper" placeholderTextMeal="Enter Food Details for Supper">
      </FormInputArea>

      {/*Snacks Input Fields & Labels*/ }
      <ItemDividerBlue dividerLabel="Snacks"></ItemDividerBlue>
      <FormInputArea cal={snacksCal} setCal={setSnacksCal} meal={snacks} setMeal={setSnacks} 
        placeholderTextCal="Enter Calories for Snacks" placeholderTextMeal="Enter Food Details for Snacks">
      </FormInputArea>


      {/* Add Button*/ }
      <IonRow>
        <IonCol>
          <IonButton onClick={handleAdd} id="btnTheme" expand="block" color="dark" fill="solid" type="submit" >{btnTitle}</IonButton>
        </IonCol>
      </IonRow>
      
    </IonGrid>
  </IonContent>
      
  );
};

export default AddJournalForm;