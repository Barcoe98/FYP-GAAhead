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
import "../pages.css";

const JoinTeamPage = () => {
  //TODO add validation
  const [status, setStatus] = useState({
    loading: false,
    emailError: false,
    pwordError: false,
  });
  const [teamName, setTeamName] = useState("");
  const [teamId, setTeamId] = useState("");


  const handleJoinTeam = async () => {
    //TODO add update teamId field in DB
  };

  return (
    <IonPage>
      <PageHeader title="Join Team"></PageHeader>
      <IonContent id="ft-pg-bg">
        <IonGrid id="ft-pg-bg">
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
              <IonLoading isOpen={status.loading}></IonLoading>
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
    </IonPage>
  );
};

export default JoinTeamPage;
