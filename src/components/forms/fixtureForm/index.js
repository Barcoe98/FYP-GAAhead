import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonItemDivider,
  IonButton,
} from "@ionic/react";
import TextInputField from "../../textInputs/textInputField";

const FixtureForm = ({
  homeTeam,
  awayTeam,
  setHomeTeam,
  setAwayTeam,
  date,
  setDate,
  time,
  setTime,
  venue,
  setVenue,
  competition,
  setCompetition,
  handleAdd,
  loading,
  btnName
}) => {
  return (
      <IonGrid id="wr-pg-bg">
        <IonRow>
          <IonCol>
            <IonItemDivider id="itm-divider-red">
              <IonLabel>Match Fixture Details</IonLabel>
            </IonItemDivider>
          </IonCol>
        </IonRow>

        {/*Input Fields & Labels*/}
        <IonRow>
          <TextInputField
            size="6"
            label="Home Team Name"
            text={homeTeam}
            setText={setHomeTeam}
            placeholderText="Home Team Name"
            type="string"
          ></TextInputField>
          <TextInputField
            size="6"
            label="Away Team Name"
            text={awayTeam}
            setText={setAwayTeam}
            placeholderText="Away Team Name"
            type="string"
          ></TextInputField>
        </IonRow>

        {/* Date & Time Input Fields & Labels*/}
        <IonRow>
          <TextInputField
            size="6"
            label="Date"
            text={date}
            setText={setDate}
            placeholderText="Date"
            type="string"
          ></TextInputField>
          <TextInputField
            size="6"
            label="Time"
            text={time}
            setText={setTime}
            placeholderText="Time"
            type="string"
          ></TextInputField>
        </IonRow>

        {/* Venue Input Fields & Labels*/}
        <IonRow>
          <TextInputField
            size="12"
            label="Venue"
            text={venue}
            setText={setVenue}
            placeholderText="Match Venue"
            type="string"
          ></TextInputField>
        </IonRow>

        {/* Competition Input Fields & Labels*/}
        <IonRow>
          <TextInputField
            size="12"
            label="Competition"
            text={competition}
            setText={setCompetition}
            placeholderText="Competition"
            type="string"
          ></TextInputField>
        </IonRow>

        {/* Add Button*/}
        <IonRow>
          <IonCol>
            <IonButton
              onClick={handleAdd}
              id="btnTheme"
              expand="block"
              color="dark"
              fill="solid"
              type="submit">
              {btnName}
            </IonButton>
          </IonCol>
        </IonRow>

      </IonGrid>

  );
};

export default FixtureForm;
