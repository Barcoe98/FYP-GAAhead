import { Route, Redirect } from "react-router-dom";
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,} from "@ionic/react";
import { ellipsisHorizontalOutline, peopleOutline, personOutline, documentOutline } from "ionicons/icons";

import MorePage from "../../../pages/more/morePlayerPage";

import AppTutorial from "../../../pages/appTutorial/PlayerAppTutorialPage";
import ContactUs from "../../../pages/navBarPages/contactUsPage";

import PlayerProfilePage from "../../../pages/profiles/player/playerProfilePage";
import EditPlayerProfilePage from "../../../pages/profiles/player/editPlayerProfilePage";

import MyTeamPage from "../../../pages/navBarPages/player/myTeamPage";
import ResetTeamStatsPage from "../../../pages/navBarPages/player/JoinTeamPage";

import PlayerListPage from "../../../pages/team/PlayerListPage";
import TeamStatsPage from "../../../pages/teamStats/TeamStatsPage";

import DiaryEntriesListPage from "../../../pages/diary/DiaryEntryListPage";
import DiaryEntryDetailsPage from "../../../pages/diary/DiaryEntryDetailsPage";
import AddDiaryEntryPage from "../../../pages/diary/addDiaryEntry";

import TrainingScheduleDetailsPage from "../../../pages/trainingSchedule/TrainingScheduleDetailsPage";
import TrainingScheduleListPage from "../../../pages/trainingSchedule/TrainingScheduleListPage";
import FitnessTestDetailsPage from "../../../pages/fitnessTest/FitnessTestDetailsPage";
import FitnessTestListPage from "../../../pages/fitnessTest/FitnessTestListPage";
import AddFitnessTestResultsPage from "../../../pages/fitnessTest/AddFitnessTestResultsPage";
import WorkoutRoutineDetailsPage from "../../../pages/workoutRoutine/WorkoutDetailsPage";
import WorkoutRoutineListPage from "../../../pages/workoutRoutine/WorkoutListPage";

import ResultDetailsPage from "../../../pages/result/ResultDetailsPage";
import ResultListPage from "../../../pages/result/ResultListPage";
import FixtureListPage from "../../../pages/fixture/FixtureListPage";
import FixtureDetailsPage from "../../../pages/fixture/FixtureDetailsPage";


const PlayerTabs = () => {
  return (
    <IonTabs id="PlayerNavbar">
    <IonRouterOutlet>

    <Route path="/diary-entries/:id"><DiaryEntryDetailsPage></DiaryEntryDetailsPage></Route>
    <Route exact path="/diary-entries/list"><DiaryEntriesListPage></DiaryEntriesListPage></Route>
    <Route exact path="/diary-entries/add"><AddDiaryEntryPage></AddDiaryEntryPage></Route>

    <Route exact path="/player/more"><MorePage></MorePage></Route>
    <Route exact path="/player/app-tutorial"><AppTutorial></AppTutorial></Route>
    <Route exact path="/contact-us"><ContactUs></ContactUs></Route>

    <Route path="/player/my-profile"><PlayerProfilePage></PlayerProfilePage></Route>
    <Route path="/player/my-profile/edit"><EditPlayerProfilePage></EditPlayerProfilePage></Route>

    <Route path="/player/my-team"><MyTeamPage></MyTeamPage></Route>

    <Route exact path="/player/join/team"><ResetTeamStatsPage></ResetTeamStatsPage></Route>
    <Route exact path="/team/panel/list"><PlayerListPage></PlayerListPage></Route>

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

      <IonTabBar id="PlayerNavbar" slot="bottom">

        <IonTabButton id="PlayerNavbar" tab="team" href="/player/my-team">
          <IonIcon icon={peopleOutline} />
          <IonLabel>My Team</IonLabel>
        </IonTabButton>
        
        <IonTabButton id="PlayerNavbar" tab="matches" href="/diary-entries/list">
        <IonIcon icon={documentOutline} />
          <IonLabel>Journal</IonLabel>
        </IonTabButton>

        <IonTabButton id="PlayerNavbar" tab="myProfile" href="/player/my-profile">
        <IonIcon icon={personOutline} />
          <IonLabel>My Profile</IonLabel>
        </IonTabButton>

        <IonTabButton id="PlayerNavbar" tab="more" href="/player/more">
          <IonIcon icon={ellipsisHorizontalOutline} />
          <IonLabel>More</IonLabel>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  );
};

export default PlayerTabs;
