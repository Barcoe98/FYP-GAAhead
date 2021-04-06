import React from "react";
import { IonAlert } from "@ionic/react";
import './errorAlert.css'

const AlertError = ({ showAlert, setShowAlert, alertHeader, msg }) => {
  return (
    <IonAlert
    id='errorAlert'
      isOpen={showAlert}
      header={alertHeader}
      cssClass='warning'
      onDidDismiss={() => setShowAlert(false)}
      message={msg}
      buttons={['Ok']}
    />
  );
};

export default AlertError;
