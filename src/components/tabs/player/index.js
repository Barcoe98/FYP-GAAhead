import { Route, Redirect } from "react-router-dom";
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { menuOutline, peopleOutline, personOutline, documentOutline } from "ionicons/icons";

import HomePage from "../../../pages/navBarPages/homePage";
import MorePage from "../../../pages/navBarPages/morePage";
import PlayerProfilePage from "../../../pages/navBarPages/myProfilePage";
import TeamPage from "../../../pages/navBarPages/teamPage";
import PlannerPage from "../../../pages/navBarPages/plannerPage";
import MatchPage from "../../../pages/navBarPages/matchesPage";

import TrainingScheduleDetailsPage from "../../../pages/trainingSchedule/TrainingScheduleDetailsPage";
import TrainingScheduleListPage from "../../../pages/trainingSchedule/TrainingScheduleListPage";

import FitnessTestDetailsPage from "../../../pages/fitnessTest/FitnessTestDetailsPage";
import FitnessTestListPage from "../../../pages/fitnessTest/FitnessTestListPage";
import AddFitnessTestPage from "../../../pages/fitnessTest/AddFitnessTestPage";
import AddFitnessTestResultsPage from "../../../pages/fitnessTest/AddFitnessTestResultsPage";

import WorkoutRoutineDetailsPage from "../../../pages/workoutRoutine/WorkoutDetailsPage";
import WorkoutRoutineListPage from "../../../pages/workoutRoutine/WorkoutListPage";
import AddWorkoutRoutinePage from "../../../pages/workoutRoutine/AddWorkoutPage";

import ResultDetailsPage from "../../../pages/result/ResultDetailsPage";
import ResultListPage from "../../../pages/result/ResultListPage";
import AddResultPage from "../../../pages/result/addResultPage";

import FixtureListPage from "../../../pages/fixture/FixtureListPage";
import FixtureDetailsPage from "../../../pages/fixture/FixtureDetailsPage";
import AddFixturePage from "../../../pages/fixture/addFixturePage";

import PlayerListPage from "../../../pages/team/PlayerListPage";
import PlayerDetailsPage from "../../../pages/team/PlayerDetailsPage";

import JoinTeamPage from "../../../pages/team/JoinTeamPage";

import TeamStatsPage from "../../../pages/teamStats/teamStatsPage";

import DiaryEntriesListPage from "../../../pages/diary/DiaryEntryListPage";
import DiaryEntryDetailsPage from "../../../pages/diary/DiaryEntryDetailsPage";
import ManagerProfileDetails from "../../topicDetails/myProfile/manager";
import AddTrainingPage from "../../../pages/trainingSchedule/AddTrainingSchedulePage";



const PlayerTabs = () => {
  return (
    <IonTabs id="PlayerNavbar">
    <IonRouterOutlet>

    <Route path="/diary-entries/:id"><DiaryEntryDetailsPage></DiaryEntryDetailsPage></Route>
    <Route exact path="/diary-entries/add"><DiaryEntriesListPage></DiaryEntriesListPage></Route>
    <Route exact path="/diary-entries/list"><DiaryEntriesListPage></DiaryEntriesListPage></Route>
    <Route exact path="/more"><MorePage></MorePage></Route>
    <Route path="/player/my-profile"><PlayerProfilePage></PlayerProfilePage></Route>

    <Route path="/manager/match"><MatchPage></MatchPage></Route>
    <Route exact path="/manager/team"><TeamPage></TeamPage></Route>
    <Route exact path="/player/team/join"><JoinTeamPage></JoinTeamPage></Route>
    
    <Route exact path="/manager/planner"><PlannerPage></PlannerPage></Route>
    <Route exact path="/manager/teamstats"><TeamStatsPage></TeamStatsPage></Route>

    <Route path="/fitness/test/:id"><FitnessTestDetailsPage></FitnessTestDetailsPage></Route>
    <Route exact path="/fitness/test/add-results"><AddFitnessTestResultsPage></AddFitnessTestResultsPage></Route>
    <Route exact path="/fitness/test/list"><FitnessTestListPage></FitnessTestListPage></Route>
    <Route path="/workout/:id"><WorkoutRoutineDetailsPage></WorkoutRoutineDetailsPage></Route>
    <Route exact path="/workout/list"><WorkoutRoutineListPage></WorkoutRoutineListPage></Route>
    <Route path="/result/:id"><ResultDetailsPage></ResultDetailsPage></Route>
    <Route exact path="/result/list"><ResultListPage></ResultListPage></Route>
    <Route path="/fixture/:id"><FixtureDetailsPage></FixtureDetailsPage></Route>
    <Route exact path="/fixture/list"><FixtureListPage></FixtureListPage></Route>
    <Route path="/trainingschedule/:id"><TrainingScheduleDetailsPage></TrainingScheduleDetailsPage></Route>
    <Route exact path="/trainingschedule/list"><TrainingScheduleListPage></TrainingScheduleListPage></Route>



    <Redirect exact path="/" to="/home"></Redirect>
  </IonRouterOutlet>

      <IonTabBar id="ManagerNavbar" slot="bottom">

        <IonTabButton id="ManagerNavbar" tab="team" href="/manager/team">
          <IonIcon icon={peopleOutline} />
          <IonLabel>My Team</IonLabel>
        </IonTabButton>
        
        <IonTabButton id="ManagerNavbar" tab="matches" href="/diary-entries/list">
        <IonIcon icon={documentOutline} />
          <IonLabel>Journal</IonLabel>
        </IonTabButton>

        <IonTabButton id="ManagerNavbar" tab="myProfile" href="/player/my-profile">
        <IonIcon icon={personOutline} />
          <IonLabel>My Profile</IonLabel>
        </IonTabButton>

        <IonTabButton id="ManagerNavbar" tab="more" href="/manager/more">
          <IonIcon icon={menuOutline} />
          <IonLabel>More</IonLabel>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  );
};

export default PlayerTabs;
