import React, { useState }from 'react'
import { IonContent, IonItem, IonInput, IonList, IonButton, IonLabel, IonLoading, IonText} from '@ionic/react';
import { useAuth } from '../../../contexts//authContext'
import "../auth.css";


const ForgotPassword = () => {
  const { resetPassword } = useAuth()
  const [ email, setEmail ] = useState("")

  const [ status, setStatus ] = useState({loading: false, error: false, msg: true})
  const {setLoggedIn} = useAuth();

  async function handleForgotPword(e) {
    e.preventDefault()
    try { 
      setStatus({loading: true, error: false, msg: false})
      await resetPassword(email)
      setStatus({loading: false, error: false, msg: true})
      setLoggedIn(true)
    } 
    catch { 
      setStatus({loading: false, error: true, msg: false})
      setLoggedIn(false)
    }
  }

  
  return (<>
    <IonContent>
      <div id="authContainer">
      <IonList>
        <IonLabel id="pgTitle" >Reset Password</IonLabel>

          <IonItem id="rndInput">
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput value={email} type="email" required
            onIonChange={(event) => setEmail(event.detail.value)}></IonInput>
          </IonItem>
          {status.error && <IonText color="danger"> Failed To Reset Password</IonText> }
          {status.msg && <IonText color="success"> Reset Password Email sent</IonText> }

          <IonLoading isOpen={status.loading}></IonLoading>

          <IonButton id="btnTheme" expand="block" color="dark" fill="solid" type="submit" onClick={handleForgotPword}>
            Reset Password 
          </IonButton>
          
      </IonList>
      </div>
    </IonContent>
    </>)
  }
export default ForgotPassword;
