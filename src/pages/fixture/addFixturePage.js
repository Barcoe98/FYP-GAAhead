import React, { useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import { useAuth } from "../../contexts/authContext";

import { firestore } from "../../firebase";
import { useHistory } from "react-router-dom";
import FixtureForm from "../../components/forms/fixtureForm/index";

const AddFixturePage = () => {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [competition, setCompetition] = useState("");

  const { currentUser } = useAuth();
  const history = useHistory();
  const [status, setStatus] = useState({
    loading: false,
    emailError: false,
    pwordError: false,
  });

  const handleAdd = async () => {
    const workoutRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("fixtures");
    const workoutData = {
      homeTeam,
      awayTeam,
      homeScore,
      awayScore,
      venue,
      time,
      date,
      competition,
    };
    await workoutRef.add(workoutData);
    history.goBack();
  };

  return (
    <IonPage>
      <PageHeader title="Add Match Fixture"></PageHeader>

      <FixtureForm
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        homeScore={homeScore}
        awayScore={awayScore}
        time={time}
        date={date}
        venue={venue}
        competition={competition}
        setHomeTeam={(e) => setHomeTeam(e.detail.value)}
        setHomeScore={(e) => setHomeScore(e.detail.value)}
        setAwayTeam={(e) => setAwayTeam(e.detail.value)}
        setAwayScore={(e) => setAwayScore(e.detail.value)}
        setTime={(e) => setTime(e.detail.value)}
        setDate={(e) => setDate(e.detail.value)}
        setVenue={(e) => setVenue(e.detail.value)}
        setCompetition={(e) => setCompetition(e.detail.value)}
        handleAdd={handleAdd}
        loading={status.loading}
      ></FixtureForm>
    </IonPage>
  );
};

export default AddFixturePage;
