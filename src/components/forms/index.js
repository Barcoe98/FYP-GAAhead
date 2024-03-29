import React from "react";
import { IonContent, IonInput, IonGrid, IonRow, IonCol,IonLabel, IonItemDivider, IonItem, IonSelect, IonButton} from '@ionic/react';
import ItemDividerYlw from '../../components/textComponents/dividerHeaders/itemDividerYlw'
import ContentArea from '../../components/textInputs/contentArea'
import DateInputField from "../textInputs/dateInputField";
import TimeInputField from "../textInputs/timeInputField";

const Form = ({formTitle, btnTitle, title, setTitle, time, setTime, date, setDate, difficulty, setDifficulty, 
  warmUp, setWarmUp, exercises, setExercises, warmDown, setWarmDown, handleAdd, loading}) => {
  return (
    <IonContent id="bg-col">
        <IonGrid id="bg-col">
        <ItemDividerYlw dividerLabel={formTitle}></ItemDividerYlw>

          {/*Title Input Fields & Labels*/ }
          <IonRow id>
            <IonCol  size="12">
              <IonItem color="dark" id="rnd-input">
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput required clearInput="true" position="stacked" pattern="" placeholder="Enter Title" value={title} type="text"
                onIonChange={setTitle}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

            {/* Date & Time Input Fields & Labels*/}
          <IonRow>
          <DateInputField 
            label="Date" 
            size="6" 
            text={date}
            setText={setDate}
            placeholderText="Date"
          />
          <TimeInputField
            label="Time" 
            size="6" 
            text={time}
            setText={setTime}
            placeholderText="Time"
          />
         </IonRow>

          {/*Total Calories Input Fields & Labels*/ }
          <IonRow>
            <IonCol>
            <IonItem color="dark" id="rnd-input">
            <IonLabel>Difficulty</IonLabel>  
            <IonSelect color="secondary" value={difficulty} onIonChange={setDifficulty} placeholder="Select One">  
              <ion-select-option color="dark"value="easy">Easy</ion-select-option>  
              <ion-select-option color="dark" value="moderate">Moderate</ion-select-option>  
              <ion-select-option color="dark" value="hard">Hard</ion-select-option>  
              <ion-select-option color="dark" value="very hard">Very Hard</ion-select-option> 
            </IonSelect>  
            </IonItem>
            </IonCol>
          </IonRow>

          {/*Warm Up Stretches Input Fields & Labels*/ }
          <ItemDividerYlw dividerLabel="Warm Up"></ItemDividerYlw>
          <ContentArea text={warmUp} setText={setWarmUp} txtAreaLbl="Details" placeholderText="Enter Warm Up Details"></ContentArea>

          {/*Exercises Input Fields & Labels*/ }
          <ItemDividerYlw dividerLabel="Exercises"></ItemDividerYlw>
          <ContentArea text={exercises} setText={setExercises} txtAreaLbl="Details" placeholderText="Enter Exercise Details"></ContentArea>

          {/*Warm Down Input Fields & Labels*/ }
          <ItemDividerYlw dividerLabel="Warm Down"></ItemDividerYlw>
          <ContentArea text={warmDown} setText={setWarmDown} txtAreaLbl="Details" placeholderText="Enter Warm Down Details"></ContentArea>

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

export default Form;