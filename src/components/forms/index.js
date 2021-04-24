import React from "react";
import { IonContent, IonInput, IonGrid, IonRow, IonCol,IonLabel, IonItemDivider, IonItem, IonSelect, IonButton, IonLoading} from '@ionic/react';
import ItemDivider from '../../components/textInputs/itemDivider'
import ContentArea from '../../components/textInputs/contentArea'

const Form = ({formTitle, btnTitle, title, setTitle, time, setTime, date, setDate, difficulty, setDifficulty, 
  warmUp, setWarmUp, exercises, setExercises, warmDown, setWarmDown, handleAdd, loading}) => {
  return (
    <IonContent id="bg-col">
        <IonGrid id="bg-col">
          <IonRow>
            <IonCol>
              <IonItemDivider id="itm-divider-red">
                <IonLabel>{formTitle}</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>

          {/*Title Input Fields & Labels*/ }
          <IonRow id>
            <IonCol  size="12">
              <IonItem color="light" id="rnd-input">
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput required clearInput="true" position="stacked" pattern="" placeholder="Enter Title" value={title} type="text"
                onIonChange={setTitle}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          {/*Time & Date Input Fields & Labels*/ }
          <IonRow>
            <IonCol size="6">
              <IonItem color="light" id="rnd-input">
                <IonLabel position="stacked">Time</IonLabel>
                <IonInput required clearInput="true" position="stacked" placeholder="Enter Time" value={time} type="text" 
                onIonChange={setTime}></IonInput>
                </IonItem>         
            </IonCol>
            <IonCol size="6">
              <IonItem color="light" id="rnd-input">
                <IonLabel position="stacked">Date</IonLabel>
                <IonInput required clearInput="true" position="stacked" placeholder="Enter Date" value={date} type="text" 
                onIonChange={setDate}></IonInput>
              </IonItem>          
            </IonCol>
          </IonRow>

          {/*Total Calories Input Fields & Labels*/ }
          <IonRow>
            <IonCol>
            <IonItem color="light" id="rnd-input">
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
          <ItemDivider dividerLabel="Warm Up"></ItemDivider>
          <ContentArea text={warmUp} setText={setWarmUp} txtAreaLbl="Details" placeholderText="Enter Warm Up Details"></ContentArea>

          {/*Exercises Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Exercises"></ItemDivider>
          <ContentArea text={exercises} setText={setExercises} txtAreaLbl="Details" placeholderText="Enter Exercise Details"></ContentArea>

          {/*Warm Down Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Warm Down"></ItemDivider>
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