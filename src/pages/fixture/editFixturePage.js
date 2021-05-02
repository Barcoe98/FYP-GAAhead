import React, { useState, useEffect} from "react";
import { IonPage, IonContent, IonRow, IonCol, IonButton } from "@ionic/react";
import PageHeader from "../../components/headers";
import EditFixtureForm from "../../components/forms/fixtureForm";

import { firestore, storage } from "../../firebase";
import { useParams, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";


const EditFixturePage = () => {
  const [players, setPlayers] = useState([]);
  
  const { currentUser } = useAuth();
  const history = useHistory();
  const { id } = useParams();

  const [hTeam, setHomeTeam] = useState("");
  const [aTeam, setAwayTeam] = useState("");
  const [hTeamCrest, setHTeamCrest] = useState("");
  const [aTeamCrest, setATeamCrest] = useState();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [competition, setCompetition] = useState("");
  const [panel, setPanel] = useState("");

  const [fixture, setFixture] = useState();

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

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
        const userDoc = { id: doc.id, ...doc.data() };

        const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
        .collection("fixtures")
        .doc(id);
  
        ref.get(id).then((doc) => {
          const data = { id: doc.id, ...doc.data() };
          setFixture(data);
        });
    });

    setAwayTeam(fixture?.aTeam)
    setHomeTeam(fixture?.hTeam)
    setDate(fixture?.date)
    setTime(fixture?.time)
    setVenue(fixture?.venue)
    setCompetition(fixture?.competition)
    setPanel(fixture?.panel)
    setHTeamCrest(fixture?.hTeamCrest)
    setATeamCrest(fixture?.aTeamCrest)

  }, [currentUser?.uid, fixture?.aTeam, fixture?.aTeamCrest, fixture?.competition, fixture?.date, fixture?.hTeam, fixture?.hTeamCrest, fixture?.panel, fixture?.time, fixture?.venue, id]);



  const handleEdit = async () => {
    const data = {
      hTeam, aTeam, venue, time, date, competition, panel, hTeamCrest, aTeamCrest
     };

     data.aTeamCrest = await saveAwayCrest(aTeamCrest)
     data.hTeamCrest = await saveHomeCrest(hTeamCrest)
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("fixtures")
      .doc(id);

      await ref.update(data);
      history.goBack();
  };

  return (
    <IonPage id="bg-col">
    <IonContent id="wr-pg-bg">

      <PageHeader title="Edit Match Fixture"></PageHeader>

      <EditFixtureForm
        homeTeamImg={hTeamCrest}
        awayTeamImg={aTeamCrest}
        homeTeam={hTeam}
        awayTeam={aTeam}
        time={time}
        date={date}
        venue={venue}
        competition={competition}
        panel={panel}
        setAwayTeamImg={handleAwayCrestChange}
        setHomeTeamImg={handleHomeCrestChange}
        setHomeTeam={(e) => setHomeTeam(e.detail.value)}
        setAwayTeam={(e) => setAwayTeam(e.detail.value)}
        setTime={(e) => setTime(e.detail.value)}
        setDate={(e) => setDate(e.detail.value)}
        setVenue={(e) => setVenue(e.detail.value)}
        setCompetition={(e) => setCompetition(e.detail.value)}
        setPanel={(e) => setPanel(e.detail.value)}
        handleAdd={handleEdit}
        btnName="Update Fixture"
        players={players} >
      </EditFixtureForm>

    </IonContent>
  </IonPage>
  );
};

export default EditFixturePage;
