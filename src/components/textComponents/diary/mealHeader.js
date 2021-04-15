import React from "react";
import { IonRow, IonCol, IonText, IonItemDivider} from "@ionic/react";

import "./diary.css";


const MealHeader = ({ mealTitle, mealKcal, meal }) => {
  return (

    <IonRow>
      <IonItemDivider id="itm-divider-blue">
        <IonCol size="8">
          <IonText id="mealTitle">{mealTitle}</IonText>
        </IonCol>
        <IonCol size="4">
          <IonText id="mealValue">{mealKcal}Kcal</IonText>
        </IonCol>
      </IonItemDivider>

      <IonText id="meal">{meal}</IonText>

    </IonRow>

    

  );
};

export default MealHeader;
