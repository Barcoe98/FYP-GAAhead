import React from "react";
import { IonContent, IonInput, IonGrid, IonRow, IonCol,IonLabel, IonItemDivider, IonItem, IonSelect, IonButton, IonLoading} from '@ionic/react';
import ItemDivider from '../../components/textInputs/itemDivider'
import ContentArea from '../../components/textInputs/contentArea'
import './form.css'

const Form = ({title, setTitle, time, setTime, date, setDate, difficulty, setDifficulty, 
  warmUp, setWarmUp, exercises, setExercises, warmDown, setWarmDown, handleAdd, loading}) => {
  return (
    <IonContent id="wr-pg-bg">
        <IonGrid id="wr-pg-bg">
          <IonRow>
            <IonCol>
              <IonItemDivider id="itm-divider-red">
                <IonLabel>Workout Details</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>

          {/*Title Input Fields & Labels*/ }
          <IonRow id>
            <IonCol >
              <IonItem id="rnd-input">
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput required clearInput="true" position="stacked" pattern="" placeholder="Enter Title" value={title} type="text"
                onIonChange={setTitle}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          {/*Time & Date Input Fields & Labels*/ }
          <IonRow>
            <IonCol size="6">
              <IonItem  id="rnd-input">
                <IonLabel position="stacked">Time</IonLabel>
                <IonInput required clearInput="true" position="stacked" placeholder="Enter Time" value={time} type="text" 
                onIonChange={setTime}></IonInput>
                </IonItem>         
            </IonCol>
            <IonCol size="6">
              <IonItem id="rnd-input">
                <IonLabel position="stacked">Date</IonLabel>
                <IonInput required clearInput="true" position="stacked" placeholder="Enter Date" value={date} type="text" 
                onIonChange={setDate}></IonInput>
              </IonItem>          
            </IonCol>
          </IonRow>

          {/*Total Calories Input Fields & Labels*/ }
          <IonRow>
            <IonCol>
            <IonItem id="rnd-input">
            <IonLabel>Difficulty</IonLabel>  
            <IonSelect value={difficulty} onIonChange={setDifficulty} placeholder="Select One">  
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
          <ContentArea value={warmUp} onIonChange={setWarmUp} txtAreaLbl="Details" placeholderText="Enter Warm Up Details"></ContentArea>

          {/*Exercises Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Exercises"></ItemDivider>
          <ContentArea required value={exercises} onIonChange={setExercises} txtAreaLbl="Details" placeholderText="Enter Exercise Details"></ContentArea>

          {/*Warm Down Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Warm Down"></ItemDivider>
          <ContentArea value={warmDown} onIonChange={setWarmDown} txtAreaLbl="Details" placeholderText="Enter Warm Down Details"></ContentArea>

          {/* Add Button*/ }
          <IonRow>
            <IonCol>
              <IonLoading isOpen={loading}></IonLoading>
              <IonButton onClick={handleAdd} id="btnTheme" expand="block" color="dark" fill="solid" type="submit" >add Workout </IonButton>
            </IonCol>
          </IonRow>
          
        </IonGrid>
      </IonContent>
      
  );
};

export default Form;