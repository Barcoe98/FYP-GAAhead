import React, { useState } from "react";
import {
  IonCol,
  IonRow,
  IonContent,
  IonGrid,
  IonButton,
  IonLabel,
  IonPage,
  IonItemDivider,
} from "@ionic/react";
import PageHeader from "../../../components/headers";
import TextInputField from "../../../components/textInputs/textInputField";
import AlertError from "../../../components/alerts/errorAlert/index";

import { firestore } from "../../../firebase";
import { useAuth } from "../../../contexts/authContext";
import { useHistory } from "react-router-dom";

import "../../pages.css";


const AddInjuryPage = () => {

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const { currentUser } = useAuth();
  const history = useHistory();

  const [injury, setInjury] = useState("");
  const [recoveryTime, setRecoveryTime] = useState("");


  const handleAddInjury = async () => {

    if (injury === "") {
      setErrorMessage('No Injury Entered')
      setShowAlert(true)
    }
    else if (recoveryTime === "") {
      setErrorMessage('No Recovery Time Entered')
      setShowAlert(true)
    }
    else {
    const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("injuries")

    const data = { injury, recoveryTime };
    await ref.add(data)
    history.goBack();
    }
  };

  return (
    <IonPage>
      <PageHeader title="Add Injury"></PageHeader>
      <IonContent id="bg-col">
        <IonGrid id="bg-col">
          <IonRow>
            <IonCol>
              <IonItemDivider id="itm-divider-red">
                <IonLabel>Add Injury</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>

           {/*Name Input Fields & Labels*/}
           <IonRow>
           <TextInputField
             label="Injury Type"
             text={injury}
             size="12"
             setText={(e) => setInjury(e.detail.value)}
             placeholder="Enter Injury Type"
             type="text"
           ></TextInputField>
         </IonRow>

          {/*Team Id Input Fields & Labels*/}
          <IonRow>
            <TextInputField
              label="Recovery Time"
              text={recoveryTime}
              size="12"
              setText={(e) => setRecoveryTime(e.detail.value)}
              placeholder="Enter Recovery Time"
              type="text"
            ></TextInputField>
          </IonRow>

          {/* Join Button*/}
          <IonRow>
            <IonCol>
              <IonButton
                onClick={handleAddInjury}
                id="btnTheme"
                expand="block"
                color="dark"
                fill="solid"
                type="submit"
              >
                Add Injury
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

export default AddInjuryPage;
