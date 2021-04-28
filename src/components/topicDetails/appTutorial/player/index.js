import React from "react";
import { IonContent, IonSlides } from "@ionic/react";

import WelcomeSlide from "../WelcomeSlide";
import NavSlide from "./navBarSlides/navSlide";
import FixtureSlide from "./myTeamSlides/fixtureSlide";
import ActivitySlide from'./myTeamSlides/activitySlide';
import TeamSheetsSlide from './myTeamSlides/teamSheetsSlide';
import MyProfileSlide from './navBarSlides/myProfileSlide';
import JournalSlide from './navBarSlides/journalSlide';
import MoreSlide from "./navBarSlides/moreSlide";
import NoteSlide from "./navBarSlides/noteSlide";

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
      <TeamSheetsSlide></TeamSheetsSlide>    
      <ActivitySlide></ActivitySlide>
      <JournalSlide></JournalSlide>
      <MyProfileSlide></MyProfileSlide>
      <MoreSlide></MoreSlide>
      <NoteSlide></NoteSlide>
    </IonSlides>
  </IonContent>
  );
};

export default AppTutorialManager;
