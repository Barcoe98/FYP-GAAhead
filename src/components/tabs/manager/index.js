import { Route , Redirect} from 'react-router-dom'
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { homeOutline, clipboardOutline, menuOutline, peopleOutline, personOutline} from 'ionicons/icons';

import HomePage from '../../../pages/navBarPages/homePage';
import MorePage from '../../../pages/navBarPages/morePage';
import MyPage from '../../../pages/navBarPages/myPage';
import TeamPage from '../../../pages/navBarPages/teamPage';
import PlannerPage from '../../../pages/navBarPages/plannerPage';

import "../navbar.css"

import TrainingScheduleDetailsPage from '../../../pages/training/TrainingScheduleDetailsPage';
import AddTrainingSchedulePage from '../../../pages/training/AddTrainingSchedulePage';
import TrainingScheduleListPage from '../../../pages/training/TrainingScheduleListPage';

import FitnessTestDetailsPage from '../../../pages/fitnessTest/FitnessTestDetailsPage';
import AddFitnessTestPage from '../../../pages/fitnessTest/AddFitnessTestPage';
import FitnessTestListPage from '../../../pages/fitnessTest/FitnessTestListPage'

import PlayerListPage from '../../../pages/team/PlayerListPage';
import PlayerDetailsPage from '../../../pages/team/PlayerDetailsPage';

import DiaryEntriesListPage from '../../../pages/diary/DiaryEntryListPage';
import DiaryEntryDetailsPage from '../../../pages/diary/DiaryEntryDetailsPage';


function ManagerTabs() {
  return (

    <IonTabs id="ManagerNavbar" >
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

        <Route path="/manager/team/panel/:id"><PlayerDetailsPage></PlayerDetailsPage></Route>
        <Route exact path="/manager/team/panel/list"><PlayerListPage></PlayerListPage></Route>

        <Route path="/player/diary-entries/:id"><DiaryEntryDetailsPage></DiaryEntryDetailsPage></Route>
        <Route exact path="/player/diary-entries/list"><DiaryEntriesListPage></DiaryEntriesListPage></Route>

        <Redirect exact path="/" to ="/home"></Redirect>
    </IonRouterOutlet>

    <IonTabBar id="ManagerNavbar" slot="bottom">
        <IonTabButton id="ManagerNavbar" tab="my" href="/manager/my">
          <IonIcon icon={personOutline} />
          <IonLabel>My</IonLabel>
        </IonTabButton>
        <IonTabButton id="ManagerNavbar" tab="planner" href="/manager/planner">
          <IonIcon icon={clipboardOutline} />
          <IonLabel>Planner</IonLabel>
        </IonTabButton>
        <IonTabButton id="ManagerNavbar"  tab="home" href="/manager/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton id="ManagerNavbar"   tab="team" href="/manager/team">
          <IonIcon icon={peopleOutline} />
          <IonLabel>Team</IonLabel>
        </IonTabButton>
        <IonTabButton id="ManagerNavbar"  tab="more" href="/manager/more">
          <IonIcon icon={menuOutline} />
          <IonLabel>More</IonLabel>
        </IonTabButton>
    </IonTabBar>
    </IonTabs>
  );
}

export default ManagerTabs;
