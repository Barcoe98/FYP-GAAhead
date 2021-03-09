import React from "react";
import { IonButton } from '@ionic/react';

const LinkButton = ({href, btnName}) => {
  return (
    <IonButton id="btnTheme" expand="block" color="dark" fill="solid"  type="button" href={href}>{btnName}</IonButton>
  );
};

export default LinkButton;