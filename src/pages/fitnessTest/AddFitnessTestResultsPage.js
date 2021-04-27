import React, { useState, useEffect } from "react";
import { IonCol, IonRow,  IonContent, IonGrid, IonButton, IonLabel, IonPage, IonItemDivider,} from "@ionic/react";
import PageHeader from "../../components/headers";
import TextInputField from "../../components/textInputs/textInputField";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import { useHistory, useParams } from "react-router-dom";

import "../pages.css";

const AddFitnessTestResultsPage = () => {
  
  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const { currentUser } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");  
  const [docId, setDocId] = useState("");
  const [teamId, setTeamId] = useState("");



  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      const userDoc = { id: doc.id, ...doc.data() };
      setName(userDoc?.fullName)
      setTeamId(userDoc?.teamId)
      setDocId(id)
    });
  }, [currentUser?.uid, id]);


  const handleSaveResults = async () => {
      const data = { id, name, time };
  
     if (time === "") {
        setErrorMessage('No Time Entered')
        setShowAlert(true)
      }
      else {
        const ref = firestore
        .collection("users")
        .doc(teamId)
        .collection("fitness_tests_results")
        .doc(docId)
        .collection("players_results")
  
        await ref.add(data);
        history.goBack();
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
              disabled="true"
            ></TextInputField>
          </IonRow>

          {/*Time Input Fields & Labels*/}
          <IonRow>
            <TextInputField
              label="Time"
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
