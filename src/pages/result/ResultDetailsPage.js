import React, {useEffect, useState } from "react";
import { IonPage } from '@ionic/react';
import PageHeaderDelete from '../../components/headers/deleteHeader/index'
import ResultDetails from '../../components/topicDetails/match/index'
import AlertDelete from "../../components/alerts/deleteAlert";

import { useParams, useHistory } from "react-router-dom";
import { firestore } from '../../firebase'
import { useAuth } from '../../contexts/authContext'


const ResultDetailsPage = () => {

  const { currentUser } = useAuth()
  const {id} = useParams()
  const history = useHistory();
  const  [result, setResult] =  useState(null)
  const  [delAlert, setDelAlert] = useState(false);

  useEffect(() => {
    const resultRef = firestore.collection('users').doc(currentUser?.uid).collection('results').doc(id)
    resultRef.get(id).then(doc => {
      const result = { id: doc.id, ...doc.data()}
      setResult(result);
    });
  }, [id]);

  const handleDelete = async () => {
    const resultRef = firestore.collection('users').doc(currentUser?.uid).collection('results').doc(id)
    await resultRef.delete()
    console.log('Confirm Okay');
    history.goBack();
  }

  return (
    <IonPage>
      <PageHeaderDelete title = "" action={()=>setDelAlert(true)}></PageHeaderDelete>
      <ResultDetails result={result}></ResultDetails>
      <AlertDelete delAlert={delAlert} setDelAlert={() => setDelAlert(false)} handleDelete={handleDelete}></AlertDelete>
    </IonPage>
  );
};

export default ResultDetailsPage;