import React from "react";
import { IonButton } from "@ionic/react";

const LogoutButton = ({ onClick, btnName }) => {
  return (
    <IonButton
      id="btnTheme"
      expand="block"
      color="danger"
      fill="solid"
      type="button"
      onClick={onClick}
    >
      {btnName}
    </IonButton>
  );
};

export default LogoutButton;
