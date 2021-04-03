import React, { useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";

import { useAuth } from "../../contexts/authContext";
import { firestore } from "../../firebase";
import { useHistory } from "react-router-dom";
import ResultForm from "../../components/forms/resultForm/index";

const AddResultPage = () => {
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  const [homeBlocks, setHomeBlocks] = useState("");
  const [awayBlocks, setAwayBlocks] = useState("");
  const [homeHooks, setHomeHooks] = useState("");
  const [awayHooks, setAwayHooks] = useState("");
  const [homeShots, setHomeShots] = useState("");
  const [awayShots, setAwayShots] = useState("");
  const [homeWides, setHomeWides] = useState("");
  const [awayWides, setAwayWides] = useState("");
  const [homeFouls, setHomeFouls] = useState("");
  const [awayFouls, setAwayFouls] = useState("");
  const [home65s, setHome65s] = useState("");
  const [away65s, setAway65s] = useState("");
  const [homeFrees, setHomeFrees] = useState("");
  const [awayFrees, setAwayFrees] = useState("");
  const [homePenalties, setHomePenalties] = useState("");
  const [awayPenalties, setAwayPenalties] = useState("");
  const [homePuckouts, setHomePuckouts] = useState("");
  const [awayPuckouts, setAwayPuckouts] = useState("");
  const [homeYCard, setHomeYCard] = useState("");
  const [awayYCard, setAwayYCard] = useState("");
  const [homeRCard, setHomeRCard] = useState("");
  const [awayRCard, setAwayRCard] = useState("");
  const [notes, setNotes] = useState("");

  const { currentUser } = useAuth();
  const history = useHistory();
  const [status, setStatus] = useState({
    loading: false,
    emailError: false,
    pwordError: false,
  });

  const handleAdd = async () => {
    const resultRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("results");
    const resultData = {
      homeScore,
      awayScore,
      homeHooks,
      awayHooks,
      homeBlocks,
      awayBlocks,
      homeWides,
      awayWides,
      homeShots,
      awayShots,
      homePuckouts,
      awayPuckouts,
      homeFrees,
      awayFrees,
      home65s,
      away65s,
      homePenalties,
      awayPenalties,
      homeFouls,
      awayFouls,
      homeYCard,
      awayYCard,
      homeRCard,
      awayRCard,
    };
    await resultRef.add(resultData);
    history.goBack();
  };

  return (
    <IonPage>
      <PageHeader title="Add Match Result"></PageHeader>

      <ResultForm
        homeScore={homeScore}
        awayScore={awayScore}
        homeHooks={homeHooks}
        awayHooks={awayHooks}
        homeBlocks={homeBlocks}
        awayBlocks={awayBlocks}
        homeWides={homeWides}
        awayWides={awayWides}
        homeShots={homeShots}
        awayShots={awayShots}
        homePuckouts={homePuckouts}
        awayPuckouts={awayPuckouts}
        homeFrees={homeFrees}
        awayFrees={awayFrees}
        home65s={home65s}
        away65s={away65s}
        homePenalties={homePenalties}
        awayPenalties={awayPenalties}
        homeFouls={homeFouls}
        awayFouls={awayFouls}
        homeYCard={homeYCard}
        awayYCard={awayYCard}
        homeRCard={homeRCard}
        awayRCard={awayRCard}
        notes={notes}
        setHomeScore={(e) => setHomeScore(e.detail.value)}
        setAwayScore={(e) => setAwayScore(e.detail.value)}
        setHomeBlocks={(e) => setHomeBlocks(e.detail.value)}
        setAwayBlocks={(e) => setAwayBlocks(e.detail.value)}
        setHomeFouls={(e) => setHomeFouls(e.detail.value)}
        setAwayFouls={(e) => setAwayFouls(e.detail.value)}
        setAwayFrees={(e) => setAwayFrees(e.detail.value)}
        setHomeFrees={(e) => setHomeFrees(e.detail.value)}
        setHomeHooks={(e) => setHomeHooks(e.detail.value)}
        setAwayHooks={(e) => setAwayHooks(e.detail.value)}
        setHomePenalties={(e) => setHomePenalties(e.detail.value)}
        setAwayPenalties={(e) => setAwayPenalties(e.detail.value)}
        setHomePuckouts={(e) => setHomePuckouts(e.detail.value)}
        setAwayPuckouts={(e) => setAwayPuckouts(e.detail.value)}
        setHomeRCard={(e) => setHomeRCard(e.detail.value)}
        setAwayRCard={(e) => setAwayRCard(e.detail.value)}
        setHomeShots={(e) => setHomeShots(e.detail.value)}
        setAwayShots={(e) => setAwayShots(e.detail.value)}
        setHomeWides={(e) => setHomeWides(e.detail.value)}
        setAwayWides={(e) => setAwayWides(e.detail.value)}
        setHomeYCard={(e) => setHomeYCard(e.detail.value)}
        setAwayYCard={(e) => setAwayYCard(e.detail.value)}
        setHome65s={(e) => setHome65s(e.detail.value)}
        setAway65s={(e) => setAway65s(e.detail.value)}
        setNotes={(e) => setNotes(e.detail.value)}
        handleAdd={handleAdd}
        loading={status.loading}
      ></ResultForm>
    </IonPage>
  );
};

export default AddResultPage;
