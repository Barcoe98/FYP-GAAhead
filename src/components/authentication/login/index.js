import React, { useState } from "react";
import {  IonContent, IonItem,  IonInput,  IonList, IonButton, IonLabel } from "@ionic/react";
import AlertError from "../../../components/alerts/errorAlert";

import { useAuth } from "../../../contexts/authContext";
import { useHistory } from "react-router-dom";
import "../auth.css";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const history = useHistory();
  const { setLoggedIn } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      //set loading to true , which displays loading icon
      //Set errors to false before attempting sign in
      await login(email, pword);
      setLoggedIn(true);
      history.push("/more");
    } catch {
      //Set loading to false after attempted login
      //set errors to true and display error message
      setErrorMessage('Please Try Again')
      setShowAlert(true)
      setLoggedIn(false);
    }
  }

  return (
      <IonContent>
        <div id="authContainer">
          <IonList id="pg-col">

            <IonLabel id="pgTitle">Login</IonLabel>

            <IonItem color="light" id="rndInput">
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput value={email} type="email" required onIonChange={(event) => setEmail(event.detail.value)}></IonInput>
            </IonItem>

            <IonItem lines="true" color="light" id="rndInput">
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput value={pword} type="password" required onIonChange={(event) => setPword(event.detail.value)}></IonInput>
            </IonItem>
    
            <IonButton id="btnTheme" expand="block" color="dark" fill="solid" type="submit" onClick={handleLogin}>
              Login
            </IonButton>

            <IonButton expand="block" fill="clear" routerLink="/forgotpassword">
              Forgot Password ?
            </IonButton>

            <IonButton expand="block" fill="clear" routerLink="/signup">
              Need an Account ? Sign Up
            </IonButton>

          </IonList>
        </div>

        <AlertError 
          setShowAlert={() => setShowAlert(false)} 
          alertHeader='Login Details Incorrect'
          showAlert={showAlert} 
          msg={errorMessage}>
        </AlertError>

      </IonContent>

      
  );
};
export default Login;
