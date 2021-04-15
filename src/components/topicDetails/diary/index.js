import React from "react";
import { IonContent, IonList, IonText, IonImg} from "@ionic/react";
import DiaryStatBar from "../../textComponents/diary/index";
import MealHeader from "../../textComponents/diary/mealHeader";

import "./diaryEntry.css";


const DiaryDetails = ({ diaryEntry }) => {

return (
  <IonContent>
    <IonList id="bg-col">
    
    <IonText id="dTitle">{diaryEntry?.title}</IonText>
    <IonText id="dDate">{diaryEntry?.date}</IonText>
      <IonImg id="img" alt="me" 
        src="https://res.cloudinary.com/dmikx06rt/image/upload/v1614708839/FYP-GAAhead/chicken-1199243__340_xlz1io.webp" />
      
      <div id="sectionContent">

        <DiaryStatBar
          sleepVar={diaryEntry?.hrsSleep}
          stepsVar={diaryEntry?.steps}
          waterVar={diaryEntry?.litresWater}
          calVar={diaryEntry?.totalCalories}>
        </DiaryStatBar>
        
        <MealHeader 
          mealTitle="Breakfast"
          mealKcal= {diaryEntry?.breakfastCal}
          meal={diaryEntry?.breakfast}>
        </MealHeader>

        <MealHeader 
          mealTitle="Lunch"
          mealKcal= {diaryEntry?.lunchCal}
          meal={diaryEntry?.lunch}>
        </MealHeader>

        <MealHeader 
          mealTitle="Dinner"
          mealKcal= {diaryEntry?.dinnerCal}
          meal={diaryEntry?.dinner}>
        </MealHeader>

        <MealHeader 
          mealTitle="Supper"
          mealKcal= {diaryEntry?.supperCal}
          meal={diaryEntry?.supper}>
        </MealHeader>

        <MealHeader 
          mealTitle="Snacks"
          mealKcal= {diaryEntry?.snacksCal}
          meal={diaryEntry?.snacks}>
        </MealHeader>

        </div>

    </IonList>
  </IonContent>
  );
};

export default DiaryDetails;
