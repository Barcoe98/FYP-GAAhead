import React  from "react";
import { IonContent, IonPage, IonButton } from '@ionic/react';
import PageHeader from '../components/headers'

const MorePage = () => {
  return (
    <IonPage>
    <PageHeader title="More Page"></PageHeader>
      <IonContent className="ion-padding">
        <IonButton size="large" expand="block" href=""> Feature 1</IonButton>
        <IonButton size="large" expand="block" href=""> Feature 2</IonButton>
        <IonButton size="large" expand="block" href=""> Feature 3</IonButton>
        <IonButton size="large" expand="block" href=""> Feature 4</IonButton>
    </IonContent>
   </IonPage>
  );
};

export default MorePage;