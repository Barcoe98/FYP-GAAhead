import React, {useEffect, useState } from "react";
import { IonContent, IonRow, IonCol, IonGrid, IonList, IonPage, IonText, IonIcon} from '@ionic/react';
import {  waterOutline, bedOutline, helpCircleOutline } from 'ionicons/icons';
import PageHeader from '../../components/headers'

import { useParams } from "react-router-dom";
import { firestore } from '../../firebase'

import './diaryEntry.css';
import '../pages.css'

const DiaryDetailsPage = () => {

  const {id} = useParams()
  const  [diarysEntry, setDiaryEntry] =  useState(null)

  useEffect(() => {
    const diaryRef = firestore.collection('diary_entries').doc(id)
    diaryRef.get(id).then(doc => {
      const diaryEntries = { id: doc.id, ...doc.data()}
      setDiaryEntry(diaryEntries);
    });
  }, [id]);


  return (
    <IonPage>
    <PageHeader title=""></PageHeader>
        <IonContent>
        <IonList id="d-bg-color"> 
          <div id="d-bg-img"></div>
          <h1 id="sectionTitle"> {diarysEntry?.title}</h1>
         
            <div id="sectionContent">
              
            <IonGrid>
            <IonRow>
              <IonCol size="3">
              <IonRow id="dIcon">
                <IonCol> <IonIcon size="large" icon={bedOutline}></IonIcon></IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>{diarysEntry?.hrs_of_sleep}</IonCol>
                </IonRow>
              </IonCol>

              <IonCol size="3">
                <IonRow id="dIcon">
                  <IonCol><IonIcon size="large" icon={waterOutline}></IonIcon></IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>{diarysEntry?.litres_water}</IonCol>
                </IonRow>
              </IonCol>

              <IonCol size="3">
                <IonRow id="dIcon">
                  <IonCol><IonIcon size="large" icon={helpCircleOutline}></IonIcon></IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>{diarysEntry?.total_calories}</IonCol>
                </IonRow>
              </IonCol>

              <IonCol size="3">
              <IonRow id="dIcon">
                <IonCol> <IonIcon size="large" icon={helpCircleOutline}></IonIcon></IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>{diarysEntry?.steps}</IonCol>
                </IonRow>
              </IonCol>

            </IonRow>
          </IonGrid>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Breakfast</h5>
              <IonText>{diarysEntry?.breakfast}</IonText>
              <IonText>Calories: 500</IonText><br></br>
              <IonText>A bunch of text</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Lunch</h5>
              <IonText>{diarysEntry?.lunch}</IonText>
              <IonText>Calories: 500</IonText><br></br>
              <IonText>A bunch of text</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Dinner</h5>
              <IonText>{diarysEntry?.dinner}</IonText>
              <IonText>Calories: 500</IonText><br></br>
              <IonText>A bunch of text</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Supper</h5>
              <IonText>{diarysEntry?.supper}</IonText>
              <IonText>Calories: 500</IonText><br></br>
              <IonText>A bunch of text</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Snacks</h5>
              <IonText>{diarysEntry?.snacks}</IonText>
              <IonText>Calories: 500</IonText><br></br>
              <IonText>A bunch of text</IonText>

            </div>
          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default DiaryDetailsPage;