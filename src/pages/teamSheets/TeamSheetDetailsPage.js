import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import TeamSheet from "../../components/topicDetails/match/teamsheets/index"
import PageHeaderDelete from "../../components/headers/deleteHeader/index";

import AlertDelete from "../../components/alerts/deleteAlert";

import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

const TeamSheetDetailsPage = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const history = useHistory();

  const [teamSheet, setTeamSheet] = useState(null);
  const [delAlert, setDelAlert] = useState(false);
  var [teamId, setTeamId] = useState();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)
  
    ref.get(currentUser?.uid).then(doc => {
      
      const userDoc = { id: doc.id, ...doc.data() };
  
      //set ManagerId Attributes to matching in DB
      setTeamId(userDoc?.teamId)
  
      const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
        .collection("team_sheets")
        .doc(id);
  
      ref.get(id).then((doc) => {
        const data = { id: doc.id, ...doc.data() };
        setTeamSheet(data);
      })
    })
  }, [currentUser?.uid, id]);
  
    const handleDelete = async () => {
      const fTestRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("team_sheets")
      .doc(id);
      
      await fTestRef.delete();
      console.log("Confirm Okay");
      history.goBack("/manager/team-sheet/list");
    };
  

  return (
    <IonPage>
      <PageHeaderDelete   
        title=""
        action={() => setDelAlert(true)}>
      </PageHeaderDelete>

      <TeamSheet teamSheet={teamSheet}></TeamSheet>

      <AlertDelete
        delAlert={delAlert}
        setDelAlert={() => setDelAlert(false)}
        handleDelete={handleDelete}>
      </AlertDelete>

    </IonPage>
  );
};

export default TeamSheetDetailsPage;
