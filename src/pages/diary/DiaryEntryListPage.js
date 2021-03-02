import React, {useEffect, useState} from "react";
import { IonContent, IonIcon, IonCol, IonRow, IonGrid, IonPage, IonCard, IonList, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import PageHeader from '../../components/headers'
import {calendar } from "ionicons/icons";
import {firestore} from'../../firebase'


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
        {diaryEntries.map((diaryEntry) => 
            <IonCard id="deGridCards"  key={diaryEntry.id} routerLink={'/player/diary-entries/' , diaryEntry.id}>
            <IonGrid>
                <IonRow>
                    <IonCardTitle id="title" size="12">{diaryEntry.title}</IonCardTitle>
                </IonRow>
                <IonRow>
                    <IonCol size="2"><IonIcon icon={calendar}></IonIcon></IonCol>
                    <IonCol id="dDate"size="10">{diaryEntry.date}</IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>    
        )}
        </IonList>
        </IonContent>
    </IonPage>
  );
};

export default DiaryEntriesListPage;