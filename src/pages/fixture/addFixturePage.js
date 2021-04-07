import React, { useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import { useAuth } from "../../contexts/authContext";

import { firestore } from "../../firebase";
import { useHistory } from "react-router-dom";
import FixtureForm from "../../components/forms/fixtureForm/index";
import AlertError from "../../components/alerts/errorAlert";


const AddFixturePage = () => {

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

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

    const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("fixtures");

    const fixtureData = {
      homeTeam,
      awayTeam,
      venue,
      time,
      date,
      competition,
    };

    if (homeTeam === "") {
      setErrorMessage('No Home Team Entered')
      setShowAlert(true)
      console.log('Home error Message')   
    }
    else if (awayTeam === "") {
      setErrorMessage('No Away Team Entered')
      setShowAlert(true)
      console.log('Away error Message')   
    }
    else if (date === "") {
      setErrorMessage('No Date Entered')
      setShowAlert(true)
      console.log('Away error Message')   
    }    
    else if (time === "") {
      setErrorMessage('No Time Entered')
      setShowAlert(true)
      console.log('Time error Message')   
    }
    else if (venue === '') {
      setErrorMessage('No Venue Entered')
      setShowAlert(true)
      console.log('Away error Message')   
    }
    else if (competition === "") {
      setErrorMessage('No Competition Entered')
      setShowAlert(true)
      console.log('Away error Message')   
    }
    else {
      await ref.add(fixtureData);
      history.goBack();
      console.log('success') 
    }
    
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
