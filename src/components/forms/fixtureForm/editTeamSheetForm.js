import React from "react";
import { IonGrid, IonRow } from "@ionic/react";
import TextInputField from "../../textInputs/textInputField";
import ItemDividerGaa from "../../textComponents/dividerHeaders/itemDividerGaa";
import PlayerDropDown from "../../textComponents/matchStats/index";

const TeamSheetForm = ({
  homeTeam, awayTeam,setHomeTeam, setAwayTeam, date, setDate, time, setTime, venue, setVenue,
  competition, setCompetition, handleEdit, players,
  position1, setPosition1, position2, setPosition2, position3, setPosition3,
  position4, setPosition4, position5, setPosition5, position6, setPosition6, 
  position7, setPosition7, position8, setPosition8, position9, setPosition9, 
  position10, setPosition10, position11, setPosition11, position12, setPosition12,  
  position13, setPosition13, position14, setPosition14, position15, setPosition15, 
  position16, setPosition16, position17, setPosition17, position18, setPosition18,   
  position19, setPosition19, position20, setPosition20
}) => {

  return (
      <IonGrid id="wr-pg-bg">

      <ItemDividerGaa dividerLabel="Update Match Fixture Details"></ItemDividerGaa>

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

        <ItemDividerGaa dividerLabel="Team Sheet"></ItemDividerGaa>

        <ItemDividerGaa dividerLabel="Goal Keeper"></ItemDividerGaa>
          <PlayerDropDown players={players} setValue={setPosition1} positionValue={position1} positionNumber="1"></PlayerDropDown>

        <ItemDividerGaa dividerLabel="Full Back Line"></ItemDividerGaa>
          <PlayerDropDown players={players} setValue={setPosition2} positionValue={position2} positionNumber="2"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition3} positionValue={position3} positionNumber="3"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition4} positionValue={position4} positionNumber="4"></PlayerDropDown>

        <ItemDividerGaa dividerLabel="Half Back Line"></ItemDividerGaa>
          <PlayerDropDown players={players} setValue={setPosition5} positionValue={position5} positionNumber="5"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition6} positionValue={position6} positionNumber="6"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition7} positionValue={position7} positionNumber="7"></PlayerDropDown>

        <ItemDividerGaa dividerLabel="Midfield"></ItemDividerGaa>
          <PlayerDropDown players={players} setValue={setPosition8}positionValue={position8} positionNumber="8"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition9} positionValue={position9} positionNumber="9"></PlayerDropDown>
          
        <ItemDividerGaa dividerLabel="Half Forward Line"></ItemDividerGaa>
          <PlayerDropDown players={players} setValue={setPosition10} positionValue={position10} positionNumber="10"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition11} positionValue={position11} positionNumber="11"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition12} positionValue={position12} positionNumber="12"></PlayerDropDown>

        <ItemDividerGaa dividerLabel="Full Forward Line"></ItemDividerGaa>
          <PlayerDropDown players={players} setValue={setPosition13} positionValue={position13} positionNumber="13"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition14} positionValue={position14} positionNumber="14"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition15} positionValue={position15} positionNumber="15"></PlayerDropDown>

        <ItemDividerGaa dividerLabel="Subs"></ItemDividerGaa>
          <PlayerDropDown players={players} setValue={setPosition16} positionValue={position16} positionNumber="16"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition17} positionValue={position17} positionNumber="17"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition18} positionValue={position18} positionNumber="18"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition19} positionValue={position19} positionNumber="19"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={setPosition20} positionValue={position20} positionNumber="20"></PlayerDropDown>

      </IonGrid>
  );
};

export default TeamSheetForm;
