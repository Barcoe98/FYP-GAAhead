import React, {useEffect, useState } from "react";
import { IonContent, IonRow, IonCol, IonButton, IonGrid, IonList, IonPage, IonText, IonIcon} from '@ionic/react';
import { flame, time, barChart } from 'ionicons/icons';
import PageHeader from '../../components/headers'
//import '../fitnessTest/fitnessTest.css';
import { useParams } from "react-router-dom";
import { firestore } from '../../firebase'

const DiaryDetailsPage = () => {

  const {id} = useParams()
  const  [diarysEntries, setDiaryEntries] =  useState(null)

  useEffect(() => {
    const diaryRef = firestore.collection('diary_entries').doc(id)
    diaryRef.get(id).then(doc => {
      const diaryEntries = { id: doc.id, ...doc.data()}
      setDiaryEntries(diaryEntries);
    });
  }, [id]);


  return (
    <IonPage>
        <IonContent>
        <IonList id="bg-color"> 
          <div id="bg-img"></div>
          <h1 id="sectionTitle"> {diarysEntries?.title} </h1>
         
            <div id="sectionContent">
              <IonGrid>
                <IonRow>
                  <IonCol col-4>
                      <IonIcon size="large" icon={flame}></IonIcon><br></br>
                      <IonText className="center">{diarysEntries?.age}</IonText>
                  </IonCol>
                  <IonCol col-4>
                      <IonIcon size="large" icon={time}></IonIcon><br></br>
                      <IonText className="center">{diarysEntries?.position}
                      </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>

              <hr id="contentDivider"></hr>

              
              <IonGrid>
                <IonRow>
                  <IonCol col-4>
                      <IonIcon size="large" icon={flame}></IonIcon><br></br>
                      <IonText className="center">{diarysEntries?.hooks}</IonText>
                  </IonCol>
                  <IonCol col-4>
                      <IonIcon size="large" icon={time}></IonIcon><br></br>
                      <IonText className="center">{diarysEntries?.blocks}
                      </IonText>
                  </IonCol>
                  <IonCol col-4>
                      <IonIcon className="center" size="large" icon={barChart}></IonIcon><br></br>
                      <IonText className="center">{diarysEntries?.distance}</IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>

              <hr id="contentDivider"></hr>

              <h5 color="dark" id="sectionTitle">Bio</h5>
              <IonText>{diarysEntries?.warm_up}</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Exercises</h5>
              <IonText>{diarysEntries?.exercises}</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Warm Down</h5>
              <IonText>{diarysEntries?.warm_down}</IonText>
            </div>

          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default DiaryDetailsPage;