import React from "react";
import {IonGrid,  IonRow,  IonCol, IonButton} from "@ionic/react";
import TextInputField from "../../textInputs/textInputField";
import DateInputField from "../../textInputs/dateInputField";
import TimeInputField from "../../textInputs/timeInputField";
import ImageInputField from '../../textInputs/imageInputField'
import ItemDividerGaa from "../../textComponents/dividerHeaders/itemDividerGaa";


const FixtureForm = ({ homeTeamImg, setHomeTeamImg, awayTeamImg, setAwayTeamImg,  homeTeam, awayTeam, setHomeTeam, setAwayTeam, date, setDate, time, setTime, venue, 
  setVenue, competition, setCompetition, handleAdd, btnName
}) => {
  return (
      <IonGrid id="wr-pg-bg">

        <ItemDividerGaa dividerLabel="Match Fixture Details"></ItemDividerGaa>

        {/*Input Fields & Labels*/}
        <IonRow>
          <ImageInputField size="12" label="Home Team Crest" imgSrc={homeTeamImg} 
          handleImgChange={setHomeTeamImg} ></ImageInputField>
          <ImageInputField size="12" label="Away Team Crest" imgSrc={awayTeamImg} 
          handleImgChange={setAwayTeamImg} ></ImageInputField>

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
          <DateInputField 
            label="Date" 
            size="6" 
            text={date}
            setText={setDate}
            placeholderText="Date"
          />
          <TimeInputField
            label="Time" 
            size="6" 
            text={time}
            setText={setTime}
            placeholderText="Time"
          />
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
