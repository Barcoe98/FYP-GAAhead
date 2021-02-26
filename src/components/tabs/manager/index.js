import { Route , Redirect} from 'react-router-dom'
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { homeOutline, clipboardOutline, menuOutline, peopleOutline, personOutline} from 'ionicons/icons';

import HomePage from '../../../pages/homePage';
import MorePage from '../../../pages/morePage';
import MyPage from '../../../pages/myPage';
import TeamPage from '../../../pages/teamPage';
import PlannerPage from '../../../pages/plannerPage';

import TrainingScheduleDetailsPage from '../../../pages/training/TrainingScheduleDetailsPage';
import AddTrainingSchedulePage from '../../../pages/training/AddTrainingSchedulePage';
import TrainingScheduleListPage from '../../../pages/training/TrainingScheduleListPage';


import FitnessTestDetailsPage from '../../../pages/fitnessTest/FitnessTestDetailsPage';
import AddFitnessTestPage from '../../../pages/fitnessTest/AddFitnessTestPage';
import FitnessTestListPage from '../../../pages/fitnessTest/FitnessTestListPage'


function ManagerTabs() {
  return (
    <IonTabs>
    <IonRouterOutlet>
        <Route exact path="/manager/home"> <HomePage></HomePage></Route>
        <Route exact path="/manager/more"><MorePage></MorePage></Route>
        <Route exact path="/manager/my"><MyPage></MyPage></Route>
        <Route exact path="/manager/team"><TeamPage></TeamPage></Route>
        <Route exact path="/manager/planner"><PlannerPage></PlannerPage></Route>

        <Route path="/manager/fitness/test/:id"><FitnessTestDetailsPage></FitnessTestDetailsPage></Route>
        <Route exact path="/manager/fitness/test/add"><AddFitnessTestPage></AddFitnessTestPage></Route>
        <Route exact path="/manager/fitness/test/list"><FitnessTestListPage></FitnessTestListPage></Route>

        <Route path="/manager/planner/trainingschedule/:id"><TrainingScheduleDetailsPage></TrainingScheduleDetailsPage></Route>
        <Route exact path="/manager/planner/trainingschedule/add"><AddTrainingSchedulePage></AddTrainingSchedulePage></Route>
        <Route exact path="/manager/planner/trainingschedule/list"><TrainingScheduleListPage></TrainingScheduleListPage></Route>

        <Redirect exact path="/" to ="/home"></Redirect>
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
        <IonTabButton tab="my" href="/manager/my">
          <IonIcon icon={personOutline} />
          <IonLabel>My</IonLabel>
        </IonTabButton>
        <IonTabButton tab="planner" href="/manager/planner">
          <IonIcon icon={clipboardOutline} />
          <IonLabel>Planner</IonLabel>
        </IonTabButton>
        <IonTabButton tab="home" href="/manager/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="team" href="/manager/team">
          <IonIcon icon={peopleOutline} />
          <IonLabel>Team</IonLabel>
        </IonTabButton>
        <IonTabButton tab="more" href="/manager/more">
          <IonIcon icon={menuOutline} />
          <IonLabel>More</IonLabel>
        </IonTabButton>
    </IonTabBar>
    </IonTabs>
  );
}

export default ManagerTabs;
