import React from "react";
import { IonPage } from '@ionic/react';
import SignIn from "../components/authentication/signIn/signIn";

const SignInPage = () => {
  return (
       <IonPage>
       <SignIn></SignIn>
       </IonPage>
  );
};

export default SignInPage;