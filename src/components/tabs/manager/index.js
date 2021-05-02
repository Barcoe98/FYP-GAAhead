import { Route, Redirect } from "react-router-dom";
import { IonRouterOutlet, IonTabs,  IonTabBar, IonTabButton,  IonIcon,IonLabel,} from "@ionic/react";
import { clipboardOutline, ellipsisHorizontalOutline, menuOutline, peopleOutline} from "ionicons/icons";

import MorePage from "../../../pages/more/moreMangerPage";
import TeamPage from "../../../pages/navBarPages/manager/teamPage";
import PlannerPage from "../../../pages/navBarPages/manager/plannerPage";
import MatchPage from "../../../pages/navBarPages/manager/matchesPage";
import AppTutorial from "../../../pages/appTutorial/ManagerAppTutorialPage";
import ContactUs from "../../../pages/navBarPages/contactUsPage";
import ManagerProfileDetails from "../../../pages/profiles/manager/managerProfilePage";
import EditManagerProfileDetails from "../../../pages/profiles/manager/editManagerProfilePage";

import TrainingScheduleDetailsPage from "../../../pages/trainingSchedule/TrainingScheduleDetailsPage";
import TrainingScheduleListPage from "../../../pages/trainingSchedule/TrainingScheduleListPage";
import AddTrainingPage from "../../../pages/trainingSchedule/AddTrainingSchedulePage";
import EditTrainingSchedulePage from "../../../pages/trainingSchedule/EditTrainingSchedulePage"

import FitnessTestDetailsPage from "../../../pages/fitnessTest/FitnessTestDetailsPage";
import FitnessTestListPage from "../../../pages/fitnessTest/FitnessTestListPage";
import AddFitnessTestPage from "../../../pages/fitnessTest/AddFitnessTestPage";
import AddFitnessTestResultsPage from "../../../pages/fitnessTest/AddFitnessTestResultsPage";
import FitnessTestResultsListPage from "../../../pages/fitnessTest/FitnessTestResultsListPage";
import EditFitnessTestPage from "../../../pages/fitnessTest/EditFitnessTestPage"

import WorkoutRoutineDetailsPage from "../../../pages/workoutRoutine/WorkoutDetailsPage";
import WorkoutRoutineListPage from "../../../pages/workoutRoutine/WorkoutListPage";
import AddWorkoutRoutinePage from "../../../pages/workoutRoutine/AddWorkoutPage";
import EditWorkoutPage from "../../../pages/workoutRoutine/EditWorkoutPage";

import ResultDetailsPage from "../../../pages/result/ResultDetailsPage";
import ResultListPage from "../../../pages/result/ResultListPage";
import AddResultPage from "../../../pages/result/addResultPage";

import FixtureListPage from "../../../pages/fixture/FixtureListPage";
import FixtureDetailsPage from "../../../pages/fixture/FixtureDetailsPage";
import AddFixturePage from "../../../pages/fixture/addFixturePage";
import EditFixturePage from "../../../pages/fixture/editFixturePage";

import PlayerListPage from "../../../pages/team/PlayerListPage";
import PlayerDetailsPage from "../../../pages/team/PlayerDetailsPage";

import TeamSheetListPage from "../../../pages/teamSheets/TeamSheetListPage";
import TeamSheetDetailsPage from "../../../pages/teamSheets/TeamSheetDetailsPage";
import AddTeamSheetPage from "../../../pages/teamSheets/AddTeamSheetPage";
import EditTeamSheetPage from "../../../pages/teamSheets/EditTeamSheetPage";

import ResetTeamStatisticsPage from "../../../pages/teamStats/ResetTeamStatsPage"
import MoreTeamStatsDetailsPage from "../../../pages/teamStats/MoreTeamStatsDetailsPage";
import MoreTeamStatsListPage from "../../../pages/teamStats/MoreTeamStatsListPage";
import TeamStatsPage from "../../../pages/teamStats/TeamStatsPage";


