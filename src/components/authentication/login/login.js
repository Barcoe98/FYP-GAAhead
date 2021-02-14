import React, { useRef, useState }from 'react'
import { IonContent, IonItem, IonInput, IonList, IonButton, IonIcon, IonLabel, IonAlert} from '@ionic/react';
import { logoFacebook, logoGoogle } from 'ionicons/icons';
import { useAuth } from '../../../contexts/authContext'
import { Redirect, useHistory } from "react-router-dom"
import "../auth.css";
import { auth } from '../../../firebase';

const Login = () => {
  const { login } = useAuth()
  const [ email, setEmail ] = useState("")
  const [ pword, setPword ] = useState("")

  const [ error, setError ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const history = useHistory();
  const {setLoggedIn} = useAuth();
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  async function handleLogin(e) {
    e.preventDefault()
    try { 
        setError("")
        setLoading(true)
        await login(email, pword)
        setLoggedIn(true)
        history.push("/")
    } 
    catch { 
        setShowErrorAlert(true)
        setLoggedIn(false)
    }
    setLoading(false)
}

  return (<>
    <IonContent>
      <div id="authContainer">
      <IonList>
        <IonLabel id="pgTitle" >Login</IonLabel>
        <IonAlert
        isOpen={showErrorAlert}
        onDidDismiss={() => setShowErrorAlert(false)}
        backdropDismiss={(true)}
        header={'Input Error'}
        message={'Email and Password is <strong>inccorect</strong>!'}
        buttons={[
          {
            text: 'Continue',
            handler: () => {
              console.log('Confirm Continue');
            }
          }
        ]}
      />
          <IonItem id="rndInput">
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput value={email} type="email" required
            onIonChange={(event) => setEmail(event.detail.value)}></IonInput>
          </IonItem>
          <IonItem id="rndInput">
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput value={pword} type="password" required
            onIonChange={(event) => setPword(event.detail.value)} ></IonInput>
          </IonItem>
    
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
