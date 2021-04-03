import React, {useEffect, useState} from "react";
import { IonContent, IonPage, IonList} from '@ionic/react';
import PageHeader from '../../components/headers'
import DiaryEntryCard from '../../components/cards/diaryCard/index'

import {firestore} from'../../firebase'
import '../pages.css'


const DiaryEntriesListPage = () => {
  const [diaryEntries, setDiaryEntries ] = useState([])

  useEffect(() => {
    const diaryEntryRef = firestore.collection('diary_entries')
    diaryEntryRef.get().then((snapshot) => {
      const diaryEntries = snapshot.docs.map((doc) => ({ 
        id:doc.id,
        ...doc.data(),
      }))
      setDiaryEntries(diaryEntries)
    })
   },[]);

  return (
    <IonPage>
      <PageHeader title='My Diary Entries'></PageHeader>
        <IonContent>
        <IonList>
          {diaryEntries.map((diaryEntry) => <DiaryEntryCard diaryEntry={diaryEntry}></DiaryEntryCard> )}
        </IonList>
        </IonContent>
    </IonPage>
  );
};

export default DiaryEntriesListPage;