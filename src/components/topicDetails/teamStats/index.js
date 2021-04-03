import React, { useState } from "react";
import { IonContent, IonList } from "@ionic/react";
import TeamStatContent from "../../textComponents/teamStats/statContent";

import "./teamStats.css";
// import { useParams, useHistory } from "react-router-dom";
// import { firestore } from '../../firebase'
// import { useAuth } from '../../contexts/authContext'

// const [ goals, setGoals ] = useState("")
// const [ points, setPoints ] = useState("")
// const [ blocks, setBlocks ] = useState("")
// const [ hooks, setHooks ] = useState("")
// const [ shots, setShots ] = useState("")
// const [ wides, setWides ] = useState("")
// const [ fouls, setFouls ] = useState("")
// const [ h65s, setH65s ] = useState("")
// const [ frees, setFress ] = useState("")
// const [ penalties, setPenalties ] = useState("")
// const [ puckouts, setPuckouts ] = useState("")
// const [ yCard, setYCard ] = useState("")
// const [ rCard, setRCard ] = useState("")

// const handleAdd = async () => {
//   const resultRef = firestore.collection('users').doc(currentUser?.uid).collection('results')
//   const resultData = { goals, points}
//   await resultRef.add(resultData)
//   await resultRef.update(resultData)
// }

const TeamStats = ({ teamStats }) => {
  return (
    <IonContent>
      <IonList id="bg-col">
        <h1 id="statTitle">Team Statistics</h1>

        <div id="statContent">
          <hr id="contentDivider"></hr>

          <h5 color="dark" id="statTitle">
            Hooks
          </h5>
          <hr id="contentDivider"></hr>

          <TeamStatContent
            id="teamStatContent"
            statTitle="Hooks"
            teamStatValue="38"
            playerVar1="12"
            playerVar2="8"
            playerVar3="7"
            playerName1="Michael Barcoe"
            playerName2="John Doe"
            playerName3="Aaron Foley"
          ></TeamStatContent>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="statTitle">
            Blocks
          </h5>
          <hr id="contentDivider"></hr>
          <TeamStatContent
            id="teamStatContent"
            statTitle="Blocks"
            teamStatValue="38"
            playerVar1="12"
            playerVar2="8"
            playerVar3="7"
            playerName1="Michael Barcoe"
            playerName2="John Doe"
            playerName3="Aaron Foley"
          ></TeamStatContent>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="statTitle">
            Wides
          </h5>
          <hr id="contentDivider"></hr>
          <TeamStatContent
            statTitle="Wides"
            teamStatValue="38"
            playerVar1="12"
            playerVar2="8"
            playerVar3="7"
            playerName1="Michael Barcoe"
            playerName2="John Doe"
            playerName3="Aaron Foley"
          ></TeamStatContent>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="statTitle">
            Yellow Cards
          </h5>
          <TeamStatContent
            statTitle="Yellow Cards"
            teamStatValue="38"
            playerVar1="12"
            playerVar2="8"
            playerVar3="7"
            playerName1="Michael Barcoe"
            playerName2="John Doe"
            playerName3="Aaron Foley"
          ></TeamStatContent>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="statTitle">
            Red Cards
          </h5>
          <TeamStatContent
            statTitle="Red Cards"
            teamStatValue="38"
            playerVar1="12"
            playerVar2="8"
            playerVar3="7"
            playerName1="Michael Barcoe"
            playerName2="John Doe"
            playerName3="Aaron Foley"
          ></TeamStatContent>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="statTitle">
            Goals
          </h5>
          <TeamStatContent
            statTitle="Goals"
            teamStatValue="38"
            playerVar1="12"
            playerVar2="8"
            playerVar3="7"
            playerName1="Michael Barcoe"
            playerName2="John Doe"
            playerName3="Aaron Foley"
          ></TeamStatContent>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="statTitle">
            Points
          </h5>
          <TeamStatContent
            statTitle="Points"
            teamStatValue="38"
            playerVar1="12"
            playerVar2="8"
            playerVar3="7"
            playerName1="Michael Barcoe"
            playerName2="John Doe"
            playerName3="Aaron Foley"
          ></TeamStatContent>

          <hr id="contentDivider"></hr>
          <h5 color="dark" id="statTitle">
            Free's
          </h5>
          <TeamStatContent
            statTitle="Free's"
            teamStatValue="38"
            playerVar1="12"
            playerVar2="8"
            playerVar3="7"
            playerName1="Michael Barcoe"
            playerName2="John Doe"
            playerName3="Aaron Foley"
          ></TeamStatContent>
        </div>
      </IonList>
    </IonContent>
  );
};

export default TeamStats;
