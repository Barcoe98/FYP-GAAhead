import React from "react";
import { IonText } from '@ionic/react';

const ErrorMessage = ({errorsMsg}) => {

  return (
    <IonText color="danger"><small>{errorsMsg}</small></IonText> 
  );
};

export default ErrorMessage;





