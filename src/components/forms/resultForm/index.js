import React from "react";
import { IonContent, IonGrid, IonRow, IonCol,IonLabel, IonItemDivider, IonButton, IonLoading } from '@ionic/react';
import TextInputField from '../../textInputs/textInputField'
import ContentArea from "../../textInputs/contentArea";
import ItemDivider from "../../textInputs/itemDivider";


const ResultForm = ({
  homeGoals, awayGoals, homePoints, awayPoints, homeBlocks, awayBlocks, homeHooks, awayHooks, homeShots, awayShots, 
  homeFouls, awayFouls, home65s, away65s, homeFrees, awayFrees,homeWides, awayWides, 
  homeYCard, awayYCard, homeRCard, awayRCard, homePenalties, awayPenalties, homePuckouts, awayPuckouts,
  setHomeGoals, setAwayGoals, setHomePoints, setAwayPoints, setHomeBlocks, setAwayBlocks, setHomeHooks, setAwayHooks, 
  setHomeShots, setAwayShots, setHomeFouls, setAwayFouls, setHome65s, setAway65s, setHomeFrees, setAwayFrees,
  setHomeWides, setAwayWides, setHomeYCard, setAwayYCard, setHomeRCard, setAwayRCard, setAwayPenalties, setHomePenalties, setHomePuckouts, setAwayPuckouts, 
  notes, setNotes, handleAdd, loading,}) => {
  return (
    <IonContent id="wr-pg-bg">
        <IonGrid id="wr-pg-bg">

          <IonRow>
            <IonCol>
              <IonItemDivider id="itm-divider-red">
                <IonLabel>Match Result Details</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>

          {/*Input Fields & Labels*/ }
          <IonRow>
            <TextInputField  size="6" label="Home Goals"   text={homeGoals}  setText={setHomeGoals} placeholderText="Home Goals" type="number" ></TextInputField>
            <TextInputField  size="6" label="Away Goals"  text={awayGoals} setText={setAwayGoals} placeholderText="Away Goals" type="number" ></TextInputField>
          </IonRow>
          <IonRow>
            <TextInputField  size="6" label="Home Points"   text={homePoints}  setText={setHomePoints} placeholderText="Home Points" type="number" ></TextInputField>
            <TextInputField  size="6" label="Away Points"  text={awayPoints} setText={setAwayPoints} placeholderText="Away Points" type="number" ></TextInputField>
          </IonRow>

          {/*Shots Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Shots & Wides"></ItemDivider>
          <IonRow>
            <TextInputField  size="6" label="Home Shots"  text={homeShots} setText={setHomeShots} placeholderText="Home Shots" type="number" ></TextInputField>
            <TextInputField  size="6" label="Away Shots"  text={awayShots} setText={setAwayShots} placeholderText="Away Shots" type="number" ></TextInputField>
          </IonRow>
          <IonRow>
            <TextInputField  size="6" label="Home Wides"  text={homeWides} setText={setHomeWides} placeholderText="Home Wides" type="number" ></TextInputField>
            <TextInputField  size="6" label="Away Wides"  text={awayWides} setText={setAwayWides} placeholderText="Away Wides" type="number" ></TextInputField>
          </IonRow>
          <IonRow>
            <TextInputField  size="6" label="Home Puckouts"  text={homePuckouts} setText={setHomePuckouts} placeholderText="Home Puckouts" type="number" ></TextInputField>
            <TextInputField  size="6" label="Away Puckouts"  text={awayPuckouts} setText={setAwayPuckouts} placeholderText="Away Puckouts" type="number" ></TextInputField>
          </IonRow>

          {/*Free's Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Free's & 65's"></ItemDivider>
          <IonRow>
            <TextInputField  size="6" label="Home Frees"  text={homeFrees} setText={setHomeFrees} placeholderText="Home Frees" type="number"></TextInputField>
            <TextInputField  size="6" label="Away Frees"  text={awayFrees} setText={setAwayFrees} placeholderText="Away Frees" type="number"></TextInputField>
          </IonRow>
          <IonRow>
            <TextInputField  size="6" label="Home 65s"  text={home65s} setText={setHome65s} placeholderText="Home 65s" type="number"></TextInputField>
            <TextInputField  size="6" label="Away 65s"  text={away65s} setText={setAway65s} placeholderText="Away 65s" type="number"></TextInputField>
          </IonRow>

          {/*Hooks & Blocks Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Hooks & Blocks"></ItemDivider>
          <IonRow>
            <TextInputField  size="6" label="Home Blocks"   text={homeBlocks}  setText={setHomeBlocks} placeholderText="Home Blocks" type="number" ></TextInputField>
            <TextInputField  size="6" label="Away Blocks"  text={awayBlocks} setText={setAwayBlocks} placeholderText="Away Hooks" type="number" ></TextInputField>
          </IonRow>
          <IonRow>
            <TextInputField  size="6" label="Home Hooks" text={homeHooks}  setText={setHomeHooks} placeholderText="Home Hooks" type="number" ></TextInputField>
            <TextInputField  size="6" label="Away Hooks"  text={awayHooks} setText={setAwayHooks} placeholderText="Enter Hooks" type="number" ></TextInputField>
          </IonRow>

          {/*Fouls & Cards Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Fouls & Cards"></ItemDivider>
          <IonRow>
            <TextInputField  size="6" label="Home Fouls"  text={homeFouls} setText={setHomeFouls} placeholderText="Home Fouls" type="number"></TextInputField>
            <TextInputField  size="6" label="Away Fouls"  text={awayFouls} setText={setAwayFouls} placeholderText="Away Fouls" type="number"></TextInputField>
          </IonRow>
          <IonRow>
            <TextInputField  size="6" label="Home Penalties"  text={homePenalties} setText={setHomePenalties} placeholderText="Home Penalties" type="number"></TextInputField>
            <TextInputField  size="6" label="Away Penalties"  text={awayPenalties} setText={setAwayPenalties} placeholderText="Away Penalties" type="number"></TextInputField>
          </IonRow>
          <IonRow>
            <TextInputField  size="6" label="Home Yellow Cards"  text={homeYCard} setText={setHomeYCard} placeholderText="Home Yellow Cards" type="number" ></TextInputField>
            <TextInputField  size="6" label="Away Yellow Cards"  text={awayYCard} setText={setAwayYCard} placeholderText="Away Yellow Cards" type="number" ></TextInputField>
          </IonRow>
          <IonRow>
            <TextInputField  size="6" label="Home Red Cards"  text={homeRCard} setText={setHomeRCard} placeholderText="Home Red Cards" type="number" ></TextInputField>
            <TextInputField  size="6" label="Away Red Cards"  text={awayRCard} setText={setAwayRCard} placeholderText="Away Red Cards" type="number" ></TextInputField>
          </IonRow>

          {/*Match Notes Input Fields & Labels*/ }
          <ItemDivider dividerLabel="Match Notes"></ItemDivider>
          <ContentArea text={notes} setNotes={setNotes} txtAreaLbl="Match Notes" placeholderText="Enter Match Notes"></ContentArea>         

          
          {/* Add Button*/ }
          <IonRow>
            <IonCol>
              <IonLoading isOpen={loading}></IonLoading>
              <IonButton onClick={handleAdd} id="btnTheme" expand="block" color="dark" fill="solid" type="submit" >add Match Result</IonButton>
            </IonCol>
          </IonRow>
          
        </IonGrid>
      </IonContent>
      
  );
};

export default ResultForm;