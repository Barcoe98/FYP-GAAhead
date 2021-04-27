import React, { useState, useEffect } from "react";
import {
  IonCol,
  IonRow,
  IonContent,
  IonGrid,
  IonButton,
  IonLabel,
  IonPage,
  IonItemDivider,
} from "@ionic/react";
import PageHeader from "../../components/headers";
import TextInputField from "../../components/textInputs/textInputField";
import AlertError from "../../components/alerts/errorAlert/index";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import { useHistory } from "react-router-dom";

import "../pages.css";
import YearInputField from "../../components/textInputs/yearInputField";


const ResetTeamStatsPage = () => {

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const { currentUser } = useAuth();
  const history = useHistory();

  const [year, setYear] = useState("");
  var [games, setTeamGames] = useState()
  var [goals, setTeamGoals] = useState()
  var [points, setTeamPoints] = useState()
  var [blocks, setTeamBlocks] = useState()
  var [hooks, setTeamHooks] = useState()
  var [wides, setTeamWides] = useState()
  var [shots, setTeamShots] = useState()
  var [free65s, setTeamFree65s] = useState()
  var [frees, setTeamFrees] = useState()
  var [puckouts, setTeamPuckouts] = useState()
  var [fouls, setTeamFouls] = useState()
  var [penalties, setTeamPenalties] = useState()
  var [yCards, setTeamYCards] = useState()
  var [rCards, setTeamRCards] = useState()

  useEffect(() => {

    //ref to team stats
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)
    .collection("team_stats")
    .doc("team_stats")

    ref.get("team_stats").then(doc => {
      
      if (!doc.exists) {
        console.log('No such document!');
        //history.goBack();
      } else {
        const result = { id: doc.id, ...doc.data() };

        //set Team Attributes to matching in DB
        setTeamGames(result?.games)
        setTeamBlocks(result?.blocks)
        setTeamHooks(result?.hooks)
        setTeamGoals(result?.goals)
        setTeamPoints(result?.points)
        setTeamShots(result?.shots)
        setTeamWides(result?.wides)
        setTeamFrees(result?.frees)
        setTeamFree65s(result?.free65s)
        setTeamPuckouts(result?.puckouts)
        setTeamPenalties(result?.penalties)
        setTeamFouls(result?.fouls)
        setTeamRCards(result?.rCards)
        setTeamYCards(result?.yCards)
      }
    });
  }, [currentUser?.uid, history]);


  const handleResetStats = async () => {

    // if year is empty , error alert shown
    if (year === "") {
      setErrorMessage('No Year Entered')
      setShowAlert(true)
    }
    else {

      //ref to team stats collection
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("more_team_stats")

      //grab current values of team stats 
      const data = {
        year, games,
        goals, points, wides,  shots,
        blocks, hooks, free65s, frees,
        puckouts, fouls, penalties, yCards, rCards
      }
      await ref.add(data)

      //ref to team stats document
      const statsRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("team_stats")
      .doc("team_stats")

      //set all Team stats in db to 0
      const statsData = {
        games: 0,
        goals: 0,
        points: 0,
        wides: 0,
        shots: 0,
        blocks: 0,
        hooks: 0,
        free65s: 0,
        frees: 0,
        puckouts: 0,
        fouls: 0,
        penalties: 0,
        yCards: 0,
        rCards: 0,
      }

      await statsRef.update(statsData)
      history.goBack();
    }
  };

  return (
    <IonPage>
      <PageHeader title="Reset Team Statistics"></PageHeader>
      <IonContent id="bg-col">
        <IonGrid id="bg-col">
          <IonRow>
            <IonCol>
              <IonItemDivider id="itm-divider-red">
                <IonLabel>Reset Team Statistics</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>

           {/*Year Input Fields & Labels*/}
           <IonRow>
           <YearInputField
            label="Year"
             text={year}
             size="12"
             setText={(e) => setYear(e.detail.value)}
             placeholder="Enter Year"
           ></YearInputField>
         </IonRow>

          {/* Join Button*/}
          <IonRow>
            <IonCol>
              <IonButton
                onClick={handleResetStats}
                id="btnTheme"
                expand="block"
                color="dark"
                fill="solid"
                type="submit"
              >
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>


      <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='Please Fill All Required Fields'
        showAlert={showAlert} 
        msg={errorMessage}>
      </AlertError>


    </IonPage>
  );
};

export default ResetTeamStatsPage;
