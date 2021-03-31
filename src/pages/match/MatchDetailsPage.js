import React, {useEffect, useState } from "react";
import { IonPage } from '@ionic/react';
import PageHeaderDelete from '../../components/headers/deleteHeader/index'
import MatchDetails from '../../components/topicDetails/match/index'
import AlertDelete from "../../components/alerts/deleteAlert";

import { useParams, useHistory } from "react-router-dom";
import { firestore } from '../../firebase'
import { useAuth } from '../../contexts/authContext'


const MatchDetailsPage = () => {

  const { currentUser } = useAuth()
  const {id} = useParams()
  const history = useHistory();
  const  [match, setMatch] =  useState(null)
  const  [delAlert, setDelAlert] = useState(false);

  useEffect(() => {
    const fTestRef = firestore.collection('users').doc(currentUser?.uid).collection('matches').doc(id)
    fTestRef.get(id).then(doc => {
      const fitnessTest = { id: doc.id, ...doc.data()}
      setMatch(fitnessTest);
    });
  }, [id]);

  const handleDelete = async () => {
    const matchRef = firestore.collection('users').doc(currentUser?.uid).collection('matches').doc(id)
    await matchRef.delete()
    console.log('Confirm Okay');
    history.goBack();
  }

  return (
    <IonPage>
      <PageHeaderDelete title = "" action={()=>setDelAlert(true)}></PageHeaderDelete>
      <MatchDetails match={match}></MatchDetails>
      <AlertDelete delAlert={delAlert} setDelAlert={() => setDelAlert(false)} handleDelete={handleDelete}></AlertDelete>
    </IonPage>
  );
};

export default MatchDetailsPage;