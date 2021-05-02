import React, { useState } from "react";
import { IonApp, IonRouterOutlet} from '@ionic/react';
import ReactDOM from 'react-dom';
import {
  IonContent,
  IonItem,
  IonInput,
  IonList,
  IonButton,
  IonIcon,
  IonLabel,
  IonLoading,
  IonText,
} from "@ionic/react";
import { useAuth } from "../../../contexts/authContext";
import { useHistory } from "react-router-dom";
import {Route , Redirect} from 'react-router-dom'
import {IonReactRouter } from '@ionic/react-router'
import ManagerTabs from '../../tabs/manager/index'
import PlayerTabs from '../../tabs/player/index'
import SignUpPage from '../signUp/index';
import LoginPage from '../login/index';
import ForgotPasswordPage from '..//forgotPassword/index';
import {firestore} from'../../../firebase'


import "../auth.css";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");

  const [status, setStatus] = useState({
    loading: false,
    emailError: false,
    pwordError: false,
  });
  const history = useHistory();

  const { setLoggedIn, currentUser } = useAuth();
  var [userType, setUserType] = useState();

  function ManagerNavBar() {
    return (
      <IonApp>
        <IonReactRouter>       
          <IonRouterOutlet>
            <Route exact path="/signup"><SignUpPage></SignUpPage></Route>
            <Route exact path="/login"><LoginPage></LoginPage></Route>
            <Route exact path="/forgotpassword"><ForgotPasswordPage></ForgotPasswordPage></Route>
            <ManagerTabs></ManagerTabs>
            <Redirect exact path="/" to ="/login"></Redirect>
          </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
    )
  }

  function PlayerNavBar() {
    return (
      <IonApp>
        <IonReactRouter>       
          <IonRouterOutlet>
            <Route exact path="/signup"><SignUpPage></SignUpPage></Route>
            <Route exact path="/login"><LoginPage></LoginPage></Route>
            <Route exact path="/forgotpassword"><ForgotPasswordPage></ForgotPasswordPage></Route>
            <PlayerTabs></PlayerTabs>
            <Redirect exact path="/" to ="/login"></Redirect>
          </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
    )
  }


  async function handleLogin(e) {
    e.preventDefault();
    try {
      //set loading to true , which displays loading icon
      //Set errors to false before attempting sign in
      setStatus({ loading: true, emailError: false, pwordError: false });
      await login(email, pword);
      
      setLoggedIn(true);
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
  
    ref.get(currentUser?.uid).then(doc => {
      if (!doc.exists) {
        console.log('No such document');
        //history.goBack();
      } else {
        const userDoc = { id: doc.id, ...doc.data() };  

        if (userDoc?.userType === "manager") {
          return ( 
            ReactDOM.render(<ManagerNavBar/>, document.getElementById("root")),
            history.push("/more")
          )
        }
        else {
          return ( 
            ReactDOM.render(<PlayerNavBar/>, document.getElementById("root")),
            history.push("/more")
          )
        }
      }
    });
      
    } catch {
      //Set loading to false after attempted login
      //set errors to true and display error message
      setStatus({ loading: false, emailError: true, pwordError: true });
      //setLoggedIn(false);
    }
  }

  return (
    <>
      <IonContent>
        <div id="authContainer">
          <IonList id="pg-col">
            <IonLabel id="pgTitle">Login</IonLabel>
            <IonItem color="light" id="rndInput">
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                value={email}
                type="email"
                required
                onIonChange={(event) => setEmail(event.detail.value)}
              ></IonInput>
            </IonItem>
            {status.emailError && (
              <IonText color="danger"> Email Error</IonText>
            )}
            <IonItem color="light" id="rndInput">
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                value={pword}
                type="password"
                required
                onIonChange={(event) => setPword(event.detail.value)}
              ></IonInput>
            </IonItem>
            {status.pwordError && (
              <IonText color="danger"> Password Error</IonText>
            )}

            <IonLoading isOpen={status.loading}></IonLoading>
            <IonButton
              id="btnTheme"
              expand="block"
              color="light"
              fill="solid"
              type="submit"
              onClick={handleLogin}
            >
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
      </IonContent>
    </>
  );
};
export default Login;
