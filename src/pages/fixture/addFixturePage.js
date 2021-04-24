import React, { useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import FixtureForm from "../../components/forms/fixtureForm/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";


const AddFixturePage = () => {

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const [hTeam, setHomeTeam] = useState("");
  const [aTeam, setAwayTeam] = useState("");
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [competition, setCompetition] = useState("");

  const { currentUser } = useAuth();
  const history = useHistory();

  const handleAdd = async () => {
    const fixtureData = {
      hTeam,
      aTeam,
      venue,
      time,
      date,
      competition,
    };

    if (hTeam === "") {
      setErrorMessage('No Home Team Entered')
      setShowAlert(true)
    }
    else if (aTeam === "") {
      setErrorMessage('No Away Team Entered')
      setShowAlert(true)
    }
    else if (date === "") {
      setErrorMessage('No Date Entered')
      setShowAlert(true)
    }    
    else if (time === "") {
      setErrorMessage('No Time Entered')
      setShowAlert(true)
    }
    else if (venue === '') {
      setErrorMessage('No Venue Entered')
      setShowAlert(true)
    }
    else if (competition === "") {
      setErrorMessage('No Competition Entered')
      setShowAlert(true)
    }
    else {
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("fixtures");

      await ref.add(fixtureData);
      history.goBack();
    }
  };

  return (
    <IonPage id="bg-col">
      <PageHeader title="Add Match Fixture"></PageHeader>

      <FixtureForm
        homeTeam={hTeam}
        awayTeam={aTeam}
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
        btnName="Add Fixture"
      ></FixtureForm>

      <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='Please Fill All Required Fields'
        showAlert={showAlert} 
        msg={errorMessage}>
      </AlertError>

    </IonPage>
  );
};

export default AddFixturePage;
