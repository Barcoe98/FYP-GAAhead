import React, {useEffect, useState } from "react";
import { IonContent, IonRow, IonCol, IonButton, IonGrid, IonList, IonPage, IonText, IonIcon} from '@ionic/react';
import { flame, time, barChart } from 'ionicons/icons';
import PageHeader from '../../components/headers'
//import '../fitnessTest/fitnessTest.css';
import { useParams } from "react-router-dom";
import { firestore } from '../../firebase'

const PlayerDetailsPage = () => {

  const {id} = useParams()
  const  [players, setPlayers] =  useState(null)

  useEffect(() => {
    const playerRef = firestore.collection('players').doc(id)
    playerRef.get(id).then(doc => {
      const players = { id: doc.id, ...doc.data()}
      setPlayers(players);
    });
  }, [id]);


  return (
    <IonPage>
        <IonContent>
        <IonList id="bg-color"> 
          <div id="bg-img"></div>
          <h1 id="sectionTitle"> {players?.name} </h1>
         
            <div id="sectionContent">
              <IonGrid>
                <IonRow>
                  <IonCol col-4>
                      <IonIcon size="large" icon={flame}></IonIcon><br></br>
                      <IonText className="center">{players?.age}</IonText>
                  </IonCol>
                  <IonCol col-4>
                      <IonIcon size="large" icon={time}></IonIcon><br></br>
                      <IonText className="center">{players?.position}
                      </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>

              <hr id="contentDivider"></hr>

              
              <IonGrid>
                <IonRow>
                  <IonCol col-4>
                      <IonIcon size="large" icon={flame}></IonIcon><br></br>
                      <IonText className="center">{players?.hooks}</IonText>
                  </IonCol>
                  <IonCol col-4>
                      <IonIcon size="large" icon={time}></IonIcon><br></br>
                      <IonText className="center">{players?.blocks}
                      </IonText>
                  </IonCol>
                  <IonCol col-4>
                      <IonIcon className="center" size="large" icon={barChart}></IonIcon><br></br>
                      <IonText className="center">{players?.distance}</IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>

              <hr id="contentDivider"></hr>

              <h5 color="dark" id="sectionTitle">Bio</h5>
              <IonText>{players?.warm_up}</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Exercises</h5>
              <IonText>{players?.exercises}</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Warm Down</h5>
              <IonText>{players?.warm_down}</IonText>
            </div>

          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default PlayerDetailsPage;