import React, { useState } from "react";
import {
  IonCol,
  IonRow,
  IonContent,
  IonGrid,
  IonLoading,
  IonButton,
  IonLabel,
  IonPage,
  IonItemDivider,
} from "@ionic/react";
import PageHeader from "../../components/headers";
import TextInputField from "../../components/textInputs/textInputField";
import AlertError from "../../components/alerts/errorAlert";

import "../pages.css";

const AddFitnessTestResultsPage = () => {
  
  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  //TODO add validation
  const [time, setTime] = useState("");
  const [name, setName] = useState("");


  const handleSaveResults = async () => {
      const data = {
        name,
        time,
      };
  
      if (name === "") {
        setErrorMessage('No Name Entered')
        setShowAlert(true)
      }
      else if (time === "") {
        setErrorMessage('No Time Entered')
        setShowAlert(true)
      }
      else {
        // const ref = firestore
        // .collection("users")
        // .doc(currentUser?.uid)
        // .collection("fitness_tests");
  
        // await ref.add(data);
        // history.goBack();
        console.log('success')
      }
    };

  return (
    <IonPage>
      <PageHeader title="Add Fitness Test"></PageHeader>
      <IonContent id="ft-pg-bg">
        <IonGrid id="ft-pg-bg">
          <IonRow>
            <IonCol>
              <IonItemDivider id="itm-divider-red">
                <IonLabel>Fitness Test Details</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>

          {/*Name Input Fields & Labels*/}
          <IonRow>
            <TextInputField
              label="Name"
              text={name}
              size="12"
              setText={(e) => setName(e.detail.value)}
              placeholder="Enter Name"
              type="text"
            ></TextInputField>
          </IonRow>

          {/*Time Input Fields & Labels*/}
          <IonRow>
            <TextInputField
              label="Test Time"
              text={time}
              size="12"
              setText={(e) => setTime(e.detail.value)}
              placeholder="Enter Time"
              type="text"
            ></TextInputField>
          </IonRow>

          {/* Add Button*/}
          <IonRow>
            <IonCol>
              <IonButton
                onClick={handleSaveResults}
                id="btnTheme"
                expand="block"
                color="dark"
                fill="solid"
                type="submit">
                Save Results
              </IonButton>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='Please Fill All Required Fields'
        showAlert={showAlert} 
        msg={errorMessage}>
      </AlertError>

    </IonPage>
  );
};

export default AddFitnessTestResultsPage;
