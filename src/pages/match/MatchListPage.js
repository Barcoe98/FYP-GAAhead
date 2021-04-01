import React, {useEffect, useState} from "react";
import { IonContent,  IonPage, IonList } from '@ionic/react';
import PageHeaderAdd from '../../components/headers/addHeader/index'
import MatchCard from '../../components/cards/matchCard/result/index'

import {firestore} from'../../firebase'
import { useAuth} from '../../contexts/authContext'


const MatchPage = () => {
  const [matches, setMatches] = useState([])
  const { currentUser } = useAuth()

  useEffect(() => {
    const matchRef = firestore.collection('users').doc(currentUser?.uid).collection('matches')
    console.log(currentUser?.uid)
    matchRef.get().then((snapshot) => {
      const matches = snapshot.docs.map((doc) => ({ 
        id:doc.id,
        ...doc.data(),
      }))
      setMatches(matches)
    })
   },[currentUser]);

  return (
    <IonPage>
    <PageHeaderAdd title="Matches" href="/manager/matches/add"></PageHeaderAdd>
      <IonContent>
          <IonList>
            {matches.map((match) => <MatchCard match={match}></MatchCard>)}
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MatchPage;