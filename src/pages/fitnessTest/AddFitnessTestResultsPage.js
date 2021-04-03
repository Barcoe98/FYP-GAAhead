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

const AddFitnessTestResultsPage = () => {
  //TODO add validation
  const [status, setStatus] = useState({
    loading: false,
    emailError: false,
    pwordError: false,
  });
  const [time, setTime] = useState("");

  const handleSaveResults = async () => {
    //TODO add save results method
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
              <IonLoading isOpen={status.loading}></IonLoading>
              <IonButton
                onClick={handleSaveResults}
                id="btnTheme"
                expand="block"
                color="dark"
                fill="solid"
                type="submit"
              >
                Save Results
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AddFitnessTestResultsPage;
