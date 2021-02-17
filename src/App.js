import { IonApp, IonRouterOutlet} from '@ionic/react';
import ManagerTabs from '../src/components/tabs/managerTabs'
import SignUpPage from './components/authentication/signUp/signUp';
import LoginPage from './components/authentication/login/login';
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
            <ManagerTabs></ManagerTabs>
            <Redirect exact path="/" to ="/home"></Redirect>
          </IonRouterOutlet>
        </IonReactRouter>
      </AuthContextProvider>
    </IonApp>
  );
}

export default App;