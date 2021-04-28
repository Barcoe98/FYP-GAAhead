import React, { useState } from "react";
import { IonPage, IonCol, IonDatetime } from "@ionic/react";
import PageHeader from "../../components/headers";
import FixtureForm from "../../components/forms/fixtureForm/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore, storage } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";


const AddFixturePage = () => {

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const [hTeam, setHomeTeam] = useState("");
  const [aTeam, setAwayTeam] = useState("");
  const [hTeamCrest, setHTeamCrest] = useState("");
  const [aTeamCrest, setATeamCrest] = useState();
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [competition, setCompetition] = useState("");

  const { currentUser } = useAuth();
  const history = useHistory();
  
  async function saveAwayCrest(blobUrl) {
    const ref = storage.ref('users/' + currentUser.uid + '/images/fixtures/away' + Date.now())
    const res = await fetch(blobUrl)
    const blob = await res.blob()
    const snapshot = await ref.put(blob)
    const url = await snapshot.ref.getDownloadURL()
    return url
  }

  async function saveHomeCrest(blobUrl) {
    const ref = storage.ref('users/' + currentUser.uid + '/images/fixtures/home' + Date.now())
    const res = await fetch(blobUrl)
    const blob = await res.blob()
    const snapshot = await ref.put(blob)
    const url = await snapshot.ref.getDownloadURL()
    return url
  }

  const handleHomeCrestChange = async (event) => {
    const file = event.target.files[0]
    const imgUrl = URL.createObjectURL(file)
    setHTeamCrest(imgUrl)
  }

  const handleAwayCrestChange = async (event) => {
    const file = event.target.files[0]
    const imgUrl = URL.createObjectURL(file)
    setATeamCrest(imgUrl)
  }

 

  const handleAdd = async () => {
    const data = {
      hTeamCrest,
      aTeamCrest,
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

    if (hTeamCrest === "") {
      setHTeamCrest("https://firebasestorage.googleapis.com/v0/b/fyp-gaahead-development.appspot.com/o/app%2Fimages%2Fbadge-placeholder.png?alt=media&token=2089bf78-0353-4cd8-b27e-29465392b5e1")
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
      data.aTeamCrest = await saveAwayCrest(aTeamCrest)
      data.hTeamCrest = await saveHomeCrest(hTeamCrest)
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("fixtures");

      await ref.add(data);
      history.goBack();
    }
  };

  return (
    <IonPage id="bg-col">
      <PageHeader title="Add Match Fixture"></PageHeader>
      <FixtureForm
        homeTeamImg={hTeamCrest}
        awayTeamImg={aTeamCrest}
        homeTeam={hTeam}
        awayTeam={aTeam}
        homeScore={homeScore}
        awayScore={awayScore}
        time={time}
        date={date}
        venue={venue}
        competition={competition}
        setAwayTeamImg={handleAwayCrestChange}
        setHomeTeamImg={handleHomeCrestChange}
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
