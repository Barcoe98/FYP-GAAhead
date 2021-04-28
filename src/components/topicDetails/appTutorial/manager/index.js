import React from "react";
import { IonContent, IonSlides } from "@ionic/react";

import WelcomeSlide from "../WelcomeSlide";
import NavSlide from "./navBarSlides/navSlide";
import FixtureSlide from "./gamesSlides/fixtureSlide";
import ResultsSlide from "./gamesSlides/resultsSlide";
import PlannerSlide from'./navBarSlides/plannerSlide';
import PanelSlide from "./myTeamSlides/panelSlide";
import TeamStatsSlide from './myTeamSlides/teamStatsSlide';
import TeamSheetsSlide from './myTeamSlides/teamSheetsSlide';

import MoreSlide from "./navBarSlides/moreSlide";

import '../appTutorial.css'

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const AppTutorialManager = () => {
return (
  <IonContent id="bg-col">
    <IonSlides pager={true} options={slideOpts}>
      <WelcomeSlide></WelcomeSlide>
      <NavSlide></NavSlide>
      <FixtureSlide></FixtureSlide>      
      <ResultsSlide></ResultsSlide>
      <PlannerSlide></PlannerSlide>
      <PanelSlide></PanelSlide>
      <TeamStatsSlide></TeamStatsSlide>
      <TeamSheetsSlide></TeamSheetsSlide>
      <MoreSlide></MoreSlide>
    </IonSlides>
  </IonContent>
  );
};

export default AppTutorialManager;
