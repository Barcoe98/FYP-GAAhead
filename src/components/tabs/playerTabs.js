import {IonRouterOutlet} from '@ionic/react';
import {Route , Redirect} from 'react-router-dom'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import {personCircle, home,  person } from 'ionicons/icons';

import HomePage from '../../pages/homePage';
import SecondPage from '../../pages/secondPage';
import ThirdPage from '../../pages/thirdPage';
import SignUpPage from '../authentication/signUp/signUp';
import LoginPage from '../authentication/login/login';

function PlayerTabs() {

  return (
    <IonTabs>
        <IonRouterOutlet>
            <Route exact path="/player/home"> <HomePage></HomePage></Route>
            <Route exact path="/player/secondpage"><SecondPage></SecondPage></Route>
            <Route exact path="/player/third"><ThirdPage></ThirdPage></Route>
            <Route exact path="/signup"><SignUpPage></SignUpPage></Route>
            <Route exact path="/login"><LoginPage></LoginPage></Route>
            <Redirect exact path="/" to ="/home"></Redirect>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
            <IonTabButton tab="me" href="/player/secondpage">
            <IonIcon icon={personCircle} />
            <IonLabel>Second</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/player/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/player/third">
            <IonIcon icon={person} />
            <IonLabel>Third</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
  
  );
}

export default PlayerTabs;
