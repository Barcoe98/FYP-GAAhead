import { Route , Redirect} from 'react-router-dom'
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { homeOutline, clipboardOutline, menuOutline, peopleOutline, personOutline} from 'ionicons/icons';

import HomePage from '../../../pages/navBarPages/homePage';
import MorePage from '../../../pages/navBarPages/morePage';
import MyProfilePage from '../../../pages/navBarPages/myProfilePage';
import TeamPage from '../../../pages/navBarPages/teamPage';
import PlannerPage from '../../../pages/navBarPages/plannerPage';

import TrainingScheduleDetailsPage from '../../../pages/trainingSchedule/TrainingScheduleDetailsPage';
import TrainingScheduleListPage from '../../../pages/trainingSchedule/TrainingScheduleListPage';

import FitnessTestDetailsPage from '../../../pages/fitnessTest/FitnessTestDetailsPage';
import FitnessTestListPage from '../../../pages/fitnessTest/FitnessTestListPage'
import AddFitnessTestPage from '../../../pages/fitnessTest/AddFitnessTestPage';
import AddFitnessTestResultsPage from '../../../pages/fitnessTest/AddFitnessTestResultsPage';

import WorkoutRoutineDetailsPage from '../../../pages/workoutRoutine/WorkoutDetailsPage';
import WorkoutRoutineListPage from '../../../pages/workoutRoutine/WorkoutListPage';
import AddWorkoutRoutinePage from '../../../pages/workoutRoutine/AddWorkoutPage';

import MatchDetailsPage from '../../../pages/match/MatchDetailsPage';
import MatchListPage from '../../../pages/match/MatchListPage';
import AddMatchPage from '../../../pages/match/addMatchPage';

import PlayerListPage from '../../../pages/team/PlayerListPage';
import PlayerDetailsPage from '../../../pages/team/PlayerDetailsPage';

import DiaryEntriesListPage from '../../../pages/diary/DiaryEntryListPage';
import DiaryEntryDetailsPage from '../../../pages/diary/DiaryEntryDetailsPage';

import "../navbar.css"


const ManagerTabs = () => { 

  return (
    <IonTabs id="ManagerNavbar" >
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

        <Route path="/manager/workout/:id"><WorkoutRoutineDetailsPage></WorkoutRoutineDetailsPage></Route>
        <Route exact path="/manager/workout/add"><AddWorkoutRoutinePage></AddWorkoutRoutinePage></Route>
        <Route exact path="/manager/workout/list"><WorkoutRoutineListPage></WorkoutRoutineListPage></Route>

        <Route path="/manager/match/:id"><MatchDetailsPage></MatchDetailsPage></Route>
        <Route exact path="/manager/match/add"><AddMatchPage></AddMatchPage></Route>
        <Route exact path="/manager/match/list"><MatchListPage></MatchListPage></Route>

        <Route path="/manager/trainingschedule/:id"><TrainingScheduleDetailsPage></TrainingScheduleDetailsPage></Route>
        <Route exact path="/manager/trainingschedule/list"><TrainingScheduleListPage></TrainingScheduleListPage></Route>

        <Route path="/manager/team/panel/:id"><PlayerDetailsPage></PlayerDetailsPage></Route>
        <Route exact path="/manager/team/panel/list"><PlayerListPage></PlayerListPage></Route>

        <Route path="/player/diary-entries/:id"><DiaryEntryDetailsPage></DiaryEntryDetailsPage></Route>
        <Route exact path="/player/diary-entries/add"><DiaryEntriesListPage></DiaryEntriesListPage></Route>
        <Route exact path="/player/diary-entries/list"><DiaryEntriesListPage></DiaryEntriesListPage></Route>

        <Redirect exact path="/" to ="/home"></Redirect>
    </IonRouterOutlet>

    <IonTabBar id="ManagerNavbar" slot="bottom">
        <IonTabButton id="ManagerNavbar" tab="my-profile" href="/manager/my-profile">
          <IonIcon icon={personOutline} />
          <IonLabel>My Profile</IonLabel>
        </IonTabButton>
        <IonTabButton id="ManagerNavbar" tab="planner" href="/manager/planner">
          <IonIcon icon={clipboardOutline} />
          <IonLabel>Planner</IonLabel>
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
