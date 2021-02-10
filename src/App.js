import { IonApp, IonRouterOutlet, IonTab} from '@ionic/react';
import HomePage from './pages/homePage';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';

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

          <Redirect exact path="/" to ="/home"></Redirect>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">

          <IonTabButton tab="me" href="/third">
            <IonIcon icon={personCircle} />
            <IonLabel>Me</IonLabel>
          </IonTabButton>

          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="settings" href="/secondpage">
            <IonIcon icon={settingsOutline} />
            <IonLabel>settings</IonLabel>
          </IonTabButton>

        </IonTabBar>

          
      </IonTabs>

    </IonReactRouter>
   </IonApp>
  );
}

export default App;
