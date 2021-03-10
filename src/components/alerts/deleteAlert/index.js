import React from "react";
import { IonAlert } from '@ionic/react';

const AlertDelete = ({handleDelete, delAlert, setDelAlert}) => {

  return (
    <IonAlert 
    isOpen={delAlert}
    onDidDismiss={() => setDelAlert(false)}
    message={'Are You sure you want to delete'}
    buttons={[
      {
        text: 'Cancel',
        handler: async () => {
          console.log('Confirm Cancel');
          setDelAlert(false)
        }
      },
      {
        text: 'Confirm',
        handler: async () => {handleDelete()}
      }
    ]}
  />
  );
};

export default AlertDelete;