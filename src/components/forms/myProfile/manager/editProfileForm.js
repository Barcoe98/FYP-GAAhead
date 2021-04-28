import React from "react";
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import TextInputField from '../../../textInputs/textInputField'
import ImageInputField from '../../../textInputs/imageInputField'

const EditMyProfileForm = ({ imgSrc, handleImgChange, btnTitle, handleAdd, teamName, setTeamName, fullName, setFullName}) => {
  return (
    <IonContent id="wr-pg-bg">
      <IonGrid id="wr-pg-bg">
         
      {/*Profile Image Input Fields & Labels*/ }
      <IonRow>
        <ImageInputField label="Team Crest" imgSrc={imgSrc} handleImgChange={handleImgChange} ></ImageInputField>
      </IonRow>

      {/*Name Input Fields & Labels*/ }
      <IonRow>
        <TextInputField size="12" label="Name" text={fullName} setText={setFullName} placeholderText="Enter Name" type="text"></TextInputField>
      </IonRow>

       {/*Name Input Fields & Labels*/ }
      <IonRow>
        <TextInputField size="12" label="Team Name" text={teamName} setText={setTeamName} placeholderText="Enter Team Name" type="text"></TextInputField>
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

export default EditMyProfileForm;