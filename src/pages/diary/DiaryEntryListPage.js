import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import DiaryEntryCard from "../../components/cards/diaryCard/index";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

import "../pages.css";

const DiaryEntriesListPage = () => {

  const [diaryEntries, setDiaryEntries] = useState([]);
  const { currentUser } = useAuth();


  useEffect(() => {
    const ref = firestore.collection("users").doc(currentUser?.uid).collection("diary_entries");
    ref.get().then((snapshot) => {
      const diaryEntries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDiaryEntries(diaryEntries);
    });
  }, [currentUser?.uid]);

  return (
    <IonPage >
      <PageHeaderAdd title="My Journal Entries" href="/diary-entries/add"></PageHeaderAdd>
      <IonContent>
        <IonList id="bg-col">
          {diaryEntries.map((diaryEntry) => (
            <DiaryEntryCard key={diaryEntry.id} diaryEntry={diaryEntry}></DiaryEntryCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default DiaryEntriesListPage;
