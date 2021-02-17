import { IonRouterOutlet} from '@ionic/react';
import { Route , Redirect} from 'react-router-dom'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, barChart, addCircle } from 'ionicons/icons';

import HomePage from '../../pages/homePage';
import FitnessTestPage from '../../pages/fitnessTest/FitnessTestPage';
import ThirdPage from '../../pages/fitnessTest/AddFitnessTestPage';


function ManagerTabs() {
  return (
    <IonTabs>
    <IonRouterOutlet>
        <Route exact path="/manager/home"> <HomePage></HomePage></Route>
        <Route exact path="/manager/fitness/test"><FitnessTestPage></FitnessTestPage></Route>
        <Route exact path="/manager/fitness/test/add"><ThirdPage></ThirdPage></Route>
        <Redirect exact path="/" to ="/home"></Redirect>
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
        <IonTabButton tab="me" href="/manager/fitness/test">
          <IonIcon icon={barChart} />
          <IonLabel>Fitness Test</IonLabel>
        </IonTabButton>
        <IonTabButton tab="home" href="/manager/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/manager/fitness/test/add">
          <IonIcon icon={addCircle} />
          <IonLabel>Add Test</IonLabel>
        </IonTabButton>
    </IonTabBar>
    </IonTabs>
  );
}

export default ManagerTabs;
