import React , {useState } from 'react'
import { IonContent, IonLoading, IonItem, IonInput, IonText, IonList, IonButton, IonIcon, IonLabel, IonAlert} from '@ionic/react';
import {logoFacebook, logoGoogle } from 'ionicons/icons';
import { useAuth } from '../../../contexts/authContext'
import { useHistory } from "react-router-dom"
import "../auth.css";

 const Register = () => {

  const { signUp } = useAuth()
  const [ email, setEmail ] = useState("")
  const [ pword, setPword ] = useState("")
  //const [ confrmPword, setConfrmPword ] = useState("")
  const [ status, setStatus ] = useState({loading: false, emailError: false, pwordError: false})
  const history = useHistory()

  async function handleSignUp(e) {
      e.preventDefault()
      // if (pword.detail.value !== confrmPword.detail.value) {
      //   return setShowPwordError(true)
      // }
      try {
        //set loading to true , which displays loading icon
        //Set errors to false before attempting sign up
        setStatus({loading: true, emailError: false, pwordError: false})
        await signUp(email, pword)
        //Set loading and errors to false after succesful login
        setStatus({loading: false, emailError: false, pwordError: false})
        history.push("/manager/homre")
      } catch {
        //Set loading to false after attempted login 
        //set errors to true and display error message
        setStatus({loading: false, emailError: true, pwordError: true})

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
        {status.emailError && <IonText color="danger"> Email Error</IonText> }


        <IonItem id="rndInput">
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput type="password" id="pword" required
          onIonChange={(event) => setPword(event.detail.value)}></IonInput>
        </IonItem>

        <IonItem id="rndInput">
          <IonLabel position="stacked">Confirm Password</IonLabel>
          <IonInput type="password" id="confrmPword" required></IonInput>
        </IonItem>
        {status.pwordError && <IonText color="danger"> Password Error</IonText> }

  
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

    <IonLoading isOpen={status.loading}></IonLoading>

      </IonList>
      </div>
  </IonContent>

    </>)
  }
export default Register;
