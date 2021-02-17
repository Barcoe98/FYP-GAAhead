import React, { useState }from 'react'
import { IonContent, IonItem, IonInput, IonList, IonButton, IonIcon, IonLabel, IonLoading, IonText} from '@ionic/react';
import { logoFacebook, logoGoogle } from 'ionicons/icons';
import { useAuth } from '../../../contexts/authContext'
import { useHistory } from "react-router-dom"
import "../auth.css";


const Login = () => {
  const { login } = useAuth()
  const [ email, setEmail ] = useState("")
  const [ pword, setPword ] = useState("")

  const [ status, setStatus ] = useState({loading: false, emailError: false, pwordError: false})
  const history = useHistory();
  const {setLoggedIn} = useAuth();

  async function handleLogin(e) {
    e.preventDefault()
    try { 
      //set loading to true , which displays loading icon
      //Set errors to false before attempting sign in
      setStatus({loading: true, emailError: false, pwordError: false})
      await login(email, pword)
      //Set loading and errors to false after succesful login
      setStatus({loading: false, emailError: false, pwordError: false})
      setLoggedIn(true)
      history.push("/")
    } 
    catch { 
      //Set loading to false after attempted login 
      //set errors to true and display error message
      setStatus({loading: false, emailError: true, pwordError: true})
      setLoggedIn(false)
    }
  }

  // <IonAlert
  //       isOpen={showErrorAlert}
  //       onDidDismiss={() => setShowErrorAlert(false)}
  //       backdropDismiss={(true)}
  //       header={'Input Error'}
  //       message={'Email and Password is <strong>inccorect</strong>!'}
  //       buttons={[{
  //           text: 'Continue',
  //           handler: () => {console.log('Confirm Continue'); }}]}>
  //         </IonAlert>
  
  return (<>
    <IonContent>
      <div id="authContainer">
      <IonList>
        <IonLabel id="pgTitle" >Login</IonLabel>
     
          <IonItem id="rndInput">
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput value={email} type="email" required
            onIonChange={(event) => setEmail(event.detail.value)}></IonInput>
          </IonItem>
          {status.emailError && <IonText color="danger"> Email Error</IonText> }
          <IonItem id="rndInput">
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput value={pword} type="password" required
            onIonChange={(event) => setPword(event.detail.value)} ></IonInput>
          </IonItem>
          {status.pwordError && <IonText color="danger"> Password Error</IonText> }

          
          <IonLoading isOpen={status.loading}></IonLoading>
          <IonButton id="btnTheme" expand="block" color="dark" fill="solid" type="submit" onClick={handleLogin}>
            Login 
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

          <IonButton expand="block" fill="clear" routerLink="/signup"> 
            Need an Account? Sign Up</IonButton>
          
      </IonList>
      </div>
    </IonContent>
    </>)
  }
export default Login;
