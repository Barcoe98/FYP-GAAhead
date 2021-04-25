import React from "react";
import { IonContent, IonInput, IonGrid, IonRow, IonCol,IonLabel, IonItemDivider, IonItem, IonButton } from '@ionic/react';
import ItemDivider from '../../textInputs/itemDivider'
import FormInputArea from '../../textInputs/formInputArea'
import './diary.css'

const AddJournalForm = ({imgUrl, imgSrc, handleImgChange, formTitle, btnTitle, title, setTitle, date, setDate, 
  breakfast, setBreakfast, lunch, setLunch, dinner, setDinner, supper, setSupper, snacks, setSnacks, 
  handleAdd, breakfastCal, setBreakfastCal, lunchCal, setLunchCal, dinnerCal, setDinnerCal, 
  supperCal, setSupperCal, snacksCal, setSnacksCal,
  steps, water, sleep, ttlCal, setSteps, setWater, setSleep, setTtlCal}) => {
  return (
    <IonContent id="wr-pg-bg">
        <IonGrid id="wr-pg-bg">
          <IonRow>
            <IonCol>
              <IonItemDivider id="itm-divider-red">
                <IonLabel>{formTitle}</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>

           {/*Title Input Fields & Labels*/ }
           <IonRow>
            <IonCol  size="12">
            <IonItem color="light" id="rnd-input">
              <IonLabel position="stacked">Image</IonLabel>
              
              <img id="placeholderImg" src={imgSrc} 
                alt ="PlaceholderImage">
              </img>
              <input id="imgInput" type="file" accept="image/*" onChange={handleImgChange}></input>
            </IonItem>
          </IonCol>
         </IonRow>

           {/*Title Input Fields & Labels*/ }
           <IonRow>
           <IonCol  size="12">
             <IonItem color="light" id="rnd-input">
               <IonLabel position="stacked">Title</IonLabel>
               <IonInput required clearInput="true" position="stacked" pattern="" placeholder="Enter Title" value={title} type="text"
               onIonChange={setTitle}></IonInput>
             </IonItem>
           </IonCol>
         </IonRow>

          
          {/*Total Cal & Date Input Fields & Labels*/ }
          <IonRow>
            <IonCol size="6">
              <IonItem color="light" id="rnd-input">
                <IonLabel position="stacked">Date</IonLabel>
                <IonInput required clearInput="true" position="stacked" placeholder="Enter Date" value={date} type="text" 
                onIonChange={setDate}></IonInput>
              </IonItem>          
            </IonCol>

            <IonCol  size="6">
            <IonItem color="light" id="rnd-input">
              <IonLabel position="stacked">Total Calories</IonLabel>
              <IonInput required clearInput="true" position="stacked" pattern="" placeholder="Enter Calories" value={ttlCal} type="text"
              onIonChange={setTtlCal}></IonInput>
            </IonItem>
          </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="4">
              <IonItem color="light" id="rnd-input">
                <IonLabel position="stacked">Water</IonLabel>
                <IonInput required clearInput="true" position="stacked" placeholder="Enter Water" value={water} type="text" 
                onIonChange={setWater}></IonInput>
                </IonItem>         
            </IonCol>

            <IonCol size="4">
              <IonItem color="light" id="rnd-input">
                <IonLabel position="stacked">Steps</IonLabel>
                <IonInput required clearInput="true" position="stacked" placeholder="Enter Steps" value={steps} type="text" 
                onIonChange={setSteps}></IonInput>
              </IonItem>          
            </IonCol>

            <IonCol size="4">
              <IonItem color="light" id="rnd-input">
                <IonLabel position="stacked">Sleep</IonLabel>
                <IonInput required clearInput="true" position="stacked" placeholder="Enter Hrs of sleep" value={sleep} type="text" 
                onIonChange={setSleep}></IonInput>
              </IonItem>          
            </IonCol>
          </IonRow>

          {/*Breakfast Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Breakfast"></ItemDivider>
          <FormInputArea cal={breakfastCal} setCal={setBreakfastCal} meal={breakfast} setMeal={setBreakfast} 
            placeholderTextCal="Enter Calories for Breakfast" placeholderTextMeal="Enter Food Details for Breakfast">
          </FormInputArea>

          {/*Lunch Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Lunch"></ItemDivider>
          <FormInputArea cal={lunchCal} setCal={setLunchCal} meal={lunch} setMeal={setLunch} 
            placeholderTextCal="Enter Calories for Lunch" placeholderTextMeal="Enter Food Details for Lunch">
          </FormInputArea>

          {/*Dinner Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Dinner"></ItemDivider>
          <FormInputArea cal={dinnerCal} setCal={setDinnerCal} meal={dinner} setMeal={setDinner} 
            placeholderTextCal="Enter Calories for Dinner" placeholderTextMeal="Enter Food Details for Dinner">
          </FormInputArea>

          {/*Supper Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Supper"></ItemDivider>
          <FormInputArea cal={supperCal} setCal={setSupperCal} meal={supper} setMeal={setSupper} 
            placeholderTextCal="Enter Calories for Supper" placeholderTextMeal="Enter Food Details for Supper">
          </FormInputArea>

          {/*Snacks Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Snacks"></ItemDivider>
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