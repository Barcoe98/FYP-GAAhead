import React, { useState } from "react";
import { IonContent, IonItem, IonInput, IonText, IonList, IonButton, IonLabel, IonSelect,
} from "@ionic/react";
import AlertError from "../../../components/alerts/errorAlert";

import { useAuth } from "../../../contexts/authContext";
import { useHistory } from "react-router-dom";
import { firestore } from "../../../firebase";

import "../auth.css";

const Register = () => {
  const { signUpPlayer, signUpManager} = useAuth();

  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
  const [userType, setUserType] = useState("");
  const [ confrmPword, setConfrmPword ] = useState("")
  const [errorMessage, setErrorMessage] = useState();
  const [errorTitle, setErrorTitle] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  async function handleSignUp(e) {
    e.preventDefault();

    try {
      if (userType.length === 0) {
        setErrorMessage('Please Try Again')
        setErrorTitle('No User Type Entered')
        setShowAlert(true)
      }

      else if (email.length === 0) {
        setErrorMessage('Please Try Again')
        setErrorTitle('incorrect/No Email Entered')
        setShowAlert(true)
      }

      else if (pword.length === 0) {
        setErrorMessage('Please Try Again')
        setErrorTitle('Incorrect/No Password Entered')
        setShowAlert(true)
      }

      // else if (pword !== confrmPword) {
      //   setErrorMessage('Please Try Again')
      //   setErrorTitle('Passwords Do Not Match')
      //   setShowAlert(true)
      // } '

      else if (userType === "manager") {
        await signUpManager(email, pword, userType);
        history.replace("login")
      }

      else if (userType === "player") {
        await signUpPlayer(email, pword, userType);
        history.replace("login")   
      }

      else {
        setErrorMessage('')
        setErrorTitle('Please Try Again')
        setShowAlert(true)
      }

  }catch {
      //Set loading to false after attempted login
      //set errors to true and display error message
      //setStatus({loading: false, emailError: true, pwordError: true})
    }
    // const userRef = firestore
    //   .collection("users")
    //   .doc(currentUser.uid)
    //   .collection("my_profile");
    // const userData = { email, userType, teamId };
    // await userRef.add(userData);
    //console.log(currentUser.uid);
  }

  return (
    <>
      <IonContent>
        <div id="authContainer">
          <IonList id="pg-col">
            <IonLabel id="pgTitle">Create an Account</IonLabel>

            <IonItem color="light" id="rndInput">
              <IonLabel>Type of User</IonLabel>
              <IonSelect
                value={userType}
                onIonChange={(e) => setUserType(e.detail.value)}
                placeholder="Select type of User you are">
                <ion-select-option value="manager">Manager</ion-select-option>
                <ion-select-option value="player">Player</ion-select-option>
              </IonSelect>
            </IonItem>

            <IonItem color="light" id="rndInput">
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                type="email"
                id="email"
                required
                onIonChange={(event) => setEmail(event.detail.value)}
              ></IonInput>
            </IonItem>
          

            <IonItem color="light" id="rndInput">
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                type="password"
                id="pword"
                required
                onIonChange={(event) => setPword(event.detail.value)}
              ></IonInput>
            </IonItem>

            <IonItem color="light" id="rndInput">
              <IonLabel position="stacked">Confirm Password</IonLabel>
              <IonInput type="password" id="confrmPword" required></IonInput>
            </IonItem>
          
            <IonButton
              onClick={handleSignUp}
              id="btnTheme"
              expand="block"
              color="light"
              shape=""
              fill="solid"
              type="submit"
            >
              Register
            </IonButton>

            <IonButton color="light" expand="block" fill="clear" routerLink="/login">
              Have an Account? Login
            </IonButton>

          </IonList>
        </div>

        <AlertError 
          setShowAlert={() => setShowAlert(false)} 
          alertHeader={errorTitle}
          showAlert={showAlert} 
          msg={errorMessage}>
        </AlertError>

      </IonContent>
    </>
  );
};
export default Register;
