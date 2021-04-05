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

const TeamInvitePage = () => {
  //TODO add validation
  const [status, setStatus] = useState({
    loading: false,
    emailError: false,
    pwordError: false,
  });
  const [teamName, setTeamName] = useState("");
  const [teamId, setTeamId] = useState("");


  const handleJoinTeam = async () => {
    //TODO add save results method
  };

  return (
    <IonPage>
      <PageHeader title="Send Invite"></PageHeader>
      <IonContent id="ft-pg-bg">
        <IonGrid id="ft-pg-bg">
          <IonRow>
            <IonCol>
              <IonItemDivider id="itm-divider-red">
                <IonLabel>Add Player To Team</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>

           {/*Time Input Fields & Labels*/}
           <IonRow>
           <TextInputField
             label="Team Id"
             text={teamName}
             size="12"
             setText={(e) => setTeamName(e.detail.value)}
             placeholder="Enter Time"
             type="text"
           ></TextInputField>
         </IonRow>

          {/*Time Input Fields & Labels*/}
          <IonRow>
            <TextInputField
              label="Team Id"
              text={teamId}
              size="12"
              setText={(e) => setTeamId(e.detail.value)}
              placeholder="Enter Time"
              type="text"
            ></TextInputField>
          </IonRow>

          {/* Add Button*/}
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

export default TeamInvitePage;
