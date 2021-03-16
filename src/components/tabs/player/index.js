import { Route , Redirect} from 'react-router-dom'
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { menuOutline, peopleOutline} from 'ionicons/icons';

import HomePage from '../../../pages/navBarPages/homePage';
import MorePage from '../../../pages/navBarPages/morePage';
import MyProfilePage from '../../../pages/navBarPages/myProfilePage';
import TeamPage from '../../../pages/navBarPages/teamPage';
import PlannerPage from '../../../pages/navBarPages/plannerPage';

import TrainingScheduleDetailsPage from '../../../pages/trainingSchedule/TrainingScheduleDetailsPage';
import TrainingScheduleListPage from '../../../pages/trainingSchedule/TrainingScheduleListPage';

import FitnessTestDetailsPage from '../../../pages/fitnessTest/FitnessTestDetailsPage';
import AddFitnessTestPage from '../../../pages/fitnessTest/AddFitnessTestPage';
import AddFitnessTestResultsPage from '../../../pages/fitnessTest/AddFitnessTestResultsPage';

import FitnessTestListPage from '../../../pages/fitnessTest/FitnessTestListPage'

import PlayerListPage from '../../../pages/team/PlayerListPage';
import PlayerDetailsPage from '../../../pages/team/PlayerDetailsPage';

import DiaryEntriesListPage from '../../../pages/diary/DiaryEntryListPage';
import DiaryEntryDetailsPage from '../../../pages/diary/DiaryEntryDetailsPage';

import "../navbar.css"


const PlayerTabs = () => { 

  return (
    <IonTabs id="PlayerNavbar" >
    <IonRouterOutlet>
        <Route exact path="/manager/home"><HomePage></HomePage></Route>
        <Route exact path="/manager/more"><MorePage></MorePage></Route>
        <Route path="/manager/my-profile"><MyProfilePage></MyProfilePage></Route>
        <Route exact path="/manager/team"><TeamPage></TeamPage></Route>
        <Route exact path="/manager/planner"><PlannerPage></PlannerPage></Route>

        <Route path="/manager/fitness/test/:id"><FitnessTestDetailsPage></FitnessTestDetailsPage></Route>
        <Route exact path="/manager/fitness/test/add"><AddFitnessTestPage></AddFitnessTestPage></Route>
        <Route exact path="/player/fitness/test/add-results"><AddFitnessTestResultsPage></AddFitnessTestResultsPage></Route>
        <Route exact path="/manager/fitness/test/list"><FitnessTestListPage></FitnessTestListPage></Route>

        <Route path="/manager/planner/trainingschedule/:id"><TrainingScheduleDetailsPage></TrainingScheduleDetailsPage></Route>
        <Route exact path="/manager/planner/trainingschedule/list"><TrainingScheduleListPage></TrainingScheduleListPage></Route>

        <Route path="/manager/team/panel/:id"><PlayerDetailsPage></PlayerDetailsPage></Route>
        <Route exact path="/manager/team/panel/list"><PlayerListPage></PlayerListPage></Route>

        <Route path="/player/diary-entries/:id"><DiaryEntryDetailsPage></DiaryEntryDetailsPage></Route>
        <Route exact path="/player/diary-entries/add"><DiaryEntriesListPage></DiaryEntriesListPage></Route>
        <Route exact path="/player/diary-entries/list"><DiaryEntriesListPage></DiaryEntriesListPage></Route>

        <Redirect exact path="/" to ="/home"></Redirect>
    </IonRouterOutlet>

    <IonTabBar id="ManagerNavbar" slot="bottom">
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

export default PlayerTabs;