const ManagerTabs = () => {
  return (
    <IonTabs id="ManagerNavbar">
      <IonRouterOutlet>

        {/* Nav Pages*/}
        <Route path="/manager/match"><MatchPage></MatchPage></Route>
        <Route exact path="/manager/team"><TeamPage></TeamPage> </Route>
        <Route exact path="/manager/planner"><PlannerPage></PlannerPage></Route>
        <Route exact path="/more"><MorePage></MorePage></Route>
        
        {/* More Pages*/}
        <Route exact path="/manager/app-tutorial"><AppTutorial></AppTutorial></Route>
        <Route exact path="/contact-us"><ContactUs></ContactUs></Route>

        <Route path="/manager/my-profile"><ManagerProfileDetails></ManagerProfileDetails></Route>
        <Route path="/manager/my-profile/edit"><EditManagerProfileDetails></EditManagerProfileDetails></Route>

        <Route exact path="/manager/teamstats/reset"> <ResetTeamStatisticsPage></ResetTeamStatisticsPage></Route>
        <Route path="/manager/team-stats/:id"> <MoreTeamStatsDetailsPage></MoreTeamStatsDetailsPage></Route>
        <Route exact path="/manager/team-stats/more"> <MoreTeamStatsListPage></MoreTeamStatsListPage></Route>
        <Route exact path="/manager/team-stats"> <TeamStatsPage></TeamStatsPage></Route>

        <Route exact path="/manager/team-sheet/:id"><TeamSheetDetailsPage></TeamSheetDetailsPage></Route>
        <Route exact path="/manager/team-sheet/list"><TeamSheetListPage></TeamSheetListPage></Route>
        <Route exact path="/manager/team-sheet/add"><AddTeamSheetPage></AddTeamSheetPage></Route>
        <Route exact path="/manager/team-sheet/edit/:id"><EditTeamSheetPage></EditTeamSheetPage></Route>

        <Route path="/manager/team/panel/:id"><PlayerDetailsPage></PlayerDetailsPage></Route>
        <Route exact path="/manager/team/panel/list"><PlayerListPage></PlayerListPage></Route>

        <Route path="/manager/fitness/test/:id"><FitnessTestDetailsPage></FitnessTestDetailsPage></Route>
        <Route exact path="/manager/fitness/test/add"><AddFitnessTestPage></AddFitnessTestPage></Route>
        <Route exact path="/manager/fitness/test/edit/:id"><EditFitnessTestPage></EditFitnessTestPage></Route>

        <Route path="/player/fitness/test/add-results/:id"><AddFitnessTestResultsPage></AddFitnessTestResultsPage></Route>
        <Route exact path="/manager/fitness/test/list"><FitnessTestListPage></FitnessTestListPage></Route>
        <Route path="/manager/fitness/test/results/list/:id"><FitnessTestResultsListPage></FitnessTestResultsListPage></Route>

        <Route path="/manager/workout/:id"><WorkoutRoutineDetailsPage></WorkoutRoutineDetailsPage></Route>
        <Route exact path="/manager/workout/add"><AddWorkoutRoutinePage></AddWorkoutRoutinePage></Route>
        <Route exact path="/manager/workout/list"><WorkoutRoutineListPage></WorkoutRoutineListPage></Route>
        <Route path="/manager/workout/edit/:id"><EditWorkoutPage></EditWorkoutPage></Route>


        <Route path="/manager/result/:id"><ResultDetailsPage></ResultDetailsPage></Route>
        <Route exact path="/manager/result/add"><AddResultPage></AddResultPage></Route>
        <Route path="/manager/result/add/:id"><AddResultPage></AddResultPage></Route>
        <Route exact path="/manager/result/list"><ResultListPage></ResultListPage></Route>

        <Route path="/manager/fixture/:id"><FixtureDetailsPage></FixtureDetailsPage></Route>
        <Route exact path="/manager/fixture/add"><AddFixturePage></AddFixturePage></Route>
        <Route exact path="/manager/fixture/list"><FixtureListPage></FixtureListPage></Route>
        <Route path="/manager/fixture/edit/:id"><EditFixturePage></EditFixturePage></Route>

        <Route path="/manager/trainingschedule/:id"><TrainingScheduleDetailsPage></TrainingScheduleDetailsPage></Route>
        <Route exact path="/manager/trainingschedule/list"><TrainingScheduleListPage></TrainingScheduleListPage></Route>
        <Route exact path="/manager/trainingschedule/add"><AddTrainingPage></AddTrainingPage></Route>
        <Route path="/manager/trainingschedule/edit/:id"><EditTrainingSchedulePage></EditTrainingSchedulePage></Route>

        <Redirect exact path="/" to="/home"></Redirect>
      </IonRouterOutlet>


      <IonTabBar slot="bottom">
        <IonTabButton id="ManagerNavbar" tab="matches" href="/manager/match">
        <IonIcon icon={menuOutline} />
          <IonLabel>Fixtures & Results</IonLabel>
        </IonTabButton>
        <IonTabButton id="ManagerNavbar" tab="planner" href="/manager/planner">
          <IonIcon icon={clipboardOutline} />
          <IonLabel>Planner</IonLabel>
        </IonTabButton>
        <IonTabButton id="ManagerNavbar" tab="team" href="/manager/team">
          <IonIcon icon={peopleOutline} />
          <IonLabel>My Team</IonLabel>
        </IonTabButton>
        <IonTabButton id="ManagerNavbar" tab="more" href="/more">
          <IonIcon icon={ellipsisHorizontalOutline} />
          <IonLabel>More</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>

  );
};

export default ManagerTabs;
