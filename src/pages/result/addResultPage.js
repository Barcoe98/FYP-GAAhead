import React, { useEffect, useState } from "react";
import { IonPage, IonText } from "@ionic/react";
import PageHeader from "../../components/headers";

import { useAuth } from "../../contexts/authContext";
import { firestore } from "../../firebase";
import { useParams, useHistory } from "react-router-dom";
import ResultForm from "../../components/forms/resultForm/index";

const AddResultPage = () => {

  const { currentUser } = useAuth();
  const teamId = '1kK33jibmLZ2RAEb7lF4u9g9STf2'
  const docId = 'team_stats'
  const { id } = useParams();

  var result;
  const history = useHistory();

  var [noGames, setNoGames] = useState();
  var [hGoals, setHGoals] = useState();
  var [aGoals, setAGoals] = useState();
  var [hPoints, setHPoints] = useState();
  var [aPoints, setAPoints] = useState();
  var [hBlocks, setHBlocks] = useState();
  var [aBlocks, setABlocks] = useState();
  var [hHooks, setHHooks] = useState();
  var [aHooks, setAHooks] = useState();
  var [hShots, setHShots] = useState();
  var [aShots, setAShots] = useState();
  var [hWides, setHWides] = useState();
  var [aWides, setAWides] = useState();
  var [hFouls, setHFouls] = useState();
  var [aFouls, setAFouls] = useState();
  var [h65s, setH65s] = useState();
  var [a65s, setA65s] = useState();
  var [hFrees, setHFrees] = useState();
  var [aFrees, setAFrees] = useState();
  var [hPenalties, setHPenalties] = useState();
  var [aPenalties, setAPenalties] = useState();
  var [hPuckouts, setHPuckouts] = useState();
  var [aPuckouts, setAPuckouts] = useState();
  var [hYCard, setHYCard] = useState();
  var [aYCard, setAYCard] = useState();
  var [hRCard, setHRCard] = useState();
  var [aRCard, setARCard] = useState();
  var [notes, setNotes] = useState('');

  var [teamGames, setTeamGames] = useState()
  var [teamGoals, setTeamGoals] = useState()
  var [teamPoints, setTeamPoints] = useState()
  var [teamBlocks, setTeamBlocks] = useState()
  var [teamHooks, setTeamHooks] = useState()
  var [teamWides, setTeamWides] = useState()
  var [teamShots, setTeamShots] = useState()
  var [teamFree65s, setTeamFree65s] = useState()
  var [teamFrees, setTeamFrees] = useState()
  var [teamPuckouts, setTeamPuckouts] = useState()
  var [teamFouls, setTeamFouls] = useState()
  var [teamPenalties, setTeamPenalties] = useState()
  var [teamYCards, setTeamYCards] = useState()
  var [teamRCards, setTeamRCards] = useState()

  const [hTeam, setHTeam] = useState("");
  const [aTeam, setATeam] = useState("");
  const [hTeamCrest, setHTeamCrest] = useState("");
  const [aTeamCrest, setATeamCrest] = useState();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [competition, setCompetition] = useState("");
  
function getFixtureDetails() {
  const ref = firestore
  .collection("users")
  .doc(teamId)
  .collection("fixtures")
  .doc(id);

  ref.get(id).then(doc => {
    const fixture = { id: doc.id, ...doc.data() };
    //set Team Attributes to matching in DB
    setHTeam(fixture?.hTeam)
    setHTeamCrest(fixture?.hTeamCrest)
    setATeam(fixture?.aTeam)
    setATeamCrest(fixture?.aTeamCrest)
    setTime(fixture?.time)
    setDate(fixture?.date)
    setVenue(fixture?.venue)
    setCompetition(fixture?.competition)
  });
}
  useEffect(() => {

    getFixtureDetails()

    const ref = firestore
      .collection("users")
      .doc(teamId)
      .collection("team_stats")
      .doc(docId);

    ref.get(docId).then(doc => {
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
    });
  }, [history, docId]);


  const handleAdd = async () => {

    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)
    .collection('team_stats')
    .doc('team_stats')
    
    const teamStatsData = {
      games: 1 + teamGames,
      goals: hGoals + teamGoals,
      points: hPoints + teamPoints,
      wides: hWides + teamWides,
      shots: hShots + teamShots,
      blocks: hBlocks + teamBlocks,
      hooks: hHooks + teamHooks,
      free65s: h65s + teamFree65s,
      frees: hFrees + teamFrees,
      puckouts: hPuckouts + teamPuckouts,
      fouls: hFouls + teamFouls,
      penalties: hPenalties + teamPenalties,
      yCards: hYCard + teamYCards,
      rCards: hRCard + teamRCards,
    }

    await ref.set(teamStatsData)

    const resultRef = firestore
      .collection("users")
      .doc(teamId)
      .collection("results");

    const resultData = {
      hTeam, hTeamCrest, aTeamCrest, aTeam, time, date, venue, competition,
      notes, 
      hGoals: hGoals, aGoals: aGoals,
      hPoints: hPoints, aPoints: aPoints,
      hHooks: hHooks, aHooks: aHooks,
      hBlocks: hBlocks ,aBlocks: aBlocks,
      hWides: hWides, aWides: aWides,
      hShots: hShots, aShots: aShots,
      hPuckouts: hPuckouts, aPuckouts: aPuckouts,
      hFrees: hFrees, aFrees: aFrees,
      h65s: h65s, a65s: a65s,
      hPenalties: hPenalties, aPenalties: aPenalties,
      hFouls: hFouls, aFouls: aFouls,
      hYCard: hYCard, aYCard: aYCard,
      hRCard: hRCard, aRCard: aRCard,    
    };
    
    await resultRef.add(resultData);

    const fixture = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("fixtures")
      .doc(id);

    await fixture.delete();
    console.log("Confirm Okay");
    history.push("/manager/result/list");
  };

  return (
    <IonPage>
      <PageHeader title="Add Match Result"></PageHeader>

      <IonText>{result?.homeHooks}</IonText>

      <ResultForm
        homeGoals={hGoals}
        awayGoals={aGoals}
        homePoints={hPoints}
        awayPoints={aPoints}
        homeHooks={hHooks}
        awayHooks={aHooks}
        homeBlocks={hBlocks}
        awayBlocks={aBlocks}
        homeWides={hWides}
        awayWides={aWides}
        homeShots={hShots}
        awayShots={aShots}
        homePuckouts={hPuckouts}
        awayPuckouts={aPuckouts}
        homeFrees={hFrees}
        awayFrees={aFrees}
        home65s={h65s}
        away65s={a65s}
        homePenalties={hPenalties}
        awayPenalties={aPenalties}
        homeFouls={hFouls}
        awayFouls={aFouls}
        homeYCard={hYCard}
        awayYCard={aYCard}
        homeRCard={hRCard}
        awayRCard={aRCard}
        notes={notes}
        setHomeGoals={(e) => setHGoals(parseInt(e.target.value))}
        setAwayGoals={(e) => setAGoals(parseInt(e.target.value))}
        setHomePoints={(e) => setHPoints(parseInt(e.target.value))}
        setAwayPoints={(e) => setAPoints(parseInt(e.target.value))}
        setHomeBlocks={(e) => setHBlocks(parseInt(e.target.value))}
        setAwayBlocks={(e) => setABlocks(parseInt(e.target.value))}
        setHomeFouls={(e) => setHFouls(parseInt(e.target.value))}
        setAwayFouls={(e) => setAFouls(parseInt(e.target.value))}
        setAwayFrees={(e) => setAFrees(parseInt(e.target.value))}
        setHomeFrees={(e) => setHFrees(parseInt(e.target.value))}
        setHomeHooks={(e) => setHHooks(parseInt(e.target.value))}
        setAwayHooks={(e) => setAHooks(parseInt(e.target.value))}
        setHomePenalties={(e) => setHPenalties(parseInt(e.target.value))}
        setAwayPenalties={(e) => setAPenalties(parseInt(e.target.value))}
        setHomePuckouts={(e) => setHPuckouts(parseInt(e.target.value))}
        setAwayPuckouts={(e) => setAPuckouts(parseInt(e.target.value))}
        setHomeRCard={(e) => setHRCard(parseInt(e.target.value))}
        setAwayRCard={(e) => setARCard(parseInt(e.target.value))}
        setHomeShots={(e) => setHShots(parseInt(e.target.value))}
        setAwayShots={(e) => setAShots(parseInt(e.target.value))}
        setHomeWides={(e) => setHWides(parseInt(e.target.value))}
        setAwayWides={(e) => setAWides(parseInt(e.target.value))}
        setHomeYCard={(e) => setHYCard(parseInt(e.target.value))}
        setAwayYCard={(e) => setAYCard(parseInt(e.target.value))}
        setHome65s={(e) => setH65s(parseInt(e.target.value))}
        setAway65s={(e) => setA65s(parseInt(e.target.value))}

        setNotes={(e) => setNotes(e.target.value)}

        handleAdd={handleAdd}
      ></ResultForm>

    </IonPage>
  );
};

export default AddResultPage;
