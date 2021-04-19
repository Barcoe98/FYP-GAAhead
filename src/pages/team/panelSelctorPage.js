import React, { useEffect, useState } from "react";
import { IonContent,IonRow, IonPage, IonCol, IonButton } from "@ionic/react";
import PageHeader from "../../components/headers";
import PlayerDropDown from "../../components/textComponents/matchStats";
import ItemDivider from "../../components/textInputs/itemDivider";
import TextInputField from "../../components/textInputs/textInputField";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import { useHistory } from "react-router-dom";




//https://www.youtube.com/watch?v=fQ4u1J717ys

const PanelSelectorPage = () => {
  const [players, setPlayers] = useState([]);

  const [title, setTitle] = useState("");
  const [position1, setPosition1] = useState("");
  const [position2, setPosition2] = useState("");
  const [position3, setPosition3] = useState("");
  const [position4, setPosition4] = useState("");
  const [position5, setPosition5] = useState("");
  const [position6, setPosition6] = useState("");
  const [position7, setPosition7] = useState("");
  const [position8, setPosition8] = useState("");
  const [position9, setPosition9] = useState("");
  const [position10, setPosition10] = useState("");
  const [position11, setPosition11] = useState("");
  const [position12, setPosition12] = useState("");
  const [position13, setPosition13] = useState("");
  const [position14, setPosition14] = useState("");
  const [position15, setPosition15] = useState("");
  const [position16, setPosition16] = useState("");
  const [position17, setPosition17] = useState("");
  const [position18, setPosition18] = useState("");
  const [position19, setPosition19] = useState("");
  const [position20, setPosition20] = useState("");

  var [teamId, setTeamId] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const { currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
      if (!doc.exists) {

        console.log('No such document');
        setErrorMessage('No Team Data Available, Join a Team')
        setShowAlert(true)

        //history.goBack();
      } else {
        const userDoc = { id: doc.id, ...doc.data() };

        //set ManagerId Attributes to matching in DB
        setTeamId(userDoc?.teamId)

        const ref = firestore
        .collection("users").where("teamId", '==', userDoc?.teamId)

        //snapshot of doc 
        ref.get().then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlayers(docs);
      });
      }
    })

  }, [currentUser?.uid]);

  const handleAdd = async () => {
    const data = {
      title,
      position1, position2, position3, position4, position5,
      position6, position7, position8, position9, position10,
      position11, position12, position13, position14, position15,
      position16, position17, position18, position19, position20
    };

    // if () {
    //   setErrorMessage('No Home Team Entered')
    //   setShowAlert(true)
    // }

    // else if () {
    //   setErrorMessage('No Away Team Entered')
    //   setShowAlert(true)
    // }

    // else {
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("teamSheets");

      await ref.add(data);
      console.log("added")
      history.goBack();
    // }
  };

  return (
    <IonPage>
      <PageHeader title="Panel Selector"></PageHeader>
      <IonContent>
      <ItemDivider dividerLabel="Team Sheet Title"></ItemDivider>

      <TextInputField  size="12" label="Team Sheet Title" color="dark" text={title}  setText={(e) => setTitle(e.detail.value)} placeholderText="Team Sheet Title" type="text" ></TextInputField>

        <ItemDivider dividerLabel="Goal Keeper"></ItemDivider>
          <PlayerDropDown players={players} setValue={(e) => setPosition1(e.detail.value)} positionValue={position1} positionNumber="1"></PlayerDropDown>

        <ItemDivider dividerLabel="Full Back Line"></ItemDivider>
          <PlayerDropDown players={players} setValue={(e) => setPosition2(e.detail.value)} positionValue={position2} positionNumber="2"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition3(e.detail.value)} positionValue={position3} positionNumber="3"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition4(e.detail.value)} positionValue={position4} positionNumber="4"></PlayerDropDown>

        <ItemDivider dividerLabel="Half Back Line"></ItemDivider>
          <PlayerDropDown players={players} setValue={(e) => setPosition5(e.detail.value)} positionValue={position5} positionNumber="5"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition6(e.detail.value)} positionValue={position6} positionNumber="6"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition7(e.detail.value)} positionValue={position7} positionNumber="7"></PlayerDropDown>

        <ItemDivider dividerLabel="Midfield"></ItemDivider>
          <PlayerDropDown players={players} setValue={(e) => setPosition8(e.detail.value)} positionValue={position8} positionNumber="8"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition9(e.detail.value)} positionValue={position9} positionNumber="9"></PlayerDropDown>
          
        <ItemDivider dividerLabel="Half Forward Line"></ItemDivider>
          <PlayerDropDown players={players} setValue={(e) => setPosition10(e.detail.value)} positionValue={position10} positionNumber="10"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition11(e.detail.value)} positionValue={position11} positionNumber="11"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition12(e.detail.value)} positionValue={position12} positionNumber="12"></PlayerDropDown>

        <ItemDivider dividerLabel="Full Forward Line"></ItemDivider>
          <PlayerDropDown players={players} setValue={(e) => setPosition13(e.detail.value)} positionValue={position13} positionNumber="13"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition14(e.detail.value)} positionValue={position14} positionNumber="14"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition15(e.detail.value)} positionValue={position15} positionNumber="15"></PlayerDropDown>

        <ItemDivider dividerLabel="Subs"></ItemDivider>
          <PlayerDropDown players={players} setValue={(e) => setPosition16(e.detail.value)} positionValue={position16} positionNumber="16"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition17(e.detail.value)} positionValue={position17} positionNumber="17"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition18(e.detail.value)} positionValue={position18} positionNumber="18"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition19(e.detail.value)} positionValue={position19} positionNumber="19"></PlayerDropDown>
          <PlayerDropDown players={players} setValue={(e) => setPosition20(e.detail.value)} positionValue={position20} positionNumber="20"></PlayerDropDown>

        <IonRow>
          <IonCol>
            <IonButton onClick={handleAdd} id="btnTheme" expand="block" color="dark" fill="solid" type="submit" >Add Panel Selection</IonButton>
          </IonCol>
        </IonRow>
        
  
      </IonContent>
    </IonPage>
  );
};

export default PanelSelectorPage;
