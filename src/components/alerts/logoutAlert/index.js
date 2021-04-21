import React from "react";
import { IonAlert } from "@ionic/react";

const AlertLogout = ({ handleLogout, logoutAlert, setLogoutAlert }) => {
  return (
    <IonAlert
      isOpen={logoutAlert}
      onDidDismiss={() => setLogoutAlert(false)}
      message={"Are You sure you want to Log Out"}
      buttons={[
        {
          text: "Cancel",
          handler: async () => {
            console.log("Confirm Cancel");
            setLogoutAlert(false);
          },
        },
        {
          text: "Confirm",
          handler: async () => {
            handleLogout();
          },
        },
      ]}
    />
  );
};

export default AlertLogout;
