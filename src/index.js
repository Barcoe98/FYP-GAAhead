import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './app.css';
import './globals/variables.css';
import './globals/fonts/GothamRounded-Medium.ttf'

import { IonApp, IonRouterOutlet} from '@ionic/react';
import ManagerTabs from './components/tabs/manager/index'
import PlayerTabs from './components/tabs/player/index'
import SignUpPage from './components/authentication/signUp/index';
import LoginPage from './components/authentication/login/index';
import ForgotPasswordPage from './components/authentication/forgotPassword/index';
import AuthContextProvider from "./contexts/authContext"
import {IonReactRouter } from '@ionic/react-router'
import {Route , Redirect} from 'react-router-dom'

import { useAuth} from '././contexts/authContext'
import {firestore} from'./firebase'

function ManagerNavBar() {
  return (
    <IonApp>
    <AuthContextProvider>
      <IonReactRouter>       
        <IonRouterOutlet>
          <Route exact path="/signup"><SignUpPage></SignUpPage></Route>
          <Route exact path="/login"><LoginPage></LoginPage></Route>
          <Route exact path="/forgotpassword"><ForgotPasswordPage></ForgotPasswordPage></Route>
          <ManagerTabs></ManagerTabs>
          <Redirect exact path="/" to ="/login"></Redirect>
        </IonRouterOutlet>
      </IonReactRouter>
    </AuthContextProvider>
  </IonApp>
  )
}

function PlayerNavBar() {
  return (
    <IonApp>
    <AuthContextProvider>
      <IonReactRouter>       
        <IonRouterOutlet>
          <Route exact path="/signup"><SignUpPage></SignUpPage></Route>
          <Route exact path="/login"><LoginPage></LoginPage></Route>
          <Route exact path="/forgotpassword"><ForgotPasswordPage></ForgotPasswordPage></Route>
          <PlayerTabs></PlayerTabs>
          <Redirect exact path="/" to ="/login"></Redirect>
        </IonRouterOutlet>
      </IonReactRouter>
    </AuthContextProvider>
  </IonApp>
  )
}

function UserNavBar() {

  const { currentUser } = useAuth()
  const userTypeRef = firestore.collection('users').doc(currentUser?.uid)
  .collection('my_profile').get('userType')
  console.log(userTypeRef)

  if (userTypeRef === "manager") {
    return <PlayerNavBar />;
  }
  else {
  return <ManagerNavBar />;
  }
}

ReactDOM.render(<UserNavBar/>, document.getElementById("root"));

