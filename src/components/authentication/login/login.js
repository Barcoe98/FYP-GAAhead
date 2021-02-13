import React, { useRef, useState }from 'react'
import { IonContent, IonItem, IonInput, IonList, IonButton, IonIcon, IonLabel} from '@ionic/react';
import { logoFacebook, logoGoogle } from 'ionicons/icons';
import { useAuth } from '../../../contexts/authContext'
import { Redirect, useHistory } from "react-router-dom"
import "../auth.css";
import { auth } from '../../../firebase';

const Login = () => {
  // const emailRef = useRef();
  // const pwordRef = useRef();
  // const { login } = useAuth()
  // const [ error, setError ] = useState("")
  // const [ loading, setLoading ] = useState(false)
  // const history = useHistory();
  // const {setLoggedIn} = useAuth();

//   async function handleLogin(e) {
//     e.preventDefault()
//     try { 
//         setError("")
//         setLoading(true)
//         await login("test@test.com", "123456" )
//         //await login(emailRef.current.value, passworRef.current.value )

//         setLoggedIn(true)
//         //history.push("/")
//         return <Redirect to="/"></Redirect>
//     } 
//     catch { 
//         setError ( 'Failed to Sign in ')
//         setLoggedIn(false)
//     }
//     setLoading(false)
// }

const handleLogin = async() => {
  const credential = await auth.signInWithEmailAndPassword("test@test.com", "123456")
  console.log(credential)
}
  return (<>
    <IonContent>
      <div id="authContainer">
      <IonList>
        <IonLabel id="pgTitle" >Login</IonLabel>
          <IonItem id="rndInput">
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" required></IonInput>
          </IonItem>
          <IonItem id="rndInput">
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" required></IonInput>
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
