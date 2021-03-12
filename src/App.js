import { IonApp, IonRouterOutlet} from '@ionic/react';
import ManagerTabs from './components/tabs/manager/index'
import SignUpPage from './components/authentication/signUp/index';
import LoginPage from './components/authentication/login/index';
import ForgotPasswordPage from './components/authentication/forgotPassword/index';
import AuthContextProvider from "./contexts/authContext"
import {IonReactRouter } from '@ionic/react-router'
import {Route , Redirect} from 'react-router-dom'

function App() {

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
  );
}

export default App;