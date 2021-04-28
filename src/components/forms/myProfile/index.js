import React from "react";
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import TextInputField from '../../textInputs/textInputField'
import ImageInputField from '../../textInputs/imageInputField'

import "../diary/diary.css"
const MyProfileForm = ({ imgSrc, handleImgChange, btnTitle, handleAdd, 
   fullName, setFullName, age, setAge, weight, setWeight, height, setHeight, position, setPosition,
   number, setNumber, email, setEmail}) => {
  return (
    <IonContent id="wr-pg-bg">
      <IonGrid id="wr-pg-bg">
         
      {/*Profile Image Input Fields & Labels*/ }
      <IonRow>
        <ImageInputField label="Profile Image" imgSrc={imgSrc} handleImgChange={handleImgChange} ></ImageInputField>
      </IonRow>

      {/*Name Input Fields & Labels*/ }
      <IonRow>
        <TextInputField size="12" label="Name" text={fullName} setText={setFullName} placeholderText="Enter Name" type="text"></TextInputField>
      </IonRow>

      {/*Age Input Fields & Labels*/ }
      <IonRow>
        <TextInputField size="12" label="Age" def text={age} setText={setAge} onClick placeholderText="Enter Age" type="text"></TextInputField>
      </IonRow>

      {/*Weigh & Height Input Fields & Labels*/ }
      <IonRow>
        <TextInputField size="6" label="Weight" text={weight} setText={setWeight} placeholderText="Enter Weight" type="number"></TextInputField>
        <TextInputField size="6" label="Height" text={height} setText={setHeight} placeholderText="Enter Height" type="number"></TextInputField>
      </IonRow>

      {/*Position Input Fields & Labels*/ }
      <IonRow>
        <TextInputField size="12" label="Position" text={position} setText={setPosition} onClick placeholderText="Enter Position" type="text"></TextInputField>
      </IonRow>

      {/*Phone Number Input Fields & Labels*/ }
      <IonRow>
        <TextInputField size="12" label="Phone Number" text={number} setText={setNumber} placeholderText="Enter Number" type="tel"></TextInputField>
      </IonRow>

      {/*Email Input Fields & Labels*/ }
      <IonRow>
        <TextInputField size="12" label="Email" text={email} setText={setEmail} placeholderText="Enter Email" disabled="true" type="email"></TextInputField>
      </IonRow>

      {/* Add Button*/}
      <IonRow>
        <IonCol>
          <IonButton onClick={handleAdd} id="btnTheme" expand="block" color="dark" fill="solid" type="submit" >{btnTitle}</IonButton>
        </IonCol>
      </IonRow>
      
    </IonGrid>
  </IonContent>
      
  );
};

export default MyProfileForm;