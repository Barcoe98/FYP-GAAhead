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
import PageHeader from "../../../components/headers";
import TextInputField from "../../../components/textInputs/textInputField";
import AlertError from "../../../components/alerts/errorAlert/index";

import { firestore } from "../../../firebase";
import { useAuth } from "../../../contexts/authContext";
import { useHistory } from "react-router-dom";

import "../../pages.css";


const JoinTeamPage = () => {

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const { currentUser } = useAuth();
  const history = useHistory();

  const [teamName, setTeamName] = useState("");
  const [teamId, setTeamId] = useState("");

  //TODO add validation
  

  const handleJoinTeam = async () => {

    if (teamName === "") {
      setErrorMessage('No Team Name Entered')
      setShowAlert(true)
    }
    else if (teamId === "") {
      setErrorMessage('No Team Id Entered')
      setShowAlert(true)
    }
    else {
    const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)

    const data = { teamName, teamId };
    await ref.update(data)
    history.goBack();
    }
  };

  return (
    <IonPage>
      <PageHeader title="Join Team"></PageHeader>
      <IonContent id="bg-col">
        <IonGrid id="bg-col">
          <IonRow>
            <IonCol>
              <IonItemDivider id="itm-divider-red">
                <IonLabel>Join Team</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>

           {/*Name Input Fields & Labels*/}
           <IonRow>
           <TextInputField
             label="Team Name"
             text={teamName}
             size="12"
             setText={(e) => setTeamName(e.detail.value)}
             placeholder="Enter Team Name"
             type="text"
           ></TextInputField>
         </IonRow>

          {/*Team Id Input Fields & Labels*/}
          <IonRow>
            <TextInputField
              label="Team Id"
              text={teamId}
              size="12"
              setText={(e) => setTeamId(e.detail.value)}
              placeholder="Enter Team Id"
              type="text"
            ></TextInputField>
          </IonRow>

          {/* Join Button*/}
          <IonRow>
            <IonCol>
              <IonButton
                onClick={handleJoinTeam}
                id="btnTheme"
                expand="block"
                color="dark"
                fill="solid"
                type="submit"
              >
                Join Team
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

export default JoinTeamPage;
