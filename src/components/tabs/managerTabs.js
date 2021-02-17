import {IonRouterOutlet} from '@ionic/react';
import {Route , Redirect} from 'react-router-dom'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import {personCircle, home, settingsOutline } from 'ionicons/icons';

import HomePage from '../../pages/homePage';
import SecondPage from '../../pages/secondPage';
import ThirdPage from '../../pages/thirdPage';
import SignUpPage from '../authentication/signUp/signUp';
import ForgotPasswordPage from '../authentication/forgotPassword/forgotPassword';

import LoginPage from '../authentication/login/login';

function ManagerTabs() {
  return (
    <IonTabs>
    <IonRouterOutlet>
        <Route exact path="/manager/home"> <HomePage></HomePage></Route>
        <Route exact path="/manager/secondpage"><SecondPage></SecondPage></Route>
        <Route exact path="/manager/third"><ThirdPage></ThirdPage></Route>
        <Redirect exact path="/" to ="/home"></Redirect>
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
        <IonTabButton tab="me" href="/manager/secondpage">
        <IonIcon icon={personCircle} />
        <IonLabel>Second</IonLabel>
        </IonTabButton>
        <IonTabButton tab="home" href="/manager/home">
        <IonIcon icon={home} />
        <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/manager/third">
        <IonIcon icon={settingsOutline} />
        <IonLabel>Third</IonLabel>
        </IonTabButton>
    </IonTabBar>
    </IonTabs>
  
  );
}

export default ManagerTabs;
