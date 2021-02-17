import React , { useRef, useState } from 'react'
import { IonContent, IonItem, IonInput, IonList, IonButton, IonIcon, IonLabel, IonAlert} from '@ionic/react';
import {logoFacebook, logoGoogle } from 'ionicons/icons';
import { useAuth } from '../../../contexts/authContext'
import { Redirect, useHistory } from "react-router-dom"
import "../auth.css";

 const Register = () => {

  const { signUp } = useAuth()
  const [ email, setEmail ] = useState("")
  const [ pword, setPword ] = useState("")
  const [ confrmPword, setConfrmPword ] = useState("")
  const [showSignUpError, setShowSignUpError] = useState(false);
  const [showPwordError, setShowPwordError] = useState(false);
  const history = useHistory()

  async function handleSignUp(e) {
      e.preventDefault()
      // if (pword.detail.value !== confrmPword.detail.value) {
      //   return setShowPwordError(true)
      // }
      try {
        await signUp(email, pword)
        setShowSignUpError(false)
        setShowPwordError(false)
        history.push("/")
      } catch {
        setShowSignUpError(true)
      }
    }

  return (<>
    <IonContent>
      <div id="authContainer">
      <IonList>
        <IonLabel id="pgTitle" >Create an Account</IonLabel>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput type="email" id="email" required
          onIonChange={(event) => setEmail(event.detail.value)}></IonInput>
        </IonItem>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput type="password" id="pword" required
          onIonChange={(event) => setPword(event.detail.value)}></IonInput>
        </IonItem>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Confirm Password</IonLabel>
          <IonInput type="password" id="confrmPword" required></IonInput>
        </IonItem>
  
        <IonButton onClick={handleSignUp} id="btnTheme" expand="block" color="dark" shape="" fill="solid" type="submit">
          Register
        </IonButton>
        <ion-grid>
          <ion-row>
            <ion-col col-6>
              <IonButton id="logoBtnTheme" expand="block" color="dark" fill="outline">
                <IonIcon slot="icon-only" icon={logoGoogle} item-left></IonIcon>
              </IonButton>
            </ion-col>
            <ion-col col-6>
              <IonButton id="logoBtnTheme" expand="block" color="dark" fill="outline">
                <IonIcon slot="icon-only" icon={logoFacebook}></IonIcon>
              </IonButton>
            </ion-col>
          </ion-row>
        </ion-grid>

        <IonButton expand="block" fill="clear" routerLink="/login"> 
          Have an Account? Login</IonButton>
          
      </IonList>
      </div>

      
      <IonAlert
        isOpen={showSignUpError}
        onDidDismiss={() => setShowSignUpError(false)}
        backdropDismiss={(true)}
        header={'Sign Up Error'}
        message={'Please check your details'}
        buttons={[{
            text: 'Continue',
            handler: () => {console.log('Confirm Continue'); }}]}
          />

      <IonAlert
        isOpen={showPwordError}
        onDidDismiss={() => setShowPwordError(false)}
        backdropDismiss={(true)}
        header={'Input Error'}
        message={'Passwords do not <strong>match</strong>'}
        buttons={[{
            text: 'Continue',
            handler: () => {console.log('Confirm Continue'); }}]}
          />
  </IonContent>

    </>)
  }
export default Register;
