import { IonApp, IonRouterOutlet, IonTab} from '@ionic/react';
import HomePage from './pages/homePage';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';
import SignUpPage from './components/authentication/signUp/signUp';
import LoginPage from './components/authentication/login/login';

import {IonReactRouter } from '@ionic/react-router'
import {Route , Redirect} from 'react-router-dom'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import {personCircle, home, settingsOutline } from 'ionicons/icons';


function App() {
  return (
   <IonApp>
    <IonReactRouter> 
      <IonTabs>

        <IonRouterOutlet>
          <Route exact path="/home"> <HomePage></HomePage></Route>
          <Route exact path="/secondpage"><SecondPage></SecondPage></Route>
          <Route exact path="/third"><ThirdPage></ThirdPage></Route>
          <Route exact path="/signup"><SignUpPage></SignUpPage></Route>
          <Route exact path="/login"><LoginPage></LoginPage></Route>

          <Redirect exact path="/" to ="/home"></Redirect>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">

          <IonTabButton tab="me" href="/login">
            <IonIcon icon={personCircle} />
            <IonLabel>Me</IonLabel>
          </IonTabButton>

          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="settings" href="/signup">
            <IonIcon icon={settingsOutline} />
            <IonLabel>signup</IonLabel>
          </IonTabButton>

        </IonTabBar>

          
      </IonTabs>

    </IonReactRouter>
   </IonApp>
  );
}

export default App;
