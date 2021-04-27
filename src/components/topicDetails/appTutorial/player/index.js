import React from "react";
import { IonContent, IonSlides } from "@ionic/react";

import '../appTutorial.css'
import WelcomeSlide from "./WelcomeSlide";
import SlideTwo from "./slideTwo";
import SlideThree from "./navSlide";
import JournalSlide from "./journalSlide";
import MyProfileSlide from "./myProfileSlide";
import MoreSlide from "./moreSlide";


// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const AppTutorialPlayer = () => {
return (
  <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <WelcomeSlide></WelcomeSlide>
      <SlideThree></SlideThree>
      <JournalSlide></JournalSlide>
      <MyProfileSlide></MyProfileSlide>
      <MoreSlide></MoreSlide>
      <SlideTwo></SlideTwo>
    </IonSlides>
  </IonContent>
  );
};

export default AppTutorialPlayer;
